import { useState, useEffect } from 'react';

export default function Why() {
  const [why, setWhy] = useState([]);

  useEffect(() => {
        const fetchWhy = async () => {
            try {
                // Kurir berangkat ke folder public buat ambil file JSON
                const response = await fetch('/data/why.json');
                const data = await response.json();
                
                // Simpan hasil setoran kurir ke memori
                setWhy(data);
            } catch (error) {
                console.error("Gagal ambil data:", error);
            }
        };
        fetchWhy();
    }, []); // Kosong artinya cuma jalan 1x di awal

  return (
    <section id="why-us" className="why-us-section">
      <div className="container split-layout">
        <div className="left-content">
          <h2 className="section-title">Why do you really <br></br><span>need a website?</span></h2>
          <p className="section-subtitle">In a digital-first world, your website is your strongest asset to tell your story and reach the right people.</p>
        </div>

      
        <div className="right-content">
          {why.map((reason) => (
          <div className="reason-item" key={reason.id}>
            <div className="reason-icon"></div>
            <div className="reason-text">
              <h4>{reason.title}</h4>
              <p>{reason.subtitle}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
  </section>
  )
}