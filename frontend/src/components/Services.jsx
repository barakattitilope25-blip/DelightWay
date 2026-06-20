import React from 'react';
import './Services.css';
import residentialImg from '../assets/img/Residential.png';
import commercialImg from '../assets/img/Commercial.png';
import industrialImg from '../assets/img/Industrial.png';

const Services = () => {
  const servicesList = [
    {
      title: 'Residential',
      image: residentialImg,
      description: 'Expert electrical solutions for your home, from wiring to lighting installations.'
    },
    {
      title: 'Commercial',
      image: commercialImg,
      description: 'Reliable electrical services for offices, retail spaces, and commercial buildings.'
    },
    {
      title: 'Industrial',
      image: industrialImg,
      description: 'Specialized electrical support for factories, warehouses, and industrial plants.'
    }
  ];

  return (
    <section className="services-section">
      <div className="page-container">
        <div className="services-intro">
          <h2>Our Services</h2>
          <p>
            De-lightway Electrical is a modern electrical and lighting solutions company.<br />
            With many years of experience<br />
            in residential, commercial, and industrial electrical services.
          </p>
        </div>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
