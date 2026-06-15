# Vaulty Frontend Architecture Guide

Fecha: 2026-06-14

## Objetivo

Este documento define la estructura objetivo del proyecto con un enfoque feature-based, evitando duplicar componentes entre roles y priorizando reutilizacion, separacion de responsabilidades y escalabilidad.

## Criterios de clasificacion

### 1. Shared
Mover aqui todo componente que no dependa de un rol y no dependa de negocio especifico.

Ejemplos esperados:
- Sidebar
- Topbar
- SearchInput
- Avatar
- UserBadge
- NotificationBell
- Card
- StatCard
- ProgressBar
- EmptyState
- Loader
- ConfirmDialog
- Dropdown
- Breadcrumb
- Tabs
- Button
- Input
- Select
- TextArea
- Table
- Pagination
- Modal
- Drawer

### 2. Layout
Mover aqui wrappers de aplicacion y estructura de pagina.

- MainLayout
- AdminLayout
- UserLayout
- AuthLayout

### 3. Modules
Mantener aqui solo logica y UI ligada al dominio.

- dashboard
- users
- storage
- audit
- profile

## Estado actual del proyecto

### Componentes actuales relevantes

- `src/modules/drive/admin/components/AdminDashboard.tsx`
- `src/modules/drive/admin/components/AdminDashboardShell.tsx`
- `src/modules/drive/admin/components/AdminSidebar.tsx`
- `src/modules/drive/admin/components/AdminTopbar.tsx`
- `src/modules/drive/admin/components/AdminMetricCard.tsx`
- `src/modules/drive/admin/components/AlertsCard.tsx`
- `src/modules/drive/admin/components/StorageRankingCard.tsx`
- `src/modules/drive/admin/components/ActivityCard.tsx`
- `src/modules/drive/admin/components/UsersCard.tsx`
- `src/modules/drive/admin/components/icons.tsx`
- `src/modules/drive/user/components/UserDriveDashboard.tsx`
- `src/app/layout/MainLayout.tsx`
- `src/modules/drive/components/DrivePage.tsx`
- `src/modules/docs/components/DocsPage.tsx`
- `src/modules/excel/components/ExcelPage.tsx`

## Propuesta de estructura objetivo

```text
src/
├── app/
│   ├── routes/
│   │   ├── drive/
│   │   ├── docs/
│   │   └── excel/
│   ├── layout/
│   │   ├── MainLayout.tsx
│   │   ├── AdminLayout.tsx
│   │   ├── UserLayout.tsx
│   │   └── AuthLayout.tsx
│   └── guards/
│
├── shared/
│   ├── components/
│   │   ├── Sidebar/
│   │   ├── Topbar/
│   │   ├── SearchInput/
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   ├── Card/
│   │   ├── StatCard/
│   │   ├── ProgressBar/
│   │   ├── Table/
│   │   ├── Pagination/
│   │   ├── Modal/
│   │   ├── Drawer/
│   │   ├── EmptyState/
│   │   ├── Loader/
│   │   ├── ConfirmDialog/
│   │   ├── Dropdown/
│   │   ├── Breadcrumb/
│   │   ├── Tabs/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Select/
│   │   └── TextArea/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   └── constants/
│
└── modules/
    ├── dashboard/
    │   ├── components/
    │   ├── data/
    │   └── types/
    ├── users/
    │   ├── components/
    │   ├── data/
    │   └── types/
    ├── storage/
    │   ├── components/
    │   ├── data/
    │   └── types/
    ├── audit/
    │   ├── components/
    │   ├── data/
    │   └── types/
    ├── profile/
    │   ├── components/
    │   ├── data/
    │   └── types/
    ├── docs/
    └── excel/
```

## Archivos que deben moverse

### Hacia shared/components

- `src/modules/drive/admin/components/AdminSidebar.tsx` -> `src/shared/components/Sidebar/Sidebar.tsx`
- `src/modules/drive/admin/components/AdminTopbar.tsx` -> `src/shared/components/Topbar/Topbar.tsx`
- `src/modules/drive/admin/components/AdminMetricCard.tsx` -> `src/shared/components/StatCard/StatCard.tsx`
- `src/modules/drive/admin/components/icons.tsx` -> `src/shared/components/Icon/Icon.tsx` o `src/shared/components/Icon/index.ts`

