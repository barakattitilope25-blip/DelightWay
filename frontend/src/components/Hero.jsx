import React from 'react';
import './Hero.css';
import heroBg from '../assets/img/Rectangle 2.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url("${heroBg}")` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Powering Innovation.<br />Brightening Spaces.</h1>
          <p>Modern lighting & power solutions for homes,<br />offices, and industry.</p>
          <div className="hero-btns">
            <button className="hero-btn">Request a Quote</button>
            <button className="hero-btn secondary">Book Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
