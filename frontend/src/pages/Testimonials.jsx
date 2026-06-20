import React from 'react';
import './Testimonials.css';
import testimonialBg from '../assets/img/Testimonialss.png';

const Testimonials = () => {
  const testimonials = [
    {
      text: "De-lightway Electrical provided exceptional service for our office renovation. Their attention to detail and professional approach were outstanding. I wouldn't hesitate to recommend them.",
      author: "Sarah Johnson",
      position: "Office Manager",
      company: "Nexus Corp",
    },
    {
      text: "Quick response and very efficient. They fixed our industrial power issues in no time. Highly recommend for any commercial electrical work. True professionals.",
      author: "Michael Chen",
      position: "Factory Supervisor",
      company: "TechManufacture Ltd",
    },
    {
      text: "Modern lighting solutions that transformed our home. The team was friendly, clean, and very knowledgeable. Our electricity bills have dropped significantly.",
      author: "Emily Davis",
      position: "Homeowner",
      company: "",
    },
    {
      text: "Outstanding expertise in industrial wiring. De-lightway handled our warehouse expansion project with zero downtime. Truly reliable partners we'll keep working with.",
      author: "David Wilson",
      position: "Operations Manager",
      company: "Global Logistics Inc",
    },
    {
      text: "From the initial quote to the final inspection, everything was seamless. The team communicated clearly at every stage and delivered exactly what was promised.",
      author: "Amara Osei",
      position: "Property Developer",
      company: "Osei Estates",
    },
    {
      text: "We've used De-lightway for three commercial projects now. Consistent quality, fair pricing, and a team that genuinely cares about getting it right.",
      author: "James Mensah",
      position: "Facilities Director",
      company: "Accra Business Hub",
    },
  ];

  return (
    <div className="testimonials-page">

      {/* Hero */}
      <section className="testimonials-hero" style={{ backgroundImage: `url("${testimonialBg}")` }}>
        <div className="testimonials-hero-overlay">
          <h1>What Our Clients Say</h1>
          <p>Real feedback from the people we've had the privilege of serving.</p>
        </div>
      </section>

      {/* Cards */}
      <section className="testimonials-page-section">
        <div className="page-container">
          <div className="testimonials-page-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonials-page-card">
                <div className="tpage-quote">"</div>
                <p className="tpage-text">{t.text}</p>
                <div className="tpage-footer">
                  <span className="tpage-author">{t.author}</span>
                  <span className="tpage-position">
                    {t.position}{t.company ? `, ${t.company}` : ''}
                  </span>
                  <div className="tpage-stars">
                    {'★'.repeat(5).split('').map((s, j) => <span key={j}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;
