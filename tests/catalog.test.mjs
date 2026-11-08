import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {searchCatalog} from '../search.mjs';
const catalog=JSON.parse(await readFile(new URL('../catalog.json',import.meta.url),'utf8'));
test('catalog has unique source-backed entries',()=>{assert.ok(catalog.entries.length>0);assert.equal(new Set(catalog.entries.map(e=>e.id)).size,catalog.entries.length);for(const entry of catalog.entries){assert.equal(entry.providerLiveVerification,'not-established');assert.match(entry.repositoryUrl,/^https:\/\/github.com\/jannikco\//);}});
test('CLI and local search agree',()=>{const first=catalog.entries[0];assert.ok(searchCatalog(catalog.entries,first.id).some(e=>e.id===first.id));const rows=JSON.parse(execFileSync(process.execPath,['cli.mjs','search',first.id,'--json'],{encoding:'utf8'}));assert.deepEqual(rows,searchCatalog(catalog.entries,first.id));});
test('authentication filters use exact recorded types',()=>{const type=catalog.entries[0].authentication.type;assert.ok(searchCatalog(catalog.entries,'',{auth:type}).every(e=>e.authentication.type===type));assert.deepEqual(searchCatalog(catalog.entries,'unmatched-provider-xyz-123'),[]);});
