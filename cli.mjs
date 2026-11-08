#!/usr/bin/env node
/** Offline provider and setup-documentation search. No API keys or network calls. */
import {readFile} from 'node:fs/promises';
import {searchCatalog} from './search.mjs';
try {
  const args=process.argv.slice(2);
  const action=args.shift()??'search';
  if(!['search','list'].includes(action))throw new Error('Usage: node cli.mjs search [words] [--auth TYPE] [--kind KIND] [--product PRODUCT] [--json]');
  const filters={},words=[];let json=false;
  while(args.length){
    const arg=args.shift();
    if(arg==='--json')json=true;
    else if(['--auth','--kind','--product'].includes(arg)){const value=args.shift();if(!value||value.startsWith('--'))throw new Error('A filter value is required.');filters[arg.slice(2)]=value;}
    else if(arg.startsWith('--'))throw new Error('Unknown option.');
    else words.push(arg);
  }
  const catalog=JSON.parse(await readFile(new URL('./catalog.json',import.meta.url),'utf8'));
  const rows=searchCatalog(catalog.entries,words.join(' '),filters);
  if(json)console.log(JSON.stringify(rows,null,2));
  else {
    console.log(`${rows.length} matching projects. Provider live verification: not established by this catalog.\n`);
    for(const row of rows)console.log(`${row.name} [${row.authentication.type}]\n  ${row.repositoryUrl}\n  Docs: ${row.providerDocs??row.authentication.helpUrl??'See repository'}\n  Credentials: ${row.authentication.requiredCredentialFields.join(', ')||'See setup guide'}\n`);
  }
}catch(error){console.error(error.message);process.exitCode=1;}
