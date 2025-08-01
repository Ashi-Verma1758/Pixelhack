import React from 'react';
import './WorksPage.css';
import ashiVermaImage from '../../public/a.jpg';
import yashiGuptaImage from '../../public/b.jpg';
import shubhaSinghImage from '../../public/c.jpg';
import saumyaVermaImage from '../../public/d.jpg';
import omVermaImage from '../../public/e.jpg';
const portfolioItems = [
  { id: 1, name: 'Ashi Verma', title: 'CEO', photo: ashiVermaImage },
   { id: 2, name: 'Yashi Gupta', title: 'COO', photo: yashiGuptaImage },
   { id: 3, name: 'Shubha Singh', title: 'Chief Product Officer', photo: shubhaSinghImage },
   { id: 4, name: 'Saumya Verma', title: 'CTO', photo: saumyaVermaImage },
   { id: 5, name: 'Om Verma', title: 'VP of Engineering', photo: omVermaImage },
];

const WorksPage = ({ onGoHome }) => {
  return (
    <div className="works-page-container">
      <header className="works-header">
        <h1>Selected Works</h1>
        <button onClick={onGoHome} className="back-btn">Back to Home</button>
      </header>
      
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksPage;