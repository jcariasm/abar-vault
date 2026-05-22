const reports = {
  'sail-away': {
    name: 'Sail Away',
    plan: 'Bolsa mensual de advisory, growth y entregables ejecutivos.',
    contracted: 80,
    activities: [
      { date: 'May 21', title: 'Revision de funnel y oportunidades de growth', note: 'Sesion estrategica', owner: 'JC', hours: 2.5, billable: true, deliverable: 'Growth simulator v1' },
      { date: 'May 20', title: 'Ajustes al simulador y copy ejecutivo', note: 'Producto interactivo', owner: 'AS', hours: 5, billable: true, deliverable: 'Sail Away Growth Simulator' },
      { date: 'May 17', title: 'QA visual responsive y pruebas de conversion', note: 'Calidad y aprobacion', owner: 'JC', hours: 3, billable: true, deliverable: 'Checklist QA' },
      { date: 'May 15', title: 'Preparacion de propuesta de entrenamiento', note: 'Material comercial', owner: 'LL', hours: 6, billable: true, deliverable: 'Training wireframes' },
      { date: 'May 14', title: 'Coordinacion interna y minuta de avances', note: 'Operacion', owner: 'AB', hours: 1, billable: false, deliverable: 'Minuta interna' },
      { date: 'May 12', title: 'Analisis de posicionamiento y benchmarks', note: 'Investigacion', owner: 'AS', hours: 8, billable: true, deliverable: 'Benchmark memo' },
      { date: 'May 09', title: 'Diseno de wireframe para landing training', note: 'UX/UI', owner: 'JC', hours: 7, billable: true, deliverable: 'Landing wireframe' },
      { date: 'May 07', title: 'Llamada de seguimiento y priorizacion', note: 'Cuenta', owner: 'AB', hours: 1.5, billable: false, deliverable: 'Plan semanal' },
      { date: 'May 05', title: 'Mockups visuales para campana', note: 'Creatividad', owner: 'LL', hours: 9.5, billable: true, deliverable: 'Mockups A/B' },
      { date: 'May 02', title: 'Arquitectura inicial de contenidos', note: 'Estrategia', owner: 'AS', hours: 6, billable: true, deliverable: 'Mapa de contenidos' },
    ],
    deliverables: [
      { title: 'Sail Away Growth Simulator', description: 'Tool interactivo publicado para estimar crecimiento rentable.', status: 'Publicado', state: 'done', href: '/tools/sail-away/' },
      { title: 'Training landing wireframes', description: 'Wireframe y dos rutas visuales para aprobacion del programa.', status: 'En revision', state: 'review', href: '#' },
      { title: 'Benchmark memo', description: 'Lectura ejecutiva de oportunidades de contenido y venta consultiva.', status: 'Compartido', state: 'done', href: '#' },
    ],
  },
  kio: {
    name: 'KIO',
    plan: 'Bolsa de arquitectura, AI suite y soporte a presentaciones ejecutivas.',
    contracted: 60,
    activities: [
      { date: 'May 18', title: 'Ajustes a deck ejecutivo AI Suite', note: 'Presentacion', owner: 'JC', hours: 8, billable: true, deliverable: 'AI Suite deck' },
      { date: 'May 14', title: 'Revision de narrativa tecnica', note: 'Estrategia', owner: 'AS', hours: 4, billable: true, deliverable: 'Narrativa v2' },
      { date: 'May 10', title: 'Coordinacion de materiales', note: 'Operacion', owner: 'AB', hours: 2, billable: false, deliverable: 'Lista de assets' },
    ],
    deliverables: [
      { title: 'AI Suite executive deck', description: 'Deck con propuesta visual y narrativa actualizada.', status: 'Compartido', state: 'done', href: '#' },
      { title: 'Narrativa tecnica', description: 'Documento base para adaptar mensajes por audiencia.', status: 'En revision', state: 'review', href: '#' },
    ],
  },
  royal: {
    name: 'Royal Holiday',
    plan: 'Bolsa de discovery, automatizacion comercial y activos digitales.',
    contracted: 40,
    activities: [
      { date: 'May 16', title: 'Discovery de procesos y oportunidades', note: 'Consultoria', owner: 'AS', hours: 3.5, billable: true, deliverable: 'Discovery notes' },
      { date: 'May 11', title: 'Mapa preliminar de integraciones', note: 'Arquitectura', owner: 'JC', hours: 5, billable: true, deliverable: 'Mapa integraciones' },
      { date: 'May 08', title: 'Preparacion de agenda y minuta', note: 'Cuenta', owner: 'AB', hours: 1, billable: false, deliverable: 'Minuta' },
    ],
    deliverables: [
      { title: 'Discovery notes', description: 'Resumen de puntos de dolor, stakeholders y oportunidades.', status: 'Compartido', state: 'done', href: '#' },
      { title: 'Mapa de integraciones', description: 'Vista preliminar para priorizar automatizaciones.', status: 'Borrador', state: 'review', href: '#' },
    ],
  },
};

