import type { CSSProperties, ReactNode } from 'react';

export type StatCardProps = {
  icon: ReactNode;
  trend?: ReactNode;
  value: ReactNode;
  label: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
  iconSizeClassName?: string;
};

export function StatCard({ icon, trend, value, label, footer, className = '', style, iconSizeClassName = '' }: StatCardProps) {
  return (
    <article className={`card border rounded-4 shadow-sm h-100 ${className}`} style={style}>
      <div className="card-body d-flex flex-column p-3 p-lg-4" style={{ minHeight: 176 }}>
        <div className="d-flex align-items-start justify-content-between gap-3">
          <div className={`rounded-4 d-inline-flex align-items-center justify-content-center flex-shrink-0 ${iconSizeClassName}`} style={{ width: 56, height: 56, background: '#edf0ff', color: '#5f48f0' }}>
            {icon}
          </div>
          {trend ? <div className="align-self-start pt-1">{trend}</div> : null}
        </div>

        <div className="mt-3" style={{ minHeight: 92 }}>
          <div className="d-flex flex-column justify-content-end h-100 gap-2">
            <div className="display-6 fw-bold text-primary-emphasis mb-0" style={{ letterSpacing: '-0.05em', lineHeight: 1, marginTop: 'auto' }}>{value}</div>
            <div className="text-secondary small" style={{ lineHeight: 2, marginBottom: '0.25rem' }}>{label}</div>
          </div>
        </div>

        {footer ? <div className="mt-4">{footer}</div> : null}
      </div>
    </article>
  );
}