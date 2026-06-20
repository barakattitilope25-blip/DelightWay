import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

// Hero
import heroBg from '../assets/img/S1.jpeg';

// Service cards (top grid)
import s1 from '../assets/img/S1.jpeg';
import s2 from '../assets/img/S2.jpeg';
import s3 from '../assets/img/S3.jpeg';
import s4 from '../assets/img/S4.jpeg';
import s5 from '../assets/img/S5.jpeg';
import s6 from '../assets/img/S6.jpeg';

// Detail section images
import d1 from '../assets/img/S7.jpeg'; // Residential detail
import d2 from '../assets/img/S8.jpeg'; // Commercial detail
import d3 from '../assets/img/S3.jpeg'; // Solar detail
import d4 from '../assets/img/S4.jpeg'; // Smart Home detail

// Why choose us
import whyImg from '../assets/img/S9.jpeg';

const serviceCards = [
  { img: s1, icon: '🏠', title: 'Residential Electrical',     desc: 'Safe, reliable and modern electrical installations for homes and apartments.' },
  { img: s2, icon: '🏢', title: 'Commercial Installations',   desc: 'Powering offices, retail spaces, and commercial buildings with efficiency.' },
  { img: s3, icon: '☀️', title: 'Solar Power Systems',        desc: 'Sustainable solar energy solutions for homes, businesses and industries.' },
  { img: s4, icon: '📱', title: 'Smart Home & Automation',    desc: 'Intelligent systems that bring convenience, safety and control to your space.' },
  { img: s5, icon: '🔧', title: 'Maintenance & Support',      desc: 'Routine maintenance and 24/7 support to keep your systems running smoothly.' },
  { img: s6, icon: '📷', title: 'Security & CCTV Systems',    desc: 'Advanced security solutions to protect what matters most.' },
];

const processSteps = [
  { icon: '📋', title: 'Consultation', desc: 'We assess your needs and provide expert recommendations.' },
  { icon: '📐', title: 'Planning',     desc: 'We design the best solution plan tailored to your space.' },
  { icon: '⚙️', title: 'Installation', desc: 'Our team installs with precision, safety and quality.' },
  { icon: '🛠️', title: 'Support',      desc: 'We provide ongoing support and maintenance.' },
];