const state = {
  client: 'sail-away',
  filter: 'all',
};

const activityRows = document.querySelector('#activity-rows');
const deliverablesNode = document.querySelector('#deliverables');
const clientSelect = document.querySelector('#client-select');
const filterButtons = [...document.querySelectorAll('[data-filter]')];

function number(value) {
  return Number(value).toLocaleString('es-MX', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

function statusClass(activity) {
  return activity.billable ? 'billable' : 'non-billable';
}

function render() {
  const report = reports[state.client];
  const used = report.activities
    .filter((item) => item.billable)
    .reduce((sum, item) => sum + item.hours, 0);
  const remaining = Math.max(report.contracted - used, 0);
  const percent = Math.min(Math.round((used / report.contracted) * 100), 100);
  const activities = report.activities.filter((item) => {
    if (state.filter === 'billable') return item.billable;
    if (state.filter === 'non-billable') return !item.billable;
    return true;
  });

  document.querySelector('.eyeline').textContent = `Cliente: ${report.name}`;
  document.querySelector('#client-name').textContent = report.name;
  document.querySelector('#client-plan').textContent = report.plan;
  document.querySelector('#contracted-hours').textContent = number(report.contracted);
  document.querySelector('#used-hours').textContent = number(used);
  document.querySelector('#remaining-hours').textContent = number(remaining);
  document.querySelector('#usage-percent').textContent = `${percent}%`;
  document.querySelector('.balance-ring').style.borderTopColor = percent > 75 ? 'var(--orange)' : 'var(--signal)';
  document.querySelector('#recommendation-copy').textContent =
    remaining < report.contracted * 0.25
      ? 'El saldo esta por debajo del 25%. Conviene solicitar recarga para no frenar actividades priorizadas.'
      : 'El saldo cubre el ritmo actual. Recomendamos revisar recarga al cierre de la siguiente semana.';

  activityRows.innerHTML = activities
    .map(
      (item) => `
        <tr>
          <td>${item.date}</td>
          <td>
            <div class="activity-title">
              <strong>${item.title}</strong>
              <span>${item.note}</span>
            </div>
          </td>
          <td>${item.owner}</td>
          <td class="hours">${number(item.hours)}</td>
          <td><span class="status ${statusClass(item)}">${item.billable ? 'Billable' : 'No billable'}</span></td>
          <td>${item.deliverable}</td>
        </tr>
      `
    )
    .join('');

  deliverablesNode.innerHTML = report.deliverables
    .map(
      (item) => `
        <article class="deliverable-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <footer>
            <span class="deliverable-status ${item.state}">${item.status}</span>
            <a href="${item.href}" target="_blank" rel="noreferrer">Abrir</a>
          </footer>
        </article>
      `
    )
    .join('');
}

clientSelect.addEventListener('change', (event) => {
  state.client = event.target.value;
  render();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    render();
  });
});

document.querySelector('#recharge-button').addEventListener('click', () => {
  document.querySelector('#recommendation-copy').textContent =
    'Solicitud preparada: en la siguiente fase este boton abriria aprobacion de recarga o contacto directo con Abargon.';
});

render();
