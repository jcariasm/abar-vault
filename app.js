const typeLabels = {
  client: 'Cliente',
  document: 'Documento',
  lead: 'Lead',
  partner: 'Partner',
  sales: 'Sales material',
  simulator: 'Tool',
  tool: 'Tool'
};

const typeIcons = {
  client: 'CLI',
  document: 'DOC',
  lead: 'LED',
  partner: 'PAR',
  sales: 'SAL',
  simulator: 'SIM',
  tool: 'TOL'
};

const state = {
  filter: 'all',
  query: '',
  items: []
};

const grid = document.querySelector('#library-grid');
const searchInput = document.querySelector('#search-input');
const filterButtons = [...document.querySelectorAll('[data-filter]')];

function render() {
  const query = state.query.trim().toLowerCase();
  const items = state.items.filter((item) => {
    const matchesType = state.filter === 'all' || item.type === state.filter;
    const haystack = [item.title, item.description, ...(item.tags || [])].join(' ').toLowerCase();
    return matchesType && (!query || haystack.includes(query));
  });

  grid.innerHTML = items
    .map(
      (item) => `
        <article class="item-card">
          <div class="item-icon" aria-hidden="true">${typeIcons[item.type] || 'FILE'}</div>
          <div class="item-copy">
            <span>${typeLabels[item.type] || item.type}</span>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <div class="tags">
              ${(item.tags || []).map((tag) => `<small>${tag}</small>`).join('')}
            </div>
          </div>
          <a class="open-link" href="${item.href}" target="_blank" rel="noreferrer">
            Abrir
            <span aria-hidden="true">-&gt;</span>
          </a>
        </article>
      `
    )
    .join('');
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  render();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    filterButtons.forEach((current) => current.classList.toggle('active', current === button));
    render();
  });
});

fetch('/manifest.json')
  .then((response) => response.json())
  .then((library) => {
    document.querySelector('#library-title').textContent = library.title;
    document.querySelector('#library-description').textContent = library.description;
    state.items = library.items || [];
    render();
  })
  .catch(() => {
    grid.innerHTML = '<p class="empty">No se pudo cargar el manifiesto de la biblioteca.</p>';
  });
