import { useState, useEffect } from 'react';
import useServiceStore from '../store/useServiceStore';

export default function Steps() {
  const steps = useServiceStore((state) => state.steps);

  return (
    <section id="process" className="process-section">
      <div className="easySteps">
        <h1>Easy Steps <span>to Create a Website</span></h1>
        <div className="containerSteps" id="easy-steps">
          {steps.map((item, index) => (
            <div key={item.id} className="cardStepsCompact">
              <div className="step-header">
                <div className="icon-steps">
                  <i className={item.iconClass}></i></div>
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
    )
}