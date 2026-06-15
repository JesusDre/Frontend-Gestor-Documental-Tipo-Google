import type { AdminIconName } from './icons';
import { recentActivities } from '../data';
import { AdminIcon } from './icons';

export function ActivityCard() {
  return (
    <article className="card rounded-4 shadow-sm h-100">
      <div className="card-body p-3 p-lg-4">
        <h2 className="h5 fw-bold text-primary-emphasis mb-3">Actividad Reciente</h2>

        <div className="d-grid gap-2">
          {recentActivities.map((activity, index) => (
            <div key={`${activity.text}-${index}`} className="d-flex align-items-center justify-content-between gap-3 py-2">
              <div className="d-flex align-items-center gap-2 min-w-0">
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 32, height: 32, background: '#eef4ff', color: '#5f48f0' }}>
                  <AdminIcon name={activity.icon as AdminIconName} />
                </div>
                <div className="text-body-secondary small text-truncate">
                  <strong className="text-primary-emphasis">{activity.text.split(' ')[0]} {activity.text.split(' ')[1]}</strong> {activity.text.split(' ').slice(2).join(' ')}
                </div>
              </div>
              <span className="text-secondary small flex-shrink-0">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}