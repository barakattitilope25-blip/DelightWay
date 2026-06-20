import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

import heroBg  from '../assets/img/1.jpeg';
import whoImg  from '../assets/img/2.jpeg';
import team1   from '../assets/img/3.jpeg';
import team2   from '../assets/img/4.jpeg';
import team3   from '../assets/img/5.jpeg';
import team4   from '../assets/img/6.jpeg';
import team5   from '../assets/img/7.jpeg';
import ctaLogo from '../assets/img/fulllogo 1.png';

import p1 from '../assets/img/Airline.png';
import p2 from '../assets/img/Ariel.png';
import p3 from '../assets/img/CARVIX.png';
import p4 from '../assets/img/Super system.png';

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Animated counter ── */
function Counter({ target }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  const num = parseInt(target);
  const suffix = target.replace(/[0-9]/g, '');
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 35);
    return () => clearInterval(timer);
  }, [visible, num]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const team = [
  { img: team1, name: 'John Adeyemi',  role: 'Founder & CEO'           },
  { img: team2, name: 'Grace Ndlovu',  role: 'Operations Manager'       },
  { img: team3, name: 'Tunde Okafor',  role: 'Lead Electrical Engineer' },
  { img: team4, name: 'Amara Diallo',  role: 'Project Manager'          },
  { img: team5, name: 'Kwame Mensah',  role: 'Technical Supervisor'     },
];

const stats = [
  { icon: '👥', value: '150+', label: 'Projects Completed'  },
  { icon: '😊', value: '120+', label: 'Satisfied Clients'   },
  { icon: '🏆', value: '10+',  label: 'Years of Experience' },
  { icon: '📍', value: '5+',   label: 'Cities Served'       },
];

const partners = [
  { img: p1, name: 'NIS'       },
  { img: p2, name: 'SON'       },
  { img: p3, name: 'ISO'       },
  { img: p4, name: 'Schneider' },
];

export default function About() {
  const [whoRef,      whoVisible]      = useReveal();
  const [mvRef,       mvVisible]       = useReveal();
  const [teamRef,     teamVisible]     = useReveal();
  const [partnersRef, partnersVisible] = useReveal();

  return (
    <div className="ap">

      {/* ═══ 1. HERO ═══ */}
      <section className="ap-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="ap-hero-overlay" />
        <div className="ap-hero-content">
          <div className="ap-hero-glass ap-fade-up">
            <h1>About Us</h1>
            <p className="ap-hero-tagline">Powering Innovation. Brightening lives.</p>
            <p className="ap-hero-desc">
              De-lightway Electrical is a leading provider of modern lighting and electrical
              solutions for homes, businesses, and industries across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 2. WHO WE ARE ═══ */}
      <section className="ap-section ap-who">
        <div
          ref={whoRef}
          className={`page-container ap-who-inner ap-reveal ${whoVisible ? 'ap-revealed' : ''}`}
        >
          <div className="ap-who-text ap-slide-left">
            <span className="ap-eyebrow">WHO WE ARE</span>
            <h2>Delivering Excellence<br />Through Expertise</h2>
            <p>
              We are a team of certified professionals passionate about delivering safe, reliable,
              and innovative electrical solutions. From design and installation to maintenance and
              support, we ensure quality in every project we undertake.
            </p>
            <Link to="/book-consultation" className="ap-outline-btn">Learn More About Us</Link>
          </div>
          <div className="ap-who-img ap-slide-right">
            <img src={whoImg} alt="Electrician working on panel" />
          </div>
        </div>
      </section>

      {/* ═══ 3. MISSION & VISION ═══ */}
      <section className="ap-section ap-mv-section">
        <div
          ref={mvRef}
          className={`page-container ap-reveal ${mvVisible ? 'ap-revealed' : ''}`}
        >
          <span className="ap-eyebrow center">OUR PURPOSE</span>
          <h2 className="ap-center-heading">Mission &amp; Vision</h2>
          <div className="ap-mv-grid">
            {[
              { icon: '🎯', title: 'Our Mission', text: 'To deliver world-class electrical and lighting solutions that enhance safety, efficiency, and comfort while exceeding client expectations. We are committed to using the latest technology and best practices to power every space we serve — from homes to large-scale industrial facilities.' },
              { icon: '👁️', title: 'Our Vision',  text: "To be Africa's most trusted electrical partner, driving innovation and sustainability in every space we power. We envision a future where every home, business, and industry across the continent has access to safe, reliable, and energy-efficient electrical solutions." },
            ].map((card, i) => (
              <div key={i} className="ap-mv-card ap-mv-hover">
                <div className="ap-mv-icon-wrap"><span>{card.icon}</span></div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. TEAM ═══ */}
      <section className="ap-section ap-team-section">
        <div
          ref={teamRef}
          className={`page-container ap-reveal ${teamVisible ? 'ap-revealed' : ''}`}
        >
          <span className="ap-eyebrow center">OUR TEAM</span>
          <h2 className="ap-center-heading">The People Behind De-lightway</h2>
          <div className="ap-team-grid">
            {team.map((m, i) => (
              <div
                key={i}
                className="ap-team-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="ap-team-photo">
                  <img src={m.img} alt={m.name} />
                  <div className="ap-team-overlay">
                    <h4>{m.name}</h4>
                    <span>{m.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. STATS ═══ */}
      <section className="ap-stats-section">
        <div className="page-container ap-stats-row">
          {stats.map((s, i) => (
            <div key={i} className="ap-stat">
              <span className="ap-stat-icon">{s.icon}</span>
              <span className="ap-stat-value"><Counter target={s.value} /></span>
              <span className="ap-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 6. CERTIFICATIONS & PARTNERS ═══ */}
      <section className="ap-section ap-partners-section">
        <div
          ref={partnersRef}
          className={`page-container ap-reveal ${partnersVisible ? 'ap-revealed' : ''}`}
        >
          <span className="ap-eyebrow center">CERTIFICATIONS &amp; PARTNERS</span>
          <h2 className="ap-center-heading">Trusted. Certified. Reliable.</h2>
          <div className="ap-partners-row">
            {partners.map((p, i) => (
              <div key={i} className="ap-partner-tile">
                <img src={p.img} alt={p.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. CTA BANNER ═══ */}
      <section className="ap-cta-banner">
        <div className="ap-cta-inner">
          <div className="ap-cta-left">
            <img src={ctaLogo} alt="De-lightway" className="ap-cta-logo" />
            <div className="ap-cta-copy">
              <h3>Let's build something amazing together.</h3>
              <p>Partner with us for innovative electrical solutions.</p>
            </div>
          </div>
          <Link to="/book-consultation" className="ap-cta-btn">Book Consultation</Link>
        </div>
      </section>

    </div>
  );
}
