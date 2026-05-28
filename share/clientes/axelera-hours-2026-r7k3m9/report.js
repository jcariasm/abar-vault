const annualSource = [
  { index: 1, month: 'Agosto', contracted: 80, exercised: 56 },
  { index: 2, month: 'Septiembre', contracted: 80, exercised: 57 },
  { index: 3, month: 'Octubre', contracted: 80, exercised: 56 },
  { index: 4, month: 'Noviembre', contracted: 80, exercised: 78 },
  { index: 5, month: 'Diciembre', contracted: 80, exercised: 96 },
  { index: 6, month: 'Enero', contracted: 80, exercised: 91 },
  { index: 7, month: 'Febrero', contracted: 80, exercised: 85 },
  { index: 8, month: 'Marzo', contracted: 80, exercised: 79 },
  { index: 9, month: 'Abril', contracted: 80, exercised: 61 },
  { index: 10, month: 'Mayo', contracted: 80, exercised: 56 },
  { index: 11, month: 'Junio', contracted: 80, exercised: 0, pending: true },
  { index: 12, month: 'Julio', contracted: 80, exercised: 0, pending: true },
];

function withQuarterlyRollover(items) {
  let quarterBalance = 0;
  return items.map((item) => {
    if ((item.index - 1) % 3 === 0) quarterBalance = 0;
    const delta = item.contracted - item.exercised;
    quarterBalance += delta;
    return {
      ...item,
      delta,
      balance: quarterBalance,
      quarter: Math.ceil(item.index / 3),
      reset: (item.index - 1) % 3 === 0,
    };
  });
}

const annual = withQuarterlyRollover(annualSource);

