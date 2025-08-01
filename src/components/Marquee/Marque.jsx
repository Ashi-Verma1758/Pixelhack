// src/components/Marquee/Marquee.jsx
import React from 'react';
import './Marquee.css';

const Marquee = ({ items }) => {
  // We duplicate the items to create a seamless loop
  const marqueeItems = [...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {marqueeItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;