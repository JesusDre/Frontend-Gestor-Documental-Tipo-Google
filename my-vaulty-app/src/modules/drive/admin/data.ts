import type { AdminNavigationItem, AdminStat, StorageBar } from './types';

export const navigation: AdminNavigationItem[] = [
  { label: 'Dashboard', active: true },
  { label: 'Gestión de Usuarios' },
  { label: 'Almacenamiento' },
  { label: 'Bitácora y Auditoría' },
];

export const stats: AdminStat[] = [
  { label: 'Total Usuarios', value: '1,847', trend: '+12%', tone: 'up' },
  { label: 'Archivos en el Sistema', value: '284,519', trend: '+8%', tone: 'up' },
  { label: 'Almacenamiento Usado', value: '4.2 TB', trend: '+3%', tone: 'up' },
  { label: 'Usuarios Activos Hoy', value: '342', trend: '-5%', tone: 'down' },
];

export const storageBars: StorageBar[] = [
  { name: 'Ana García', percent: 92, value: '92 GB' },
  { name: 'Carlos López', percent: 74, value: '74 GB' },
  { name: 'María Rodríguez', percent: 68, value: '68 GB' },
  { name: 'Juan Martínez', percent: 61, value: '61 GB' },
  { name: 'Laura Sánchez', percent: 55, value: '55 GB' },
  { name: 'Pedro Torres', percent: 48, value: '48 GB' },
  { name: 'Sofía Herrera', percent: 39, value: '39 GB' },
  { name: 'Diego Flores', percent: 34, value: '34 GB' },
  { name: 'Isabella Cruz', percent: 27, value: '27 GB' },
  { name: 'Miguel Vega', percent: 18, value: '18 GB' },
];

export const storageAlerts = [
  { name: 'Ana García', mail: 'ana.g@empresa.com', percent: 87, detail: '87 GB de 100 GB asignados', tone: 'danger', width: '87%' },
  { name: 'Carlos López', mail: 'carlos.l@empresa.com', percent: 74, detail: '74 GB de 100 GB asignados', tone: 'warning', width: '74%' },
  { name: 'María Rodríguez', mail: 'maria.r@empresa.com', percent: 68, detail: '68 GB de 100 GB asignados', tone: 'warning', width: '68%' },
];

export const recentActivities = [
  { icon: 'upload', text: 'Ana García subió Informe-Q2.pdf', time: 'hace 2 min' },
  { icon: 'download', text: 'Carlos López descargó Contrato-2024.docx', time: 'hace 8 min' },
  { icon: 'share', text: 'María Rodríguez compartió Carpeta Proyectos', time: 'hace 15 min' },
  { icon: 'delete', text: 'Juan Martínez eliminó Backup-old.zip', time: 'hace 22 min' },
  { icon: 'login', text: 'Laura Sánchez inició sesión Chrome · Windows', time: 'hace 31 min' },
  { icon: 'permission', text: 'Pedro Torres cambió permisos Equipo Marketing', time: 'hace 45 min' },
  { icon: 'upload', text: 'Sofía Herrera subió Diseños-finales.zip', time: 'hace 1 h' },
  { icon: 'download', text: 'Diego Flores descargó Reporte-ventas.xlsx', time: 'hace 1.5 h' },
];

export const recentUsers = [
  { initial: 'C', name: 'Camila Reyes', mail: 'camila.r@empresa.com', status: 'Activo', size: '2.1 GB' },
  { initial: 'R', name: 'Roberto Núñez', mail: 'r.nunez@empresa.com', status: 'Activo', size: '450 MB' },
  { initial: 'V', name: 'Valentina Mora', mail: 'v.mora@empresa.com', status: 'Inactivo', size: '0 MB' },
  { initial: 'A', name: 'Andrés Peña', mail: 'a.pena@empresa.com', status: 'Activo', size: '8.7 GB' },
  { initial: 'N', name: 'Natalia Ríos', mail: 'n.rios@empresa.com', status: 'Activo', size: '1.3 GB' },
];