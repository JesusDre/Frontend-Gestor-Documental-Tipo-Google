import { AdminIcon } from './icons';
import { Topbar } from '../../../../shared/components/Topbar';

export function AdminTopbar() {
  return (
    <Topbar
      searchPlaceholder="Buscar..."
      searchIcon={<AdminIcon name="search" size={17} />}
      actions={(
        <>
          <button
            type="button"
            className="btn p-0 border-0 bg-transparent shadow-none d-inline-flex align-items-center justify-content-center"
            style={{ width: 28, height: 28, color: '#000000', boxShadow: 'none' }}
            aria-label="Notificaciones"
          >
            <AdminIcon name="bell" size={32} />
          </button>

          <div className="d-flex flex-column align-items-center justify-content-center text-center lh-sm">
            <span className="fw-bold small mb-1">Admin Demo</span>
            <span className="badge rounded-pill align-self-center" style={{ backgroundColor: '#ede5ff', color: '#6d4ef4', border: '1px solid transparent' }}>Administrador</span>
          </div>

          <div className="d-inline-flex align-items-center justify-content-center rounded-circle text-white fw-bold shadow-sm" style={{ width: 42, height: 42, background: 'linear-gradient(90deg, #3c57f1 0%, #3828c4 50%, #6016b6 100%)' }}>A</div>
        </>
      )}
    />
  );
}