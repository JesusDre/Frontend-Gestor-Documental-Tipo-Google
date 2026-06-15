import { storageAlerts } from '../data';
import { AdminIcon } from './icons';

export function AlertsCard() {
  return (
    <article className="card border rounded-4 shadow-sm h-100">
      <div className="card-body p-3 p-lg-4">
        <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
          <h2 className="h5 fw-bold text-primary-emphasis mb-0 d-flex align-items-center gap-2">
            <span className="text-warning"><AdminIcon name="warning" /></span>
            Alertas de Almacenamiento
          </h2>
        </div>

        <div className="d-grid gap-3">
          {storageAlerts.map((alert) => {
            const variant = alert.tone === 'danger' ? 'danger' : alert.tone === 'warning' ? 'warning' : 'success';
            const bg = alert.tone === 'danger' ? '#fff3f3' : alert.tone === 'warning' ? '#fff8ea' : '#f4fffb';

            return (
              <section key={alert.name} className="border rounded-4 p-3" style={{ background: bg, borderColor: variant === 'danger' ? '#ffb5b5' : variant === 'warning' ? '#ffd597' : '#b7eadb' }}>
                <div className="d-flex justify-content-between align-items-start gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle text-white fw-bold d-inline-flex align-items-center justify-content-center" style={{ width: 36, height: 36, background: 'linear-gradient(90deg, #3c57f1 0%, #3828c4 50%, #6016b6 100%)'}}>{alert.name.charAt(0)}</div>
                    <div>
                      <div className="fw-bold text-primary-emphasis small">{alert.name}</div>
                      <div className="text-secondary small">{alert.mail}</div>
                    </div>
                  </div>
                  <span className="badge rounded-pill text-body-secondary" style={{ background: 'rgba(255,255,255,.8)' }}>{alert.percent}%</span>
                </div>

                <div className="progress mt-3" style={{ height: 8, background: 'rgba(255,255,255,.7)' }}>
                  <div className="progress-bar" style={{ width: alert.width, background: variant === 'danger' ? 'linear-gradient(90deg, #ff8a7e, #ff5a55)' : variant === 'warning' ? 'linear-gradient(90deg, #ffbe53, #ff9e17)' : 'linear-gradient(90deg, #63d8b0, #2ec8d0)' }} />
                </div>

                <div className="text-secondary small mt-2">{alert.detail}</div>
              </section>
            );
          })}
        </div>
          <span className="badge rounded-pill text-primary-emphasis align-self-start" style={{ backgroundColor: '#eef4ff' }}>3 usuarios sobre el 65% del límite</span>
      </div>
    </article>
  );
}