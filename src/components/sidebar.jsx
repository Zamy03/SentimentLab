import React from 'react';
import './Sidebar.scss';

// Icon SVG untuk Sidebar
const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="url(#paint0_linear)"/>
    <path d="M12.5 10H19.5C21.433 10 23 11.567 23 13.5V18.5C23 20.433 21.433 22 19.5 22H12.5C10.567 22 9 20.433 9 18.5V13.5C9 11.567 10.567 10 12.5 10ZM12 13.5V18.5H20V13.5H12Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6C5FF7"/><stop offset="1" stopColor="#C362F6"/>
      </linearGradient>
    </defs>
  </svg>
);
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M7 1v12M1 7h12"/>
  </svg>
);
const DocIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);
const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const Sidebar = ({ projects = [] }) => {
  const hasProjects = projects.length > 0;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <span className="brand-name">SentimenLab</span>
      </div>

      <button className="btn-new-project">
        <PlusIcon /> Project Baru
      </button>

      <div className="sidebar-menu">
        <p className="menu-label">RECENT PROJECTS</p>
        <div className="project-list">
          {hasProjects ? (
            projects.map(p => (
              <div key={p.id} className="project-item">
                <span className="item-name"><DocIcon /> {p.name}</span>
                <span className={`badge badge-${p.badge}`}>{p.badge}</span>
              </div>
            ))
          ) : (
            <p className="empty-sidebar-text">Belum ada histori project.</p>
          )}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">A</div>
          <div className="user-info">
            <span className="user-name">Administrator</span>
            <span className="user-email">sentimenlab.id</span>
          </div>
        </div>
        <button className="btn-logout"><LogoutIcon /></button>
      </div>
    </aside>
  );
};

export default Sidebar;