### Hacia app/layout

- `src/modules/drive/admin/components/AdminDashboardShell.tsx` -> `src/app/layout/AdminLayout.tsx`
- `src/app/layout/MainLayout.tsx` debe evolucionar a layout real o convertirse en wrapper base reutilizable

### Hacia modules/dashboard

- `src/modules/drive/admin/components/AdminDashboard.tsx` -> `src/modules/dashboard/components/DashboardAdminView.tsx` o equivalente
- `src/modules/drive/user/components/UserDriveDashboard.tsx` -> `src/modules/dashboard/components/DashboardUserView.tsx` o dividirlo en widgets internos del dominio
- `src/modules/drive/components/DrivePage.tsx` -> `src/modules/dashboard/components/DashboardPage.tsx` o route entry que compose el dashboard

### Hacia modules/storage

- `src/modules/drive/admin/components/StorageRankingCard.tsx`
- `src/modules/drive/admin/components/AlertsCard.tsx`

### Hacia modules/audit

- `src/modules/drive/admin/components/ActivityCard.tsx`

### Hacia modules/users

- `src/modules/drive/admin/components/UsersCard.tsx`

## Componentes duplicados detectados

No hay duplicados 1:1 por archivo entre Admin y User en el estado actual, pero si hay duplicacion de patrones visuales:

- Tarjetas KPI de admin y tarjetas resumen de usuario: mismo patron de icono, valor y etiqueta.
- Avatar circular en topbar, usuarios recientes y alertas.
- Barra de progreso en storage ranking, alertas y uso de almacenamiento en KPI.
- Cabeceras de card con titulo, subtitulo y acciones alineadas.
- Pildoras de estado/badge repetidas en usuario, admin y alertas.

## Componentes que deben fusionarse

- `AdminMetricCard` + tarjetas resumen de `UserDriveDashboard` -> `StatCard`
- `AdminSidebar` + cualquier sidebar futuro por rol -> `Sidebar`
- `AdminTopbar` + cualquier topbar futuro por rol -> `Topbar`
- `AdminIcon` -> `Icon` compartido o sistema de iconos compartido
- `Progress` visual repetido -> `ProgressBar` compartido
- `Avatar` circular repetido -> `Avatar` compartido
- `Badge` visual repetido -> `Badge` compartido

## Componentes que deben permanecer exclusivos de un modulo

### dashboard
- Composicion general de dashboard
- Layout de secciones y orden de widgets
- Hero y KPIs del dashboard

### storage
- Ranking de almacenamiento por usuario
- Alertas de almacenamiento
- Reglas de porcentaje y umbrales

### audit
- Lista de actividad reciente
- Tipos de evento y tiempos relativos

### users
- Lista de usuarios recientes
- Estado activo/inactivo y consumo por usuario

### profile
- Resumen de perfil y datos de cuenta
- Datos del usuario autenticado si se agregan al topbar

### docs y excel
- Mantener como dominios separados si siguen siendo features reales

## Reglas de arquitectura para futuras iteraciones

1. No crear componentes por rol si el comportamiento es igual.
2. Si dos componentes solo cambian textos, datos o iconos, unificarlos con props.
3. Si un componente depende de datos de negocio, no va a shared/components.
4. Si un componente solo arma layout, va a app/layout.
5. Si un componente representa un concepto del negocio, va a modules/<dominio>.
6. Las rutas deben componer layouts y modulos, no contener UI pesada.

## API propuesta para shared

### Sidebar
```tsx
<Sidebar items={menuItems} footerAction={logoutAction} brand={brand} />
```

### Topbar
```tsx
<Topbar search={<SearchInput />} user={user} notifications={count} />
```

### StatCard
```tsx
<StatCard icon="users" value="1,847" label="Total Usuarios" trend="+12%" />
```

### ProgressBar
```tsx
<ProgressBar value={46} tone="primary" />
```

## Nota operativa

Este archivo debe leerse antes de volver a reorganizar componentes del dashboard. Sirve como referencia base para evitar duplicacion y para decidir si un componente vive en shared, layout o module.
