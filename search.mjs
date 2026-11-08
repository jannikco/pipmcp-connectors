/** Search recorded integration setup facts locally; does not authenticate or execute providers. */
export function searchCatalog(entries, query = '', {auth, kind, product} = {}) {
  if (!Array.isArray(entries) || typeof query !== 'string') throw new TypeError('Search requires entries and a text query.');
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return entries.filter(entry => {
    if (auth && entry.authentication.type !== auth) return false;
    if (kind && entry.kind !== kind) return false;
    if (product && entry.product !== product) return false;
    const text = [entry.id,entry.name,entry.description,entry.appSlug,entry.authentication.type,...entry.authentication.requiredCredentialFields,...entry.authentication.requiredHeaderNames,entry.providerDocs,entry.authentication.helpUrl].filter(Boolean).join(' ').toLowerCase();
    return words.every(word=>text.includes(word));
  });
}
