import type { CSSProperties, ReactNode } from 'react';

export type SidebarItem = {
  label: string;
  active?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

export type SidebarProps = {
  brandInitials: ReactNode;
  brandTitle: ReactNode;
  badgeLabel: ReactNode;
  items: SidebarItem[];
  footerAction: {
    label: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
  };
  className?: string;
  style?: CSSProperties;
};

export function Sidebar({
  brandInitials,
  brandTitle,
  badgeLabel,
  items,
  footerAction,
  className = '',
  style,
}: SidebarProps) {
  return (
    <aside
      className={`bg-white border-end border-1 d-flex flex-column gap-3 p-2 p-lg-3 shadow-sm flex-shrink-0 ${className}`}
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        maxWidth: 228,
        background: 'linear-gradient(180deg, rgba(255,255,255,.98), rgba(248,250,255,.95))',
        borderColor: '#edf1fb',
        overflowY: 'auto',
        ...style,
      }}
    >
      <div className="border-bottom pb-2" style={{ borderColor: '#edf1fb' }}>
        <div className="d-flex align-items-center gap-2 mb-1">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-3 text-white fw-bold flex-shrink-0"
            style={{ width: 32, height: 32, fontSize: 14, background: 'linear-gradient(90deg, #3c57f1 0%, #3828c4 50%, #6016b6 100%)' }}
          >
            {brandInitials}
          </div>
          <span
            className="fw-bold"
            style={{
              fontSize: 25,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #3c57f1 0%, #3828c4 50%, #6016b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {brandTitle}
          </span>
        </div>
        <span
          className="badge rounded-pill align-self-start align-self-lg-auto"
          style={{
            backgroundColor: '#ede5ff',
            color: '#6d4ef4',
            border: '1px solid transparent',
          }}
        >
          {badgeLabel}
        </span>
      </div>

      <nav className="d-grid gap-1">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`btn d-flex align-items-center gap-2 rounded-4 px-2 py-2 text-start fw-semibold border-0 small shadow-none ${item.active ? 'text-white' : 'text-body-secondary'}`}
            style={item.active ? { background: 'linear-gradient(90deg, #3c57f1 0%, #3828c4 50%, #6016b6 100%)', boxShadow: 'none' } : { background: 'transparent', boxShadow: 'none' }}
            onClick={item.onClick}
            aria-current={item.active ? 'page' : undefined}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <button
          type="button"
          className="btn w-100 d-flex align-items-center gap-2 rounded-4 px-2 py-2 border-0 fw-bold text-danger text-start bg-transparent small shadow-none"
          style={{ boxShadow: 'none' }}
          onClick={footerAction.onClick}
        >
          <span className="flex-shrink-0">{footerAction.icon}</span>
          <span>{footerAction.label}</span>
        </button>
      </div>
    </aside>
  );
}