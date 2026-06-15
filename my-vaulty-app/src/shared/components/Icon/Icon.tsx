export type IconName =
  | 'search'
  | 'bell'
  | 'logout'
  | 'users'
  | 'documents'
  | 'storage'
  | 'pulse'
  | 'upload'
  | 'download'
  | 'share'
  | 'delete'
  | 'login'
  | 'permission'
  | 'warning';

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function Icon({ name, className = '', size = 18 }: IconProps) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    width: size,
    height: size,
    'aria-hidden': true,
  };

  switch (name) {
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      );
    case 'bell':
      return (
        <svg {...common}>
          <path d="M15 17H9a3 3 0 0 1-3-3v-2a6 6 0 0 1 12 0v2a3 3 0 0 1-3 3Z" />
          <path d="M10 17a2 2 0 0 0 4 0" />
        </svg>
      );
    case 'logout':
      return (
        <svg {...common}>
          <path d="M10 16l-4-4 4-4" />
          <path d="M6 12h10" />
          <path d="M14 4h4v16h-4" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 18v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="3" />
          <path d="M20 18v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
          <path d="M15 4.5a3 3 0 0 1 0 5.9" />
        </svg>
      );
    case 'documents':
      return (
        <svg {...common}>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      );
    case 'storage':
      return (
        <svg {...common}>
          <path d="M4 7h16v4H4z" />
          <path d="M4 13h16v4H4z" />
          <circle cx="7" cy="9" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="7" cy="15" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'pulse':
      return (
        <svg {...common}>
          <path d="M3 12h4l2-5 4 10 2-5h6" />
        </svg>
      );
    case 'upload':
      return (
        <svg {...common}>
          <path d="M12 16V5" />
          <path d="M8 9l4-4 4 4" />
          <path d="M5 18h14" />
        </svg>
      );
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 5v11" />
          <path d="M8 12l4 4 4-4" />
          <path d="M5 19h14" />
        </svg>
      );
    case 'share':
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="19" r="2.5" />
          <path d="M8.2 11l7.1-4" />
          <path d="M8.2 13l7.1 4" />
        </svg>
      );
    case 'delete':
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M9 7V5h6v2" />
          <path d="M7 7l1 12h8l1-12" />
        </svg>
      );
    case 'login':
      return (
        <svg {...common}>
          <path d="M12 5v8" />
          <path d="M9 10l3 3 3-3" />
          <path d="M6 19h12" />
        </svg>
      );
    case 'permission':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8.2-7 10-3.5-1.8-7-5-7-10V6z" />
        </svg>
      );
    case 'warning':
      return (
        <svg {...common}>
          <path d="M12 4.5 21 20H3L12 4.5Z" />
          <path d="M12 9v4.5" />
          <path d="M12 16.8h.01" strokeWidth="2.8" />
        </svg>
      );
    default:
      return null;
  }
}