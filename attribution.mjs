/** Carry explicit campaign tags through navigation without cookies, storage or viewer identity. */
export function attributedUrl(href, current, base) {
 const page=new URL(current), target=new URL(href,base??current);
 if(page.searchParams.get('utm_source')!=='github')return null;
 const campaign=page.searchParams.get('utm_campaign');
 if(!campaign||!/^github-[a-z0-9][a-z0-9-]{0,110}$/i.test(campaign))return null;
 const internal=target.origin===page.origin&&target.pathname.startsWith('/pipmcp-connectors/');
 const activation=['https://pipmcp.com','https://leadadapter.com'].includes(target.origin)&&target.pathname==='/github/start';
 if(!internal&&!activation)return null;
 for(const key of ['utm_source','utm_campaign','utm_content','utm_medium']){
  const value=page.searchParams.get(key);
  if(value&&/^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,119}$/.test(value))target.searchParams.set(key,value);
 }
 // A new explicitly selected task wins; do not carry an unrelated old flow into another provider.
 if(internal&&!target.searchParams.has('flow')){
  const flow=page.searchParams.get('flow');if(flow&&/^[a-z0-9][a-z0-9-]{0,119}$/.test(flow))target.searchParams.set('flow',flow);
 }
 return target.href;
}

if(typeof document!=='undefined'){
 const rewrite=(anchor)=>{const value=attributedUrl(anchor.getAttribute('href'),location.href,document.baseURI);if(value)anchor.href=value;};
 for(const anchor of document.querySelectorAll('a[href]'))rewrite(anchor);
 // Search cards are rendered dynamically; rewrite the actual selected link before its navigation.
 document.addEventListener('click',(event)=>{const anchor=event.target.closest?.('a[href]');if(anchor)rewrite(anchor);},true);
}
