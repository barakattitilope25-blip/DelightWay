import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');
      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="page-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-subtitle">
          Have a project in mind? Reach out and we'll get back to you shortly.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
            />
          </div>

          {status === 'success' && (
            <p className="form-feedback success">
              ✓ Message sent! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-feedback error">
              ✗ Something went wrong. Please try again.
            </p>
          )}

          <button type="submit" className="contact-submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
