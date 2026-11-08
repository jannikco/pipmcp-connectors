#!/usr/bin/env node
/** Offline provider and setup-documentation search. No API keys or network calls. */
import {readFile} from 'node:fs/promises';
import {searchCatalog} from './search.mjs';
import {searchTasks} from './tasks.mjs';
try {
  const args=process.argv.slice(2);
  const action=args.shift()??'search';
  if(!['search','list','tasks'].includes(action))throw new Error('Usage: node cli.mjs search|tasks [words] [--auth TYPE] [--kind KIND] [--product PRODUCT] [--category CATEGORY] [--artifactType Setup|Connector] [--status Documented|Tested|Live] [--json]');
  const filters={},words=[];let json=false;
  while(args.length){
    const arg=args.shift();
    if(arg==='--json')json=true;
    else if(['--auth','--kind','--product','--category','--artifactType','--status'].includes(arg)){const value=args.shift();if(!value||value.startsWith('--'))throw new Error('A filter value is required.');filters[arg.slice(2)]=value;}
    else if(arg.startsWith('--'))throw new Error('Unknown option.');
    else words.push(arg);
  }
  const catalog=JSON.parse(await readFile(new URL('./catalog.json',import.meta.url),'utf8'));
  const rows=action==='tasks'?searchTasks(catalog.tasks??[],words.join(' '),filters):searchCatalog(catalog.entries,words.join(' '),filters);
  if(action==='tasks'){if(json)console.log(JSON.stringify(rows,null,2));else{console.log(rows.length+' documented tasks; discovery does not authorize execution.\n');for(const row of rows)console.log(row.title+'\n  '+row.canonicalUrl+'\n  '+row.description+'\n  Projects: '+row.repositories.map(r=>r.url).join(', ')+'\n');}}
  else if(json)console.log(JSON.stringify(rows,null,2));
  else {
    console.log(`${rows.length} matching integration pages. Evidence is recorded separately for local and managed operations.\n`);
    for(const row of rows)console.log(`${row.name} [${row.artifactType}; ${row.authentication.type}]\n  ${row.canonicalUrl}\n  Published project: ${row.repositoryUrl??'not recorded'}\n  Local: ${row.localLevel}; managed: ${row.managedLevel}\n  Docs: ${row.providerDocs??row.authentication.helpUrl??'See page'}\n  Credentials: ${row.authentication.requiredCredentialFields.join(', ')||'See setup guide'}\n`);
  }
}catch(error){console.error(error.message);process.exitCode=1;}
