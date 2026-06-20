import React, { useState } from 'react';
import './BookConsultation.css';

const serviceOptions = [
  'Residential Electrical',
  'Commercial Electrical',
  'Industrial Electrical',
  'Lighting Design',
  'Smart Home Systems',
  'Safety Inspection',
  'Other',
];

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', date: '', message: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');
      const res = await fetch(`${apiBaseUrl}/api/consultation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
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
    <div className="book-page">

      {/* Header */}
      <section className="book-header">
        <h1>Book a Consultation</h1>
        <p>Tell us about your project and we'll schedule a free consultation at your convenience.</p>
      </section>

      <section className="book-body">
        <div className="page-container book-layout">

          {/* Why consult */}
          <div className="book-info">
            <h2>Why Book a Consultation?</h2>
            <ul className="book-benefits">
              <li><span className="book-check">✓</span> Free, no-obligation assessment</li>
              <li><span className="book-check">✓</span> Expert advice tailored to your needs</li>
              <li><span className="book-check">✓</span> Transparent, detailed quotation</li>
              <li><span className="book-check">✓</span> Flexible scheduling — we come to you</li>
              <li><span className="book-check">✓</span> Certified electricians on every visit</li>
            </ul>
            <div className="book-note">
              <p>
                Our consultations are completely free. A certified De-lightway electrician will visit
                your site, assess your requirements, and provide a clear, itemised quote — no hidden fees.
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="book-form" onSubmit={handleSubmit} noValidate>
            <h2>Schedule Your Visit</h2>

            <div className="book-form-row">
              <div className="book-form-group">
                <label htmlFor="b-name">Full Name</label>
                <input id="b-name" type="text" name="name" placeholder="Your full name"
                  value={formData.name} onChange={handleChange} required autoComplete="name" />
              </div>
              <div className="book-form-group">
                <label htmlFor="b-phone">Phone Number</label>
                <input id="b-phone" type="tel" name="phone" placeholder="+233 00 000 0000"
                  value={formData.phone} onChange={handleChange} autoComplete="tel" />
              </div>
            </div>

            <div className="book-form-group">
              <label htmlFor="b-email">Email Address</label>
              <input id="b-email" type="email" name="email" placeholder="your@email.com"
                value={formData.email} onChange={handleChange} required autoComplete="email" />
            </div>

            <div className="book-form-row">
              <div className="book-form-group">
                <label htmlFor="b-service">Service Needed</label>
                <select id="b-service" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="book-form-group">
                <label htmlFor="b-date">Preferred Date</label>
                <input id="b-date" type="date" name="date" value={formData.date} onChange={handleChange} />
              </div>
            </div>

            <div className="book-form-group">
              <label htmlFor="b-message">Additional Details</label>
              <textarea id="b-message" name="message" placeholder="Describe your project or any specific requirements..."
                value={formData.message} onChange={handleChange} rows={5} />
            </div>

            {status === 'success' && <p className="book-feedback success">✓ Booking received! We'll confirm your appointment shortly.</p>}
            {status === 'error' && <p className="book-feedback error">✗ Something went wrong. Please try again.</p>}

            <button type="submit" className="book-submit-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Book Consultation'}
            </button>
          </form>

        </div>
      </section>

    </div>
  );
};

export default BookConsultation;
