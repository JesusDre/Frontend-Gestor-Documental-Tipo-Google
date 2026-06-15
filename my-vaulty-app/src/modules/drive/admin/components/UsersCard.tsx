import { recentUsers } from '../data';

export function UsersCard() {
  return (
    <article className="card border rounded-4 shadow-sm h-100">
      <div className="card-body p-3 p-lg-4">
        <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
          <h2 className="h5 fw-bold text-primary-emphasis mb-0">Usuarios Recientes</h2>
          <span className="text-secondary small">5 usuarios activos</span>
        </div>

        <div className="d-grid gap-3">
          {recentUsers.map((user) => (
            <div key={user.name} className="d-flex align-items-center justify-content-between gap-3 py-2">
              <div className="d-flex align-items-center gap-2 min-w-0">
                <div className="rounded-circle text-white fw-bold d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 34, height: 34, background: 'linear-gradient(90deg, #3c57f1 0%, #3828c4 50%, #6016b6 100%)' }}>{user.initial}</div>
                <div className="min-w-0">
                  <div className="fw-bold text-primary-emphasis small text-truncate">{user.name}</div>
                  <div className="text-secondary small text-truncate">{user.mail}</div>
                </div>
              </div>
              <div className="d-grid justify-items-end gap-1 flex-shrink-0">
                <span className={`badge rounded-pill ${user.status === 'Activo' ? 'text-success' : 'text-secondary'}`} style={{ background: user.status === 'Activo' ? '#e9fbf4' : '#eff2f8' }}>{user.status}</span>
                <span className="text-secondary small text-end">{user.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}