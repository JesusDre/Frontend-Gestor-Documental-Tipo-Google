import { navigation } from '../data';
import { AdminIcon } from './icons';
import { Sidebar } from '../../../../shared/components/Sidebar';

export function AdminSidebar() {
  return (
    <Sidebar
      brandInitials="IV"
      brandTitle="Infinity Vault"
      badgeLabel="Panel Administrador"
      items={navigation.map((item) => ({
        label: item.label,
        active: item.active,
        icon: <AdminIcon name={item.label === 'Dashboard' ? 'pulse' : item.label === 'Gestión de Usuarios' ? 'users' : item.label === 'Almacenamiento' ? 'storage' : 'documents'} size={14} />,
      }))}
      footerAction={{
        label: 'Cerrar sesión',
        icon: <AdminIcon name="logout" size={14} />,
      }}
    />
  );
}