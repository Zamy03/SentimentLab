import React, { useState } from 'react';
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import './Dashboard.scss';

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M7 1v12M1 7h12"/>
  </svg>
);

const mockProjects = [
  { id: 1, name: "Kurir JNT — Mei 2025", status: "Selesai", respondents: 320, aspects: 7, date: "12 Mei 2025", badge: "done" },
  { id: 2, name: "Kurir JNE — Apr 2025", status: "Selesai", respondents: 411, aspects: 7, date: "3 Apr 2025", badge: "done" },
  { id: 3, name: "SiCepat Draft", status: "Upload", respondents: 0, aspects: 0, date: "20 Mei 2025", badge: "draft" },
  { id: 4, name: "Shopee Express Q1", status: "Selesai", respondents: 517, aspects: 7, date: "28 Mar 2025", badge: "done" },
];

const Dashboard = () => {
  // Ubah ke useState(mockProjects) untuk melihat data
  const [projects, setProjects] = useState([]); 
  const hasProjects = projects.length > 0;

  return (
    <div className="layout-container">
      {/* Memanggil Sidebar dan melempar data project */}
      <Sidebar projects={projects} />

      <main className="main-content">
        {/* Memanggil Navbar dan menentukan judul halamannya */}
        <Navbar 
          title="Dashboard" 
          subtitle="Ringkasan semua project analisis sentimen" 
        />

        {/* Konten spesifik Dashboard dimulai dari sini */}
        <div className="welcome-banner">
          <h2>Halo, Admin 👋</h2>
          <p>
            {hasProjects 
              ? `Kamu memiliki ${projects.length} project · ${projects.filter(p => p.status === 'Selesai').length} selesai dianalisis · ${projects.filter(p => p.badge === 'draft').length} masih draft`
              : "Selamat datang di SentimenLab! Kamu belum memiliki project apapun saat ini."}
          </p>
        </div>

        {hasProjects ? (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-label">TOTAL RESPONDEN</span>
                <span className="stat-value">1.248</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">SENTIMEN POSITIF</span>
                <span className="stat-value text-green">54%</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">SENTIMEN NEGATIF</span>
                <span className="stat-value text-red">29%</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">NETRAL</span>
                <span className="stat-value text-yellow">17%</span>
              </div>
            </div>

            <div className="section-header"><h3>PROJECT TERBARU</h3></div>
            <div className="project-grid">
              {projects.map(p => (
                <div key={p.id} className="project-card">
                  <div className="card-top">
                    <h4>{p.name}</h4>
                    <span className={`status-pill status-${p.status.toLowerCase()}`}>{p.status}</span>
                  </div>
                  <div className="card-meta">
                    <span>📊 {p.respondents} data</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📂</div>
            <h3>Area Kerjamu Masih Kosong</h3>
            <p>Buat project baru untuk mulai melakukan preprocessing teks, ekstraksi fitur, dan analisis sentimen berbasis aspek.</p>
            <button className="btn-new-project-large">
              <PlusIcon /> Buat Project Pertamamu
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;