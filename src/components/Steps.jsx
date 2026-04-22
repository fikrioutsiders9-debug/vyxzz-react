import { STEPS_DATA } from '../constants/index';

export default function Steps() {
    return (
        <section id="process">
            <div className="easySteps">
                <h1>Easy Steps <span>to Create a Website</span></h1>
                <div className="containerSteps" id="easy-steps">
                {STEPS_DATA.map((item, index) => (
                    <div key={item.id} className="cardSteps card-reveal">
                        <div className="icon-steps">{item.icon}</div>
                        {/* Pakai String PadStart biar angka tetep 01, 02 */}
                        <div className="step-number">
                            {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <h3>{item.nama}</h3>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}