/** Browser search uses only this public directory's static JSON. No analytics or provider calls. */
import {searchCatalog} from './search.mjs';
const ids=['search','category','artifact','status'];
const controls=Object.fromEntries(ids.map(id=>[id,document.getElementById(id)]));
const resultArea=document.getElementById('results');
const count=document.getElementById('result-count');
const loadMore=document.getElementById('load-more');
const query=new URLSearchParams(location.search);
for(const [id,control] of Object.entries(controls))control.value=query.get(id==='search'?'q':id)||'';
let shown=48;
function element(tag,text,className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;}
function card(row){
 const article=element('article',undefined,'card');
 const header=element('div',undefined,'card-header');header.append(element('span',row.name.slice(0,2).toUpperCase(),'provider-icon'),element('span',row.artifactType,'badge '+(row.artifactType==='Connector'?'connector':'')));
 const heading=element('div');heading.append(element('div',row.category.replaceAll('-',' '),'category'));
 const h=element('h2');const a=element('a',row.name);a.href=row.detailPath;h.append(a);heading.append(h);
 const evidence=element('div',undefined,'evidence-line');evidence.append(element('span','Local: '+row.localLevel+(row.localLiveCount?' · '+row.localLiveCount+' Live ops':'')),element('span','Managed: '+row.managedLevel+(row.managedLiveCount?' · '+row.managedLiveCount+' Live ops':'')));
 const footer=element('div',undefined,'card-footer');footer.append(element('span',row.authentication.type.replaceAll('_',' ')),element('span',row.repositories.length?'Public project ↗':'Setup guide →'));
 article.append(header,heading,element('p',row.description),evidence,footer);return article;
}
try{
 const response=await fetch(new URL('./catalog.json',import.meta.url));if(!response.ok)throw new Error('Directory unavailable');
 const catalog=await response.json();
 function render(){
  const rows=searchCatalog(catalog.entries,controls.search.value,{category:controls.category.value,artifactType:controls.artifact.value,status:controls.status.value});
  count.textContent=`${rows.length} matching integrations${rows.length>shown?' · showing '+shown:''}`;
  resultArea.replaceChildren(...rows.slice(0,shown).map(card));
  if(!rows.length)resultArea.append(element('p','No integrations match these filters. Try another provider, operation or category.','empty'));
  loadMore.hidden=rows.length<=shown;
  const url=new URL(location.href);for(const [id,control] of Object.entries(controls)){const key=id==='search'?'q':id;if(control.value)url.searchParams.set(key,control.value);else url.searchParams.delete(key);}history.replaceState(null,'',url);
 }
 for(const [id,control] of Object.entries(controls))control.addEventListener(id==='search'?'input':'change',()=>{shown=48;render();});
 loadMore.addEventListener('click',()=>{shown+=48;render();});render();
}catch{count.textContent='Browse the visible integrations below, or use the sitemap to view all provider pages.';}
