/** Search recorded integration setup facts locally; does not authenticate or execute providers. */
export function searchCatalog(entries, query = '', {auth, kind, product, category, artifactType, status} = {}) {
  if (!Array.isArray(entries) || typeof query !== 'string') throw new TypeError('Search requires entries and a text query.');
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return entries.filter(entry => {
    if (auth && entry.authentication?.type !== auth) return false;
    if (kind && entry.kind !== kind) return false;
    if (product && entry.product !== product) return false;
    if (category && entry.category !== category) return false;
    if (artifactType && entry.artifactType !== artifactType) return false;
    if (status) {
      const levels=[entry.localLevel,entry.managedLevel];
      const operationLive=['local','managed'].some(mode=>entry.capabilityEvidence?.[mode]?.operations?.some(op=>op.level==='Live'));
      const highest=operationLive||levels.includes('Live')?'Live':levels.includes('Tested')?'Tested':'Documented';
      if(highest!==status)return false;
    }
    const text = [entry.id,entry.name,entry.description,entry.appSlug,entry.category,entry.artifactType,entry.authentication?.type,...(entry.authentication?.requiredCredentialFields??[]),...(entry.authentication?.requiredHeaderNames??[]),entry.providerDocs,entry.authentication?.helpUrl,...(entry.tools??[]).flatMap(tool=>[tool.name,tool.description,tool.method,tool.path])].filter(Boolean).join(' ').toLowerCase();
    return words.every(word=>text.includes(word));
  });
}
