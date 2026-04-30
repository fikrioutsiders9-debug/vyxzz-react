import { useState, useEffect } from 'react';

export default function Steps() {
    // 1. MEMORI (useState): Siapin wadah kosong (array)
    const [steps, setSteps] = useState([]);

    // 2. DRIVER (useEffect): Ambil data otomatis pas web dibuka
    useEffect(() => {
        const fetchSteps = async () => {
            try {
                // Kurir berangkat ke folder public buat ambil file JSON
                const response = await fetch('/data/steps.json');
                const data = await response.json();
                
                // Simpan hasil setoran kurir ke memori
                setSteps(data);
            } catch (error) {
                console.error("Gagal ambil data:", error);
            }
        };

        fetchSteps();
    }, []); // Kosong artinya cuma jalan 1x di awal

    return (
        <section id="process" className="process-section">
  <div className="easySteps">
    <h1>Easy Steps <span>to Create a Website</span></h1>
    <div className="containerSteps" id="easy-steps">
      {steps.map((item, index) => (
        <div key={item.id} className="cardStepsCompact">
          <div className="step-header">
            <div className="icon-steps">
              <i className={item.iconClass}></i>
            </div>
            <span className="step-count">0{(index + 1)}</span>
          </div>
          
          <div className="step-body">
            <h3>{item.nama}</h3>
            <p>{item.deskripsi}</p>
          </div>
          
          {/* Garis aksen tipis di bawah */}
          <div className="bottom-accent"></div>
        </div>
      ))}
    </div>
  </div>
</section>
    );
}