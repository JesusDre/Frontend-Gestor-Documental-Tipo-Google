import type { AdminStat } from '../types';
import { AdminIcon } from './icons';
import { StatCard } from '../../../../shared/components/StatCard';

export function AdminMetricCard({ stat }: { stat: AdminStat }) {
  const iconName = stat.label === 'Total Usuarios' ? 'users' : stat.label === 'Archivos en el Sistema' ? 'documents' : stat.label === 'Almacenamiento Usado' ? 'storage' : 'pulse';
  const trendClass = stat.trend.startsWith('-') ? 'text-danger' : 'text-success';
  const trendIconColor = stat.trend.startsWith('-') ? '#dc3545' : '#198754';

  return (
    <StatCard
      icon={<AdminIcon name={iconName} size={26} />}
      trend={(
        <span className={`fw-bold small d-inline-flex align-items-center gap-1 ${trendClass}`} style={{ whiteSpace: 'nowrap' }}>
          <TrendIcon isDown={stat.trend.startsWith('-')} color={trendIconColor} />
          <span>{stat.trend}</span>
        </span>
      )}
      value={stat.value}
      label={stat.label}
      footer={stat.label === 'Almacenamiento Usado' ? (
        <div className="progress" role="progressbar" aria-label="Uso de almacenamiento" aria-valuenow={46} aria-valuemin={0} aria-valuemax={100} style={{ height: 8, background: '#eef2ff' }}>
          <div className="progress-bar" style={{ width: '46%', background: 'linear-gradient(90deg, #3c57f1 0%, #3828c4 50%, #6016b6 100%)' }} />
        </div>
      ) : null}
    />
  );
}

function TrendIcon({ isDown, color }: { isDown: boolean; color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={isDown ? 'M4 7l6 6 4-4 6 6' : 'M4 17l6-6 4 4 6-6'} />
      <path d={isDown ? 'M20 13v4h-4' : 'M20 11V7h-4'} />
    </svg>
  );
}