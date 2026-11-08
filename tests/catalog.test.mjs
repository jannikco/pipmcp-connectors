/** Copied into the standalone public directory. No external services or credentials. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {searchCatalog} from '../search.mjs';
const root=new URL('../',import.meta.url);
const catalog=JSON.parse(await readFile(new URL('catalog.json',root),'utf8'));
test('independent pages and canonical sitemap exist',async()=>{
 assert.equal(catalog.counts.integrationPages,catalog.entries.length);assert.equal(new Set(catalog.entries.map(e=>e.id)).size,catalog.entries.length);
 const sitemap=await readFile(new URL('sitemap.xml',root),'utf8');
 for(const entry of catalog.entries){await access(new URL(entry.detailPath+'index.html',root));assert.ok(sitemap.includes(entry.canonicalUrl));assert.ok(entry.providerDocs);assert.ok(entry.authentication.type);}
 assert.equal(catalog.counts.workflowPages,catalog.workflows.length);
 for(const workflow of catalog.workflows){assert.ok(sitemap.includes(workflow.canonicalUrl));await access(new URL(workflow.detailPath+'index.html',root));const provider=catalog.entries.find(e=>e.id===workflow.providerId);assert.ok(workflow.steps.every(name=>provider.tools.some(tool=>tool.name===name)));assert.equal(workflow.definitionLevel,'Documented');}
 for(const id of ['openapi-to-mcp','swagger-to-mcp','postman-to-mcp','graphql-to-mcp'])await access(new URL('guides/'+id+'/index.html',root));
});
test('CLI and evidence/type filters agree',()=>{
 const first=catalog.entries[0];const rows=JSON.parse(execFileSync(process.execPath,['cli.mjs','search',first.id,'--json'],{encoding:'utf8'}));assert.deepEqual(rows,searchCatalog(catalog.entries,first.id));
 assert.ok(searchCatalog(catalog.entries,'',{artifactType:'Setup'}).every(e=>e.artifactType==='Setup'));
 assert.ok(searchCatalog(catalog.entries,'',{status:'Live'}).every(e=>['local','managed'].some(mode=>e.capabilityEvidence[mode].operations.some(op=>op.level==='Live'))));
});
test('no unpublished repository targets or secret settings are emitted',()=>{
 const known=new Set(catalog.projects.map(p=>p.repositoryUrl));
 for(const entry of catalog.entries){
  for(const repo of entry.repositories)assert.ok(known.has(repo.url));assert.equal(entry.repositoryUrl,entry.repositories[0]?.url??null);assert.ok(!('settings' in entry.authentication));
  const activation=new URL(entry.activationUrl);
  if(entry.managedAvailability.status==='manual-setup'){assert.ok(activation.pathname.endsWith('/guides/first-connection/'));assert.equal(activation.searchParams.get('app'),null);}
  else{assert.equal(activation.pathname,'/github/start');assert.equal(activation.searchParams.get('app'),entry.managedAvailability.status==='import-required'?null:entry.appSlug);assert.equal(activation.searchParams.get('integration'),entry.managedAvailability.status==='import-required'?entry.managedAvailability.integration:entry.product==='leadadapter'?'linkedin-mcp':entry.appSlug+'-mcp');}
  assert.equal(activation.searchParams.get('utm_content'),'directory');
 }
});
test('every relative navigation and asset resolves inside the standalone site',async()=>{
 const sitemap=await readFile(new URL('sitemap.xml',root),'utf8');
 for(const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)){
  assert.ok(match[1].startsWith(catalog.baseUrl));const relative=match[1].slice(catalog.baseUrl.length);
  const page=new URL(relative+'index.html',root);const html=await readFile(page,'utf8');
  for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
   const href=match[1];if(/^(?:https?:|data:|#|\?)/.test(href))continue;
   const destination=new URL(href,page);assert.ok(fileURLToPath(destination).startsWith(fileURLToPath(root)),'relative link escaped generated site');
   await access(destination.pathname.endsWith('/')?new URL('index.html',destination):destination);
  }
 }
});
