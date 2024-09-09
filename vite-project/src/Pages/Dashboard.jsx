import React from 'react';
import style from './Dashboard.module.css'; // Archivo CSS para estilos opcionales

// Componente para la lista de tareas
const TaskListWidget = () => (
  <div className="widget task-list-widget">
    <h2>Lista de Tareas</h2>
    <ul>
      <li>Tarea 1</li>
      <li>Tarea 2</li>
      <li>Tarea 3</li>
    </ul>
  </div>
);

// Componente para el resumen de estadísticas
const SummaryWidget = () => (
  <div className="widget summary-widget">
    <h2>Resumen de Estadísticas</h2>
    <p>Total de Ventas: $10,000</p>
    <p>Nuevos Clientes: 150</p>
  </div>
);

// Componente principal del Dashboard
const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard-row">
      <ChartWidget />
      <SummaryWidget />
    </div>
    <div className="dashboard-row">
      <TaskListWidget />
    </div>
  </div>
);

export default Dashboard;
