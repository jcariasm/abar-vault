const monthly = [
  { month: 'Enero', hours: 91 },
  { month: 'Febrero', hours: 85 },
  { month: 'Marzo', hours: 79 },
  { month: 'Abril', hours: 61 },
];

const activities = [
  { month: 'Enero', day: '7', description: 'junta', hours: 1, type: 'Soporte', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '9', description: 'visita presencial', hours: 1, type: 'Soporte', track: 'Pendiente de ligar a Jira/OK' },
  { month: 'Enero', day: '15', description: 'liberacion linea otorgada', hours: 4, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: 'sem 5', description: 'linea otorgada', hours: 10, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: 'sem 12', description: 'linea otorgada', hours: 30, type: 'Build', track: 'AX-LINEA-2026-01' },
  { month: 'Enero', day: 'sem 19', description: 'parametrizacion', hours: 20, type: 'Build', track: 'AX-PARAM-2026-01' },
  { month: 'Enero', day: 'sem 26', description: 'parametrizacion', hours: 20, type: 'Build', track: 'AX-PARAM-2026-01' },
  { month: 'Febrero', day: '3', description: 'entrega parametrizacion', hours: 2, type: 'Build', track: 'AX-PARAM-2026-02' },
  { month: 'Febrero', day: '4', description: 'junta', hours: 1, type: 'Soporte', track: 'Pendiente de regla billable' },
  { month: 'Febrero', day: '12,13', description: 'ajustes parametrizacion', hours: 16, type: 'Build', track: 'AX-PARAM-2026-02' },
  { month: 'Febrero', day: '16,17', description: 'ajustes api 404', hours: 16, type: 'Build', track: 'AX-API-404-2026-02' },
  { month: 'Febrero', day: '17', description: 'ajustes error de resultado scoring', hours: 8, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '18,19,20', description: 'ajustes declaracion anual', hours: 24, type: 'Build', track: 'AX-DECL-2026-02' },
  { month: 'Febrero', day: '24,25', description: 'ajustes scoring sumas', hours: 8, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '25', description: 'ajustes solo vigentes', hours: 2, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Febrero', day: '26', description: 'ajustes 18 meses', hours: 4, type: 'Build', track: 'AX-SCORING-2026-02' },
  { month: 'Marzo', day: '3,4,5,6', description: 'ajustes emitidos', hours: 24, type: 'Build', track: 'AX-EMITIDOS-2026-03' },
  { month: 'Marzo', day: '9,10,11', description: 'ajustes linea sugerida', hours: 16, type: 'Build', track: 'AX-LINEA-2026-03' },
  { month: 'Marzo', day: '12,13', description: 'ajustes nuevo parametro', hours: 12, type: 'Build', track: 'AX-PARAM-2026-03' },
  { month: 'Marzo', day: '16,17,18,19,23', description: 'reporte factoria ajustes', hours: 24, type: 'Reporte', track: 'AX-REPORTES-2026-03' },
  { month: 'Abril', day: '9', description: 'ajuste total emitidas PPD', hours: 8, type: 'Build', track: 'AX-PPD-2026-04' },
  { month: 'Abril', day: '10', description: 'ajuste total emitidas PPD', hours: 5, type: 'Build', track: 'AX-PPD-2026-04' },
  { month: 'Abril', day: '13', description: 'reportes PDFP', hours: 2, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '13', description: 'pruebas y ajustes score LET220105RE5', hours: 4, type: 'Build', track: 'AX-SCORING-2026-04' },
  { month: 'Abril', day: '14', description: 'reportes PDFP', hours: 2, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '15', description: 'reportes agrupado factoraje', hours: 2, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '16', description: 'rev ECA170616LC2', hours: 2, type: 'Revision', track: 'AX-REV-2026-04' },
  { month: 'Abril', day: '20', description: 'reportes agrupado factoraje', hours: 4, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '21', description: 'rev. error', hours: 3, type: 'Revision', track: 'AX-ERROR-2026-04' },
  { month: 'Abril', day: '23', description: 'reportes agrupado factoraje', hours: 3, type: 'Reporte', track: 'AX-FACTOR-2026-04' },
  { month: 'Abril', day: '30', description: 'reportes PDFP', hours: 4, type: 'Reporte', track: 'AX-PDFP-2026-04' },
  { month: 'Abril', day: '30', description: 'propuestas y pm', hours: 16, type: 'PM', track: 'OK-AX-REPORTES-ABRIL' },
];

const bars = document.querySelector('#month-bars');
const rows = document.querySelector('#activity-rows');
const filters = [...document.querySelectorAll('[data-month]')];
const max = Math.max(...monthly.map((item) => item.hours));
let selectedMonth = 'all';

function renderBars() {
  bars.innerHTML = monthly
    .map(
      (item) => `
        <div class="month-row">
          <header><span>${item.month}</span><strong>${item.hours}h</strong></header>
          <div class="bar"><span style="width: ${(item.hours / max) * 100}%"></span></div>
        </div>
      `
    )
    .join('');
}

function typeClass(type) {
  if (type === 'Build') return 'build';
  if (type === 'Reporte') return 'report';
  return '';
}

function renderRows() {
  const visible = activities.filter((item) => selectedMonth === 'all' || item.month === selectedMonth);
  rows.innerHTML = visible
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
    renderRows();
  });
});

renderBars();
renderRows();
