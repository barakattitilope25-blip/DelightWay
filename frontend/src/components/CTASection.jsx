import React from 'react';
import './CTASection.css';
import ctaBg from '../assets/img/Group 1.png';

const CTASection = () => {
  return (
    <section className="cta-section" style={{ backgroundImage: `url("${ctaBg}")` }}>
      <div className="cta-overlay">
        <div className="page-container">
          <div className="cta-content">
            <h2>Ready to brighten your space with De-lightway Electrical?</h2>
            <div className="cta-btns">
              <button className="cta-btn primary">Request a Quote</button>
              <button className="cta-btn primary">Book Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
