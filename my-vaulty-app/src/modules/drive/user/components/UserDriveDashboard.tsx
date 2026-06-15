const summary = [
  { label: 'Mis archivos', value: '124' },
  { label: 'Compartidos', value: '38' },
  { label: 'Favoritos', value: '16' },
  { label: 'Tamaño usado', value: '2.8 GB' },
];

const folders = [
  { name: 'Proyecto Figma', files: '24 archivos', usage: 82, color: '#5f48f0' },
  { name: 'Ventas 2024', files: '18 archivos', usage: 67, color: '#27c8df' },
  { name: 'Documentos legales', files: '11 archivos', usage: 49, color: '#4ad5aa' },
];

const recentFiles = [
  { name: 'Presentación producto.pptx', date: 'Hoy · 10:24', size: '48 MB', tag: 'Editable' },
  { name: 'Contrato proveedor.docx', date: 'Ayer · 18:11', size: '2 MB', tag: 'Compartido' },
  { name: 'Presupuesto Q2.xlsx', date: 'Ayer · 16:02', size: '1.4 MB', tag: 'Importante' },
  { name: 'Manual marca.pdf', date: '11 jun · 09:40', size: '12 MB', tag: 'PDF' },
];

export const UserDriveDashboard = () => {
  return (
    <div className="user-dashboard">
      <section className="user-dashboard__card">
        <header className="user-dashboard__header">
          <div>
            <h1>Mi espacio de trabajo</h1>
            <p>Vista de usuario con diseño simulado para el drive</p>
          </div>
          <div className="hero-chip">Usuario · Diseño hardcoded</div>
        </header>

        <div className="user-dashboard__grid">
          {summary.map((item) => (
            <article className="stat-card" key={item.label}>
              <div className="stat-card__head">
                <div className="stat-card__icon">
                  <span>{item.label.charAt(0)}</span>
                </div>
              </div>
              <div>
                <p className="stat-card__value">{item.value}</p>
                <p className="stat-card__label">{item.label}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="user-dashboard__panel">
          <div className="panel-card__head">
            <div>
              <h2 className="panel-card__title">Carpetas recientes</h2>
              <p className="panel-card__subtitle">Organización visual del drive personal</p>
            </div>
          </div>

          <div className="folder-grid">
            {folders.map((folder) => (
              <article className="folder-card" key={folder.name}>
                <div className="folder-card__top">
                  <div>
                    <h3>{folder.name}</h3>
                    <p>{folder.files}</p>
                  </div>
                  <div className="mini-icon" style={{ color: folder.color }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="folder-meter" aria-hidden="true">
                  <span style={{ width: `${folder.usage}%`, background: folder.color }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="user-dashboard__panel">
          <div className="panel-card__head">
            <div>
              <h2 className="panel-card__title">Archivos recientes</h2>
              <p className="panel-card__subtitle">Listado visual de documentos del usuario</p>
            </div>
          </div>

          <div className="recent-files">
            {recentFiles.map((file) => (
              <article className="file-card" key={file.name}>
                <div className="file-card__left">
                  <div className="file-icon">□</div>
                  <div className="file-card__meta">
                    <h4>{file.name}</h4>
                    <p>{file.date}</p>
                  </div>
                </div>
                <div className="file-card__right">
                  <span className="file-card__status">{file.tag}</span>
                  <span>{file.size}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};