import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../assets/img/High-resolution_professional_photograph_of_African_202605101600.jpeg';
import img2 from '../assets/img/High-resolution_professional_photograph_of_African_202605101600(1).jpeg';
import img3 from '../assets/img/High-resolution_professional_photograph_of_African_202605101604.jpeg';
import img4 from '../assets/img/High-resolution_professional_photograph_of_African_202605101604(1).jpeg';
import img5 from '../assets/img/Professional_African_electrical_technician_inspecting_202605101608.jpeg';
import img6 from '../assets/img/Professional_African_electrical_technician_inspecting_202605101608(1).jpeg';
import img7 from '../assets/img/Professional_team_photo_of_African_202605101614.jpeg';
import img8 from '../assets/img/Professional_team_photo_of_African_202605101614(1).jpeg';
import img9 from '../assets/img/Gemini_Generated_Image_f0t5ulf0t5ulf0t5.png';

const galleryItems = [
  { src: img1, caption: 'Residential wiring installation' },
  { src: img2, caption: 'Home lighting upgrade' },
  { src: img3, caption: 'Commercial electrical fit-out' },
  { src: img4, caption: 'Office power systems' },
  { src: img5, caption: 'Industrial panel inspection' },
  { src: img6, caption: 'Technician at work' },
  { src: img7, caption: 'Our professional team' },
  { src: img8, caption: 'Team on-site' },
  { src: img9, caption: 'Electrical project overview' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setLightbox((lightbox + 1) % galleryItems.length);

  return (
    <div className="gallery-page">

      {/* Header */}
      <section className="gallery-header">
        <h1>Project Gallery</h1>
        <p>A look at some of the work we're proud of.</p>
      </section>

      {/* Grid */}
      <section className="gallery-grid-section">
        <div className="page-container">
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
                <img src={item.src} alt={item.caption} />
                <div className="gallery-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <button className="lightbox-nav prev" onClick={prev}>‹</button>
            <img src={galleryItems[lightbox].src} alt={galleryItems[lightbox].caption} />
            <p className="lightbox-caption">{galleryItems[lightbox].caption}</p>
            <button className="lightbox-nav next" onClick={next}>›</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
