/** Copy public commands and preserve explicit directory campaign fields on manual-setup documentation links. */
for(const button of document.querySelectorAll('[data-copy-target]'))button.addEventListener('click',async()=>{
 const target=document.getElementById(button.dataset.copyTarget);if(!target)return;
 try{await navigator.clipboard.writeText(target.textContent);button.textContent='Copied';setTimeout(()=>{button.textContent='Copy commands';},1800);}
 catch{button.textContent='Select commands to copy';}
});
for(const link of document.querySelectorAll('[data-directory-manual-link]')){
 const params=new URLSearchParams(location.search),url=new URL(link.href);
 for(const key of ['integration','utm_source','utm_medium','utm_campaign','utm_content']){
  const value=params.get(key);if(value&&/^[A-Za-z0-9_-]{1,190}$/.test(value))url.searchParams.set(key,value);
 }
 link.href=url.href;
}
