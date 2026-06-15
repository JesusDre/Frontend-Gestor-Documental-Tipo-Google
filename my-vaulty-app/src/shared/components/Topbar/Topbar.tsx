import type { CSSProperties, ReactNode } from 'react';

export type TopbarProps = {
  searchPlaceholder: string;
  searchIcon?: ReactNode;
  actions?: ReactNode;
  className?: string;
  style?: CSSProperties;
  searchMaxWidth?: number;
};

export function Topbar({ searchPlaceholder, searchIcon, actions, className = '', style, searchMaxWidth = 460 }: TopbarProps) {
  return (
    <header className={`sticky-top bg-white border-bottom border-1 px-3 px-lg-4 py-3 shadow-sm ${className}`} style={{ backdropFilter: 'blur(12px)', zIndex: 5, borderColor: '#edf1fb', ...style }}>
      <div className="d-flex flex-column flex-xl-row align-items-xl-center gap-3 gap-xl-4">
        <label className="position-relative flex-grow-1 rounded-5" style={{ maxWidth: searchMaxWidth }}>
          <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary">{searchIcon}</span>
          <input
            type="search"
            className="form-control rounded-4 ps-5 py-2 border-0 shadow-none"
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            style={{ backgroundColor: '#fbfcff', outline: 'none', borderColor: 'black' }}
          />
        </label>

        {actions ? <div className="ms-xl-auto d-flex align-items-center gap-3">{actions}</div> : null}
      </div>
    </header>
  );
}