export default function ServicesPage() {
  return (
    <div className="sp">

      {/* ═══ 1. HERO ═══ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <span className="sp-eyebrow">OUR SERVICES</span>
          <h1>Smart Solutions.<br />Powerful Results.</h1>
          <p>We provide end-to-end electrical and lighting solutions designed to power homes, businesses, and industries with safety, efficiency, and innovation.</p>
          <Link to="/book-consultation" className="sp-hero-btn">Request a Quote →</Link>
        </div>
      </section>

      {/* ═══ 2. SERVICE CARDS GRID ═══ */}
      <section className="sp-section sp-cards-section">
        <div className="sp-container">
          <span className="sp-eyebrow center">WHAT WE OFFER</span>
          <h2 className="sp-center-heading">Our Electrical Services</h2>
          <div className="sp-underline" />
          <div className="sp-cards-grid">
            {serviceCards.map((s, i) => (
              <div key={i} className="sp-card">
                <div className="sp-card-img">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="sp-card-body">
                  <span className="sp-card-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. SERVICES IN DETAIL ═══ */}
      <section className="sp-section sp-detail-section">
        <div className="sp-container">
          <span className="sp-eyebrow center">OUR SERVICES IN DETAIL</span>
          <h2 className="sp-center-heading">High Quality Solutions for Every Need</h2>

          {/* Row 1 — image left, text right */}
          <div className="sp-detail-row">
            <div className="sp-detail-img">
              <img src={d1} alt="Residential Electrical" />
            </div>
            <div className="sp-detail-text">
              <div className="sp-detail-icon">🏠</div>
              <h3>Residential Electrical</h3>
              <p>From new installations to upgrades and repairs, we provide safe and efficient electrical solutions tailored to your home.</p>
              <ul>
                <li><span className="sp-check">✔</span> Wiring & Rewiring</li>
                <li><span className="sp-check">✔</span> Lighting Design & Installation</li>
                <li><span className="sp-check">✔</span> Switches & Outlets</li>
                <li><span className="sp-check">✔</span> Circuit Breaker Upgrades</li>
              </ul>
            </div>
          </div>

          {/* Row 2 — text left, image right */}
          <div className="sp-detail-row reverse">
            <div className="sp-detail-img">
              <img src={d2} alt="Commercial Installations" />
            </div>
            <div className="sp-detail-text">
              <div className="sp-detail-icon">🏢</div>
              <h3>Commercial Installations</h3>
              <p>We deliver robust electrical systems that support your business operations and enhance productivity.</p>
              <ul>
                <li><span className="sp-check">✔</span> Office & Building Wiring</li>
                <li><span className="sp-check">✔</span> Power Distribution</li>
                <li><span className="sp-check">✔</span> Energy Efficient Lighting</li>
                <li><span className="sp-check">✔</span> Backup Power Solutions</li>
              </ul>
            </div>
          </div>

          {/* Row 3 — image left, text right */}
          <div className="sp-detail-row">
            <div className="sp-detail-img">
              <img src={d3} alt="Solar Power Systems" />
            </div>
            <div className="sp-detail-text">
              <div className="sp-detail-icon">☀️</div>
              <h3>Solar Power Systems</h3>
              <p>Harness the power of the sun with reliable and affordable solar energy solutions.</p>
              <ul>
                <li><span className="sp-check">✔</span> Solar Installation</li>
                <li><span className="sp-check">✔</span> Inverter & Battery Systems</li>
                <li><span className="sp-check">✔</span> Hybrid Systems</li>
                <li><span className="sp-check">✔</span> System Maintenance</li>
              </ul>
            </div>
          </div>

          {/* Row 4 — text left, image right */}
          <div className="sp-detail-row reverse">
            <div className="sp-detail-img">
              <img src={d4} alt="Smart Home & Automation" />
            </div>
            <div className="sp-detail-text">
              <div className="sp-detail-icon">📱</div>
              <h3>Smart Home & Automation</h3>
              <p>Control your lights, appliances, and security from anywhere. We make your home intelligent and future-ready.</p>
              <ul>
                <li><span className="sp-check">✔</span> Smart Lighting</li>
                <li><span className="sp-check">✔</span> Home Automation</li>
                <li><span className="sp-check">✔</span> Remote Access</li>
                <li><span className="sp-check">✔</span> Energy Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. WHY CHOOSE US + WORK PROCESS ═══ */}
      <section className="sp-section sp-bottom-section">
        <div className="sp-container sp-bottom-grid">

          {/* Why choose us */}
          <div className="sp-why-card">
            <div className="sp-why-img">
              <img src={whyImg} alt="Why choose us" />
            </div>
            <div className="sp-why-text">
              <span className="sp-eyebrow">WHY CHOOSE US?</span>
              <ul className="sp-why-list">
                <li><span className="sp-check">✔</span> Licensed & Certified Professionals</li>
                <li><span className="sp-check">✔</span> Quality Materials & Workmanship</li>
                <li><span className="sp-check">✔</span> On-Time Delivery</li>
                <li><span className="sp-check">✔</span> 24/7 Customer Support</li>
                <li><span className="sp-check">✔</span> Affordable & Transparent Pricing</li>
              </ul>
            </div>
          </div>

          {/* Work process */}
          <div className="sp-process-card">
            <span className="sp-eyebrow">OUR WORK PROCESS</span>
            <div className="sp-process-steps">
              {processSteps.map((step, i) => (
                <div key={i} className="sp-process-step">
                  <div className="sp-process-icon">{step.icon}</div>
                  {i < processSteps.length - 1 && <div className="sp-process-arrow">→</div>}
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 5. CTA BANNER ═══ */}
      <section className="sp-cta-banner">
        <div className="sp-container sp-cta-inner">
          <div className="sp-cta-left">
            <span className="sp-cta-logo-icon">⚡</span>
            <div>
              <h3>Let's Power Your Next Project</h3>
              <p>Get in touch with us today and experience the De-lightway difference.</p>
            </div>
          </div>
          <Link to="/book-consultation" className="sp-cta-btn">Book Consultation →</Link>
        </div>
      </section>

    </div>
  );
}
