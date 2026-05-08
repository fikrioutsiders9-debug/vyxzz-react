import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useServiceStore from '../store/useServiceStore';

export default function Services() {
    const services = useServiceStore((state) => state.services);
    const isLoading = useServiceStore((state) => state.isLoading);
    const error = useServiceStore((state) => state.error);
    
    return (
        <section className="services" id="services">  
            <h1>Service <span>Offerings</span></h1>
            <div className="card-services">
                {/* 3. RENDER: Looping data dari state 'services' */}
                {services.map((item) => (
                    <Link to={`/service/${item.id}`} key={item.id} className="card-link">
                        <div className="card">
                            <div className="icon-steps" style={{ marginBottom: '20px' }}>
                                {/* Catatan: Icon nanti kita bahas, sementara pake placeholder */}
                                <i className={item.iconClass}></i> 
                            </div>
                            <h3>{item.nama}</h3>
                            <p>{item.deskripsi}</p>
                        </div>
                    </Link>
                    ))}
            </div>
        </section>
    );
}