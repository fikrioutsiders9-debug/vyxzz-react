import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function ServiceDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/services.json');
        const data = await res.json();
        const found = data.find(s => s.id === parseInt(id));
        setItem(found);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) return <div className="loading">Loading...</div>;

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
              {item.features.map((f, i) => <li key={i}>• {f}</li>)}
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