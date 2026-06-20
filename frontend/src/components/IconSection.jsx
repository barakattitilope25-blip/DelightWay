import React from 'react';
import './IconSection.css';
import innovIcon from '../assets/img/Innov.png';
import safetIcon from '../assets/img/Safet.png';
import effiIcon from '../assets/img/effi.png';
import reliabIcon from '../assets/img/Reliab.png';

const IconSection = () => {
  const iconsList = [
    { title: 'Innovation', icon: innovIcon },
    { title: 'Safety', icon: safetIcon },
    { title: 'Efficiency', icon: effiIcon },
    { title: 'Reliability', icon: reliabIcon }
  ];

  return (
    <section className="icon-section">
      <div className="page-container">
        <div className="icon-grid">
          {iconsList.map((item, index) => (
            <div key={index} className="icon-item">
              <div className="icon-wrapper">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconSection;
