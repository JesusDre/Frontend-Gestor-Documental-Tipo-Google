import type { ReactNode } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminTopbar } from './AdminTopbar';

type ShellProps = {
  children: ReactNode;
};

export function AdminDashboardShell({ children }: ShellProps) {
  return (
    <div className="min-vh-100 d-flex flex-column flex-xl-row align-items-xl-start" style={{ background: 'radial-gradient(circle at top left, rgba(97,78,243,.08), transparent 30%), linear-gradient(180deg, #f8fbff 0%, #f1f5fd 100%)' }}>
      <AdminSidebar />

      <div className="flex-grow-1 d-flex flex-column min-w-0">
        <AdminTopbar />
        <div className="p-3 p-lg-4 d-grid gap-4">{children}</div>
      </div>
    </div>
  );
}