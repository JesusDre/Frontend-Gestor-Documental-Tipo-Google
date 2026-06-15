import { stats } from '../data';
import { ActivityCard } from './ActivityCard';
import { AdminDashboardShell } from './AdminDashboardShell';
import { AdminMetricCard } from './AdminMetricCard';
import { AlertsCard } from './AlertsCard';
import { StorageRankingCard } from './StorageRankingCard';
import { UsersCard } from './UsersCard';

export const AdminDashboard = () => {
  return (
    <AdminDashboardShell>
      <section className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3">
        <div>
          <h1 className="display-6 fw-bold text-primary-emphasis mb-1" style={{ letterSpacing: '-0.04em' }}>Panel de Administración</h1>
          <p className="text-secondary mb-0">Visión general del sistema VAULT</p>
        </div>
      </section>

      <section className="row g-3 g-lg-4">
        {stats.map((stat) => (
          <div key={stat.label} className="col-12 col-md-6 col-xl-3">
            <AdminMetricCard stat={stat} />
          </div>
        ))}
      </section>


         <section className="row g-3 g-lg-4 align-items-stretch">
        <div className="col-12 col-xl-7">
          <StorageRankingCard />
        </div>
        <div className="col-12 col-xl-5">
          <AlertsCard />
        </div>
      </section>

      <section className="row g-3 g-lg-4 align-items-stretch">
        <div className="col-12 col-xl-7">
          <ActivityCard />
        </div>
        <div className="col-12 col-xl-5">
          <UsersCard />
        </div>
      </section>

     
    </AdminDashboardShell>
  );
};