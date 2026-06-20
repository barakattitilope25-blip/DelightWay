import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import IconSection from '../components/IconSection';
import Clients from '../components/Clients';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => (
  <div className="home-page">
    <Hero />
    <Services />
    <IconSection />
    <Clients />
    <TestimonialsSection />
    <CTASection />
    <ContactSection />
    <Footer />
  </div>
);

export default Home;
