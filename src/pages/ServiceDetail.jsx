import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useServiceStore from '../store/useServiceStore';

export default function ServiceDetail() {
  const { id } = useParams();

  const services = useServiceStore((state) => state.services); //ambil data services, loading, error
  const isLoading = useServiceStore((state) => state.isLoading);
  const error = useServiceStore((state) => state.error);

  const item = services.find(s => s.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // tiap id berubah dia scroll keatas

  // 1. Cek apakah masih loading (sedang fetch)
  if (isLoading && services.length === 0) {
    return (
      <div style={{ padding: '50px', minHeight: '100vh', color: 'white' }}>
        <div className="skeleton" style={{ width: '200px', height: '40px', marginBottom: '20px' }}></div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton" style={{ height: '300px', width: '100%' }}></div>
          ))}
          </div>
      </div>
    );
  }
  // 2. Cek apakah ada error pas fetch
  if (error) {
    return <div style={{padding:'50px',minHeight:'100vh',justifyContent:'center',textAlign:'center'}}>{error}</div>;
  }
  // 3. JAGA-JAGA KALAU DATA TIDAK KETEMU
  if (!item) {
    return <div style={{padding:'50px',minHeight:'100vh',justifyContent:'center',textAlign:'center'}}>Data not found!</div>;
  }

  return (
    <div className="service-detail-page">
      <div className="detail-container">
        {/* Tombol Back Singkat & Clean */}
        <Link to="/" className="back-link">← BACK</Link>

        <header className="header-detail" style={{ marginTop: '20px' }}>
          <i className={item.iconClass}></i>
          <h1>{item.nama}</h1>
          <p className="long-desc">{item.longDesc}</p>
        </header>

        <div className="detail-grid">
          <section className="detail-section">
            <h3>Features</h3>
            <ul className="feature-list">
              {item.features.map((f, i) => <li key={i}>• {f}</li>)} {/*f= parameter, i= index yg dijadiin key*/}
            </ul>
          </section>

          <section className="detail-section">
            <h3>Tools</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {item.tools.map((t, i) => <span key={i} className="tool-badge">{t}</span>)}
            </div>
          </section>
        </div>

        <div className="workflow-container">
          <h3>Workflow</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
            {item.workflow.map((w, i) => (
              <div key={i} style={{ textAlign: 'center', flex: '1' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>0{i+1}</span>
                <p style={{ fontSize: '0.9rem' }}>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}