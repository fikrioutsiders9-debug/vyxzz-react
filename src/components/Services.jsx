import { SERVICES_DATA } from '../constants/index';

export default function Services() {
    return (
        <section className="services" id="services">  
            <h1>Service <span>Offerings</span></h1>
            <div id="card-services">
                {SERVICES_DATA.map((item) => (
                    <div key={item.id} className="card card-reveal">
                        <div className="icon-steps" style={{ marginBottom: '20px' }}>
                            {item.icon}
                        </div>
                        <h3>{item.nama}</h3>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}