const quarters = [
  { id: '2026-Q1', months: 'Enero-Marzo', contracted: 714, actual: null },
  { id: '2026-Q2', months: 'Abril-Junio', contracted: 714, actual: null },
  { id: '2026-Q3', months: 'Julio-Septiembre', contracted: 714, actual: null },
  { id: '2026-Q4', months: 'Octubre-Diciembre', contracted: 714, actual: null },
];

const tasks = [
  {
    stream: 'Scoring crediticio',
    task: 'Validar servicios de verificacion y score en sandbox/produccion: bank account, employment, extended score, FICO e inclusion financiera.',
    evidence: 'Tickets ARF, coleccion Postman, respuesta API, bitacora de pruebas y decision de exposicion por perfil.',
    ok: 'Definir criterios de salida a produccion y responsables de validacion.',
  },
  {
    stream: 'Reportes de plataforma',
    task: 'Priorizar estados de cuenta PDF, recibos de Abono por Mandato, movimientos consolidados y dashboards para grupos/promotores.',
    evidence: 'Backlog Jira, mockups, contratos de API, ejemplos PDF y reglas de conciliacion.',
    ok: 'Aprobar alcance de abril-mayo y separar reportes regulatorios de reportes operativos.',
  },
  {
    stream: 'Cumplimiento SOFOM',
    task: 'Verificar landing y textos obligatorios: CONDUSEF, UNE, aviso de privacidad, despachos de cobranza y Buro de Entidades Financieras.',
    evidence: 'Checklist regulatorio, capturas, version publicada y aprobacion de operaciones/producto.',
    ok: 'Confirmar responsable legal/operativo de cada texto.',
  },
  {
    stream: 'MFA y seguridad',
    task: 'Cerrar flujo Cognito + MFA TOTP + lambdas custom, pruebas de recuperacion y casos de bloqueo.',
    evidence: 'Historias Jira, pruebas QA, logs Cognito, checklist de escenarios y release notes.',
    ok: 'Aprobar ventana de liberacion y plan de rollback.',
  },
  {
    stream: 'Fase 2 Business',
    task: 'Separar tareas de cuentas Concentradora/Privada, limites jerarquicos, SPEI IN/OUT, comisiones, grupos y promotores.',
    evidence: 'Mapa funcional, historias ARF, pruebas de permisos, fixtures y reglas de comision.',
    ok: 'Validar reglas de herencia y supersede antes de release.',
  },
  {
    stream: 'Monitoreo transaccional',
    task: 'Definir eventos criticos, tableros, alertas, responsables y SLA para monitoreo en tiempo real.',
    evidence: 'Event map, dashboard, reglas de alerta, bitacora de incidentes y runbook.',
    ok: 'Aprobar KPIs y responsables de atencion.',
  },
  {
    stream: 'Infraestructura AWS',
    task: 'Planear migracion MySQL 5.7 a 8.0 y evaluar optimizaciones Graviton/Valkey sin afectar operacion financiera.',
    evidence: 'SOW AWS, plan de pruebas, snapshot, ventana, rollback y estimacion de costo.',
    ok: 'Aprobar propuesta y ventana tecnica.',
  },
  {
    stream: 'Control de pruebas y liberaciones',
    task: 'Convertir seguimiento semanal en tareas de QA: ambientes, smoke tests, UAT, release notes y aprobaciones.',
    evidence: 'Checklist de release, matriz de pruebas, incidencias, aprobaciones y version desplegada.',
    ok: 'Definir gate de salida y duenio de aprobacion por propiedad digital.',
  },
];

const deliverables = [
  ['Reportes', 'Estados de cuenta, recibos de abono, dashboards y movimientos consolidados.'],
  ['Scoring', 'Integracion y validacion de servicios de verificacion crediticia.'],
  ['MFA', 'Autenticacion robusta con Cognito, TOTP y lambdas custom.'],
  ['Fase 2 Business', 'Cuentas Concentradoras/Privadas, SPEI, comisiones, grupos y promotores.'],
  ['Monitoreo', 'Transacciones en tiempo real, alertas y tablero ejecutivo.'],
  ['AWS', 'Migracion MySQL 8.0 y optimizaciones de infraestructura.'],
];

const quarterRows = document.querySelector('#quarter-rows');
const quarterBars = document.querySelector('#quarter-bars');
const taskRows = document.querySelector('#task-rows');
const deliverableCards = document.querySelector('#deliverable-cards');

function balanceLabel(item) {
  if (item.actual === null) return 'Pendiente Jira/Harvest';
  return item.contracted - item.actual;
}

quarterRows.innerHTML = quarters
  .map(
    (item) => `
      <tr>
        <td><strong>${item.id}</strong></td>
        <td>${item.months}</td>
        <td>${item.contracted}h</td>
        <td>${item.actual === null ? 'Pendiente' : `${item.actual}h`}</td>
        <td class="hours">${balanceLabel(item)}</td>
        <td><span class="quarter">Reset trimestral</span> El siguiente trimestre inicia en 0.</td>
      </tr>
    `
  )
  .join('');

quarterBars.innerHTML = quarters
  .map(
    (item) => `
      <div class="month-row">
        <header><span>${item.id}</span><strong>${item.contracted}h base</strong></header>
        <div class="bar"><span style="width: 100%"></span></div>
      </div>
    `
  )
  .join('');

taskRows.innerHTML = tasks
  .map(
    (item) => `
      <tr>
        <td><strong>${item.stream}</strong></td>
        <td>${item.task}</td>
        <td>${item.evidence}</td>
        <td>${item.ok}</td>
      </tr>
    `
  )
  .join('');

deliverableCards.innerHTML = deliverables
  .map(
    ([title, text]) => `
      <article>
        <span class="status review">Workstream</span>
        <h3>${title}</h3>
        <p>${text}</p>
        <small>Convertir seguimiento en tareas Jira + evidencia de release.</small>
      </article>
    `
  )
  .join('');
