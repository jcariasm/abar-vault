const annual = [
  { index: 1, month: 'Agosto', contracted: 80, exercised: 56, delta: 24, balance: 24 },
  { index: 2, month: 'Septiembre', contracted: 80, exercised: 57, delta: 23, balance: 47 },
  { index: 3, month: 'Octubre', contracted: 80, exercised: 56, delta: 24, balance: 71 },
  { index: 4, month: 'Noviembre', contracted: 80, exercised: 78, delta: 2, balance: 73 },
  { index: 5, month: 'Diciembre', contracted: 80, exercised: 96, delta: -16, balance: 57 },
  { index: 6, month: 'Enero', contracted: 80, exercised: 91, delta: -11, balance: 46 },
  { index: 7, month: 'Febrero', contracted: 80, exercised: 85, delta: -5, balance: 41 },
  { index: 8, month: 'Marzo', contracted: 80, exercised: 79, delta: 1, balance: 42 },
  { index: 9, month: 'Abril', contracted: 80, exercised: 61, delta: 19, balance: 61 },
  { index: 10, month: 'Mayo', contracted: 80, exercised: 56, delta: 24, balance: 85 },
  { index: 11, month: 'Junio', contracted: 80, exercised: 0, delta: 80, balance: 165, pending: true },
  { index: 12, month: 'Julio', contracted: 80, exercised: 0, delta: 80, balance: 245, pending: true },
];

const activities = [
  { month: 'Enero', day: '7', description: 'junta', hours: 1, type: 'Soporte', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '9', description: 'visita presencial', hours: 1, type: 'Soporte', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '15', description: 'liberacion linea otorgada', hours: 4, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: '16', description: 'junta', hours: 1, type: 'Soporte', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '19', description: 'junta', hours: 2, type: 'Soporte', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '23', description: 'junta', hours: 1, type: 'Soporte', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '29', description: 'junta', hours: 1, type: 'Soporte', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: 'sem 5', description: 'linea otorgada', hours: 10, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: 'sem 12', description: 'linea otorgada', hours: 30, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: 'sem 19', description: 'parametrizacion', hours: 20, type: 'Build', track: 'AX-PARAM-2026-01' },
  { month: 'Enero', day: 'sem 26', description: 'parametrizacion', hours: 20, type: 'Build', track: 'AX-PARAM-2026-01' },
  { month: 'Febrero', day: '3', description: 'entrega parametrizacion', hours: 2, type: 'Build', track: 'AX-PARAM-2026-02' },
  { month: 'Febrero', day: '4', description: 'junta', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '10', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '12,13', description: 'ajustes parametrizacion', hours: 16, type: 'Build', track: 'AX-PARAM-2026-02' },
  { month: 'Febrero', day: '16,17', description: 'ajustes api 404', hours: 16, type: 'Build', track: 'AX-API-404-2026-02' },
  { month: 'Febrero', day: '16', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '17', description: 'ajustes error de resultado scoring', hours: 8, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '18,19,20', description: 'ajustes declaracion anual', hours: 24, type: 'Build', track: 'AX-DECL-2026-02' },
  { month: 'Febrero', day: '24', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '24,25', description: 'ajustes scoring sumas', hours: 8, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '25', description: 'ajustes solo vigentes', hours: 2, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '26', description: 'ajustes 18 meses', hours: 4, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '27', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Marzo', day: '2', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Marzo', day: '3,4,5,6', description: 'ajustes emitidos', hours: 24, type: 'Build', track: 'AX-EMITIDOS-2026-03' },
  { month: 'Marzo', day: '6', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Marzo', day: '9,10,11', description: 'ajustes linea sugerida', hours: 16, type: 'Build', track: 'AX-LINEA-2026-03' },
  { month: 'Marzo', day: '12,13', description: 'ajustes nuevo parametro', hours: 12, type: 'Build', track: 'AX-PARAM-2026-03' },
  { month: 'Marzo', day: '16,17,18,19,23', description: 'reporte factoria ajustes', hours: 24, type: 'Reporte', track: 'AX-REPORTES-2026-03' },
  { month: 'Marzo', day: '25', description: 'junta adriana', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '8', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '9', description: 'junta adriana', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '9', description: 'ajuste total emitidas PPD', hours: 8, type: 'Build', track: 'AX-PPD-2026-04' },
  { month: 'Abril', day: '10', description: 'ajuste total emitidas PPD', hours: 5, type: 'Build', track: 'AX-PPD-2026-04' },
  { month: 'Abril', day: '13', description: 'reportes PDFP', hours: 2, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '13', description: 'pruebas y ajustes score LET220105RE5', hours: 4, type: 'Build', track: 'AX-SCORING-2026-04' },
  { month: 'Abril', day: '13', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '14', description: 'reportes PDFP', hours: 2, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '15', description: 'reportes agrupado factoraje', hours: 2, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '16', description: 'rev ECA170616LC2', hours: 2, type: 'Revision', track: 'AX-REV-2026-04' },
  { month: 'Abril', day: '17', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '20', description: 'reportes agrupado factoraje', hours: 4, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '21', description: 'rev. error', hours: 3, type: 'Revision', track: 'AX-ERROR-2026-04' },
  { month: 'Abril', day: '21', description: 'junta marcos', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '23', description: 'reportes agrupado factoraje', hours: 3, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '27', description: 'envio de ajuste en reportes', hours: 0, type: 'Envio', track: 'Sin consumo registrado' },
  { month: 'Abril', day: '28', description: 'junta adriana', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Abril', day: '30', description: 'reportes PDFP', hours: 4, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '30', description: 'envio de ajuste en reportes', hours: 0, type: 'Envio', track: 'Sin consumo registrado' },
  { month: 'Abril', day: '-', description: 'propuestas y pm', hours: 16, type: 'PM', track: 'OK-AX-REPORTES-ABRIL' },
  { month: 'Mayo', day: '8', description: 'revision comentarios adriana', hours: 2, type: 'Revision', track: 'AX-REV-2026-05' },
  { month: 'Mayo', day: '12', description: 'revision y ajuste AXCDP', hours: 3, type: 'Build', track: 'AX-AXCDP-2026-05' },
  { month: 'Mayo', day: '12', description: 'ajuste total pasivo capital contable', hours: 2, type: 'Build', track: 'AX-CAPITAL-2026-05' },
  { month: 'Mayo', day: '12', description: 'sesion adriana revision reporte', hours: 2, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Mayo', day: '12', description: 'sesion marcos revision score', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
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
  if (item.delta < 0) return 'Sobreconsumo mensual';
  if (item.delta === 0) return 'Consumo exacto de bolsa';
  return 'Horas a favor del cliente';
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
          <td>${reading(item)}</td>
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
