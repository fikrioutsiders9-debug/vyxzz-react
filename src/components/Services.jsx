import { useState, useEffect } from 'react';
// import { SERVICES_DATA } from '../constants/index'; // <-- Ini kita pensiunkan dulu

export default function Services() {
    // 1. MEMORI (useState): Siapin wadah kosong (array)
    const [services, setServices] = useState([]);

    // 2. DRIVER (useEffect): Ambil data otomatis pas web dibuka
    useEffect(() => {
        const fetchServices = async () => {
            try {
                // Kurir berangkat ke folder public buat ambil file JSON
                const response = await fetch('/data/services.json');
                const data = await response.json();
                
                // Simpan hasil setoran kurir ke memori
                setServices(data);
            } catch (error) {
                console.error("Gagal ambil data:", error);
            }
        };

        fetchServices();
    }, []); // Kosong artinya cuma jalan 1x di awal

    return (
        <section className="services" id="services">  
            <h1>Service <span>Offerings</span></h1>
            <div id="card-services">
                {/* 3. RENDER: Looping data dari state 'services' */}
                {services.map((item) => (
                    <div key={item.id} className="card card-reveal">
                        <div className="icon-steps" style={{ marginBottom: '20px' }}>
                            {/* Catatan: Icon nanti kita bahas, sementara pake placeholder */}
                            <i className={item.iconClass}></i> 
                        </div>
                        <h3>{item.nama}</h3>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}