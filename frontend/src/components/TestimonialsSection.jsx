import React from 'react';
import './TestimonialsSection.css';
import testimonialImg from '../assets/img/Testimonialss.png';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "De-lightway Electrical provided exceptional service for our office renovation. Their attention to detail and professional approach were outstanding.",
      author: "Sarah Johnson",
      position: "Office Manager"
    },
    {
      text: "Quick response and very efficient. They fixed our industrial power issues in no time. Highly recommend for any commercial electrical work.",
      author: "Michael Chen",
      position: "Factory Supervisor"
    },
    {
      text: "Modern lighting solutions that transformed our home. The team was friendly, clean, and very knowledgeable.",
      author: "Emily Davis",
      position: "Homeowner"
    },
    {
      text: "Outstanding expertise in industrial wiring. De-lightway handled our warehouse expansion project with zero downtime. Truly reliable partners.",
      author: "David Wilson",
      position: "Operations Manager"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="page-container">
        <h2 className="section-title">Testimonial</h2>
        <div className="testimonials-content">
          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-footer">
                  <span className="author-name">{t.author}</span>
                  <span className="author-position">{t.position}</span>
                  <div className="star-rating">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
