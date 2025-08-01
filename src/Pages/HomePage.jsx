// src/pages/HomePage.jsx
import React from 'react';
import Marquee from '../components/Marquee/Marque';
import './HomePage.css'; // We'll add this next
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/ing3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/ing6.jpg"
import img7 from "../assets/img7.jpg"
import Team from '../components/Team/Team';
import ContactForm from '../components/ContactForm/ContactForm';
import FeaturedProducts from '../components/FeaturedProduct/featuredProduct';
// Example images for the marquee
const marqueeImages = [
  <img src={img1} alt="Design 1" />,
  <img src={img2} alt="Design 1" />,
  <img src={img3} alt="Design 1" />,
  <img src={img4} alt="Design 1" />,
  <img src={img5} alt="Design 1" />,
  <img src={img6} alt="Design 1" />,
  <img src={img7} alt="Design 1" />,
  
];

const HomePage = ({ onGoToWorks }) => {
  return (
    <div className="homepage-container">
      {/* A simple nav button to go to the works page */}
      <div style={{ textAlign: 'right', padding: '1rem' }}>
        <button onClick={onGoToWorks} className="works-nav-btn">View Works</button>
      </div>
      
      {/* Hero section */}
      <section className="hero-section">
        <h1>STEELLAR DESIGN STUDIO</h1>
        <p>SEIZE GREATNESS.</p>
      </section>

      {/* Looping Marquee Section */}
      <section className="marquee-section">
        <h2>Selected Works</h2>
        <Marquee items={marqueeImages} />
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <Team />
      </section>
      
      {/* Featured Products Section */}
      <section className="featured-products-section">
        <FeaturedProducts />
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <ContactForm />
      </section>
    </div>
  );
};




export default HomePage;