const activities = [
  { month: 'Enero', day: '7', description: 'alineacion de alcance y prioridades', hours: 1, type: 'Tarea', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '9', description: 'levantamiento presencial de contexto operativo', hours: 1, type: 'Tarea', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '15', description: 'liberacion linea otorgada', hours: 4, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: '16', description: 'seguimiento de definicion funcional', hours: 1, type: 'Tarea', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '19', description: 'validacion de criterios con cliente', hours: 2, type: 'Tarea', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '23', description: 'seguimiento de pendientes de liberacion', hours: 1, type: 'Tarea', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '29', description: 'cierre de pendientes y priorizacion', hours: 1, type: 'Tarea', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: 'sem 5', description: 'linea otorgada', hours: 10, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: 'sem 12', description: 'linea otorgada', hours: 30, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: 'sem 19', description: 'parametrizacion', hours: 20, type: 'Build', track: 'AX-PARAM-2026-01' },
  { month: 'Enero', day: 'sem 26', description: 'parametrizacion', hours: 20, type: 'Build', track: 'AX-PARAM-2026-01' },
  { month: 'Febrero', day: '3', description: 'entrega parametrizacion', hours: 2, type: 'Build', track: 'AX-PARAM-2026-02' },
  { month: 'Febrero', day: '4', description: 'alineacion de parametrizacion', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '10', description: 'validacion tecnica con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '12,13', description: 'ajustes parametrizacion', hours: 16, type: 'Build', track: 'AX-PARAM-2026-02' },
  { month: 'Febrero', day: '16,17', description: 'ajustes api 404', hours: 16, type: 'Build', track: 'AX-API-404-2026-02' },
  { month: 'Febrero', day: '16', description: 'revision tecnica con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '17', description: 'ajustes error de resultado scoring', hours: 8, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '18,19,20', description: 'ajustes declaracion anual', hours: 24, type: 'Build', track: 'AX-DECL-2026-02' },
  { month: 'Febrero', day: '24', description: 'seguimiento tecnico con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '24,25', description: 'ajustes scoring sumas', hours: 8, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '25', description: 'ajustes solo vigentes', hours: 2, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '26', description: 'ajustes 18 meses', hours: 4, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '27', description: 'validacion tecnica con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Marzo', day: '2', description: 'alineacion tecnica con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Marzo', day: '3,4,5,6', description: 'ajustes emitidos', hours: 24, type: 'Build', track: 'AX-EMITIDOS-2026-03' },
  { month: 'Marzo', day: '6', description: 'revision tecnica con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Marzo', day: '9,10,11', description: 'ajustes linea sugerida', hours: 16, type: 'Build', track: 'AX-LINEA-2026-03' },
  { month: 'Marzo', day: '12,13', description: 'ajustes nuevo parametro', hours: 12, type: 'Build', track: 'AX-PARAM-2026-03' },
  { month: 'Marzo', day: '16,17,18,19,23', description: 'reporte factoria ajustes', hours: 24, type: 'Reporte', track: 'AX-REPORTES-2026-03' },
  { month: 'Marzo', day: '25', description: 'validacion funcional con Adriana', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '8', description: 'alineacion tecnica con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '9', description: 'validacion funcional con Adriana', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '9', description: 'ajuste total emitidas PPD', hours: 8, type: 'Build', track: 'AX-PPD-2026-04' },
  { month: 'Abril', day: '10', description: 'ajuste total emitidas PPD', hours: 5, type: 'Build', track: 'AX-PPD-2026-04' },
  { month: 'Abril', day: '13', description: 'reportes PDFP', hours: 2, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '13', description: 'pruebas y ajustes score LET220105RE5', hours: 4, type: 'Build', track: 'AX-SCORING-2026-04' },
  { month: 'Abril', day: '13', description: 'revision tecnica con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '14', description: 'reportes PDFP', hours: 2, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '15', description: 'reportes agrupado factoraje', hours: 2, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '16', description: 'rev ECA170616LC2', hours: 2, type: 'Revision', track: 'AX-REV-2026-04' },
  { month: 'Abril', day: '17', description: 'seguimiento tecnico con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '20', description: 'reportes agrupado factoraje', hours: 4, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '21', description: 'rev. error', hours: 3, type: 'Revision', track: 'AX-ERROR-2026-04' },
  { month: 'Abril', day: '21', description: 'validacion tecnica con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '23', description: 'reportes agrupado factoraje', hours: 3, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '27', description: 'envio de ajuste en reportes', hours: 0, type: 'Envio', track: 'Sin consumo registrado' },
  { month: 'Abril', day: '28', description: 'validacion funcional con Adriana', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '30', description: 'reportes PDFP', hours: 4, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '30', description: 'envio de ajuste en reportes', hours: 0, type: 'Envio', track: 'Sin consumo registrado' },
  { month: 'Abril', day: '-', description: 'propuestas y pm', hours: 16, type: 'PM', track: 'OK-AX-REPORTES-ABRIL' },
  { month: 'Mayo', day: '8', description: 'revision comentarios adriana', hours: 2, type: 'Revision', track: 'AX-REV-2026-05' },
  { month: 'Mayo', day: '12', description: 'revision y ajuste AXCDP', hours: 3, type: 'Build', track: 'AX-AXCDP-2026-05' },
  { month: 'Mayo', day: '12', description: 'ajuste total pasivo capital contable', hours: 2, type: 'Build', track: 'AX-CAPITAL-2026-05' },
  { month: 'Mayo', day: '12', description: 'validacion de reporte con Adriana', hours: 2, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Mayo', day: '12', description: 'validacion de scoring con Marcos', hours: 1, type: 'Tarea', track: 'Pendiente de regla billable' },
  { month: 'Mayo', day: '13', description: 'ajuste scoring', hours: 8, type: 'Build', track: 'AX-SCORING-2026-05' },
  { month: 'Mayo', day: '14', description: 'ajuste scoring', hours: 4, type: 'Build', track: 'AX-SCORING-2026-05' },
  { month: 'Mayo', day: '18', description: 'reporte factoraje', hours: 8, type: 'Reporte', track: 'AX-FACTOR-2026-05' },
  { month: 'Mayo', day: '19', description: 'reporte factoraje', hours: 8, type: 'Reporte', track: 'AX-FACTOR-2026-05' },
  { month: 'Mayo', day: '20', description: 'reporte factoraje', hours: 8, type: 'Reporte', track: 'AX-FACTOR-2026-05' },
  { month: 'Mayo', day: '-', description: 'propuestas y pm', hours: 12, type: 'PM', track: 'OK-AX-REPORTES-MAYO' },
];

const monthBars = document.querySelector('#month-bars');
const annualRows = document.querySelector('#annual-rows');
const activityRows = document.querySelector('#activity-rows');
const filters = [...document.querySelectorAll('[data-month]')];
const maxHours = Math.max(...annual.map((item) => item.exercised));
let selectedMonth = 'all';

function renderBars() {
  monthBars.innerHTML = annual
    .map((item) => {
      const label = item.pending ? 'pendiente' : `${item.exercised}h`;
      const width = item.pending ? 0 : (item.exercised / maxHours) * 100;
      return `
        <div class="month-row">
          <header><span>${item.index}. ${item.month}</span><strong>${label}</strong></header>
          <div class="bar"><span class="${item.delta < 0 ? 'over' : ''}" style="width: ${width}%"></span></div>
        </div>
      `;
    })
    .join('');
}

function reading(item) {
  if (item.pending) return 'Mes futuro sin horas ejercidas reportadas';
  if (item.reset && item.delta < 0) return 'Inicio de trimestre con sobreconsumo';
  if (item.reset) return 'Inicio de trimestre: rollover en cero';
  if (item.delta < 0) return 'Sobreconsumo mensual';
  if (item.delta === 0) return 'Consumo exacto de bolsa';
  return 'Horas a favor dentro del trimestre';
}

function renderAnnualRows() {
  annualRows.innerHTML = annual
    .map(
      (item) => `
        <tr class="${item.delta < 0 ? 'negative-row' : ''}">
          <td>${item.index}. ${item.month}</td>
          <td>${item.contracted}</td>
          <td>${item.pending ? '-' : item.exercised}</td>
          <td class="${item.delta < 0 ? 'negative' : 'positive'}">${item.delta}</td>
          <td class="hours">${item.balance}</td>
          <td><span class="quarter">T${item.quarter}</span> ${reading(item)}</td>
        </tr>
      `
    )
    .join('');
}

function typeClass(type) {
  if (type === 'Build') return 'build';
  if (type === 'Reporte') return 'report';
  if (type === 'PM') return 'pm';
  return '';
}

function renderActivities() {
  const visible = activities.filter((item) => selectedMonth === 'all' || item.month === selectedMonth);
  activityRows.innerHTML = visible
    .map(
      (item) => `
        <tr>
          <td>${item.month}</td>
          <td>${item.day}</td>
          <td><strong>${item.description}</strong></td>
          <td class="hours">${item.hours}</td>
          <td><span class="tag ${typeClass(item.type)}">${item.type}</span></td>
          <td>${item.track}</td>
        </tr>
      `
    )
    .join('');
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    selectedMonth = button.dataset.month;
    filters.forEach((item) => item.classList.toggle('active', item === button));
    renderActivities();
  });
});

renderBars();
renderAnnualRows();
renderActivities();
