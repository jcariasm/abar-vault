const state = {
  documents: [],
  query: '',
  client: 'all'
};

const documentsNode = document.querySelector('#documents');
const searchInput = document.querySelector('#search-input');
const clientFilter = document.querySelector('#client-filter');

function fileLabel(type) {
  return (type || 'DOC').slice(0, 4).toUpperCase();
}

function renderClients() {
  const clients = [...new Set(state.documents.map((item) => item.client).filter(Boolean))].sort();
  clientFilter.innerHTML = [
    '<option value="all">Todos los clientes</option>',
    ...clients.map((client) => `<option value="${client}">${client}</option>`)
  ].join('');
}

function renderDocuments() {
  const query = state.query.trim().toLowerCase();
  const docs = state.documents.filter((item) => {
    const matchesClient = state.client === 'all' || item.client === state.client;
    const haystack = [item.title, item.description, item.client, item.category, ...(item.tags || [])]
      .join(' ')
      .toLowerCase();
    return matchesClient && (!query || haystack.includes(query));
  });

  documentsNode.innerHTML = docs
    .map(
      (item) => `
        <article class="document-card">
          <div class="doc-head">
            <div>
              <span class="client">${item.client || 'General'}</span>
              <h2>${item.title}</h2>
            </div>
            <div class="doc-type" aria-hidden="true">${fileLabel(item.fileType)}</div>
          </div>
          <p>${item.description}</p>
          <div class="meta">
            <small>${item.category || 'Documento'}</small>
            <small>${item.date || 'Sin fecha'}</small>
            ${(item.tags || []).map((tag) => `<small>${tag}</small>`).join('')}
          </div>
          <a class="open" href="${item.href}" target="_blank" rel="noreferrer">Abrir documento</a>
        </article>
      `
    )
    .join('');
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  renderDocuments();
});

clientFilter.addEventListener('change', (event) => {
  state.client = event.target.value;
  renderDocuments();
});

fetch('/library/client-documents/manifest.json')
  .then((response) => response.json())
  .then((data) => {
    state.documents = data.documents || [];
    renderClients();
    renderDocuments();
  })
  .catch(() => {
    documentsNode.innerHTML = '<p>No se pudo cargar el repositorio de documentos.</p>';
  });
