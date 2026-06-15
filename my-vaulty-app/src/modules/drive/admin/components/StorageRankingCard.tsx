import { storageBars } from '../data';

export function StorageRankingCard() {
  return (
    <article className="card border rounded-4 shadow-sm h-100">
      <div className="card-body p-3 p-lg-4">
        <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
          <div>
            <h2 className="h5 fw-bold text-primary-emphasis mb-1">Almacenamiento por Usuario (Top 10)</h2>
            <p className="text-secondary small mb-0">Uso de espacio asignado por persona</p>
          </div>
        </div>

        <div className="d-grid gap-3">
          {storageBars.map((bar) => (
            <div key={bar.name} className="d-grid align-items-center gap-2" style={{ gridTemplateColumns: '140px 1fr 64px' }}>
              <span className="text-end text-body-secondary small fw-semibold">{bar.name}</span>
              <div className="progress" style={{ height: 16, background: '#eef2ff' }}>
                <div className="progress-bar" style={{ width: `${bar.percent}%`, background: 'linear-gradient(90deg, #3c57f1 0%, #3828c4 50%, #6016b6 100%)' }} />
              </div>
              <span className="text-end text-body-secondary small fw-bold">{bar.value}</span>
            </div>
          ))}
        </div>

        <div className="d-grid mt-3 text-secondary-emphasis small" style={{ gridTemplateColumns: '140px 1fr 64px' }} aria-hidden="true">
          <span>0 GB</span>
          <span>25 GB</span>
          <span className="text-end">100 GB</span>
        </div>
      </div>
    </article>
  );
}