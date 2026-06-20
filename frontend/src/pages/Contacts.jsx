import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
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
    <div className="contacts-page">

      {/* Header */}
      <section className="contacts-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out and we'll respond promptly.</p>
      </section>

      <section className="contacts-body">
        <div className="page-container contacts-layout">

          {/* Info */}
          <div className="contacts-info">
            <h2>Get in Touch</h2>
            <div className="contact-info-item">
              <span className="contact-info-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>123 Lightway Avenue, Accra, Ghana</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+233 20 000 0000</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>hello@delightway.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">🕐</span>
              <div>
                <strong>Working Hours</strong>
                <p>Mon – Fri: 8am – 6pm<br />Sat: 9am – 3pm</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="contacts-form" onSubmit={handleSubmit} noValidate>
            <h2>Send a Message</h2>
            <div className="contacts-form-group">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" type="text" name="name" placeholder="Your full name"
                value={formData.name} onChange={handleChange} required autoComplete="name" />
            </div>
            <div className="contacts-form-group">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" name="email" placeholder="your@email.com"
                value={formData.email} onChange={handleChange} required autoComplete="email" />
            </div>
            <div className="contacts-form-group">
              <label htmlFor="c-message">Message</label>
              <textarea id="c-message" name="message" placeholder="How can we help you?"
                value={formData.message} onChange={handleChange} required rows={6} />
            </div>
            {status === 'success' && <p className="contacts-feedback success">✓ Message sent! We'll be in touch soon.</p>}
            {status === 'error' && <p className="contacts-feedback error">✗ Something went wrong. Please try again.</p>}
            <button type="submit" className="contacts-submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

        </div>
      </section>

    </div>
  );
};

export default Contacts;
