import { useState, useEffect } from 'react';
import useServiceStore from '../store/useServiceStore';

export default function Why() {
  const why = useServiceStore((state) => state.why);

  return (
    <section id="why-us" className="why-us-section">
      <div className="split-layout">
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