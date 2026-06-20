import React from 'react';
import './Clients.css';
import airlineLogo from '../assets/img/Airline.png';
import arielLogo from '../assets/img/Ariel.png';
import carvixLogo from '../assets/img/CARVIX.png';
import superSystemLogo from '../assets/img/Super system.png';

const Clients = () => {
  const clientsList = [
    { name: 'Airline', logo: airlineLogo },
    { name: 'Ariel', logo: arielLogo },
    { name: 'Carvix', logo: carvixLogo },
    { name: 'Super System', logo: superSystemLogo }
  ];

  return (
    <section className="clients-section">
      <div className="page-container">
        <h2 className="section-title">Our Clients</h2>
        <div className="clients-grid">
          {clientsList.map((client, index) => (
            <div key={index} className="client-item">
              <img src={client.logo} alt={client.name} title={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
