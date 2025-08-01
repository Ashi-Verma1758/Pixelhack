import React from 'react';
import './WorksPage.css';

const portfolioItems = [
  { id: 1, title: 'OLGA PRUDKA', year: '2023', image: 'https://via.placeholder.com/600x800/E9E9E9?text=Project+1' },
  { id: 2, title: 'AIM', year: '2023', image: 'https://via.placeholder.com/600x800/222222?text=Project+2' },
  { id: 3, title: 'DAVID LAXER', year: '2024', image: 'https://via.placeholder.com/600x800/F5F5F5?text=Project+3' },
  { id: 4, title: 'OBYS', year: '2024', image: 'https://via.placeholder.com/600x800/444444?text=Project+4' },
  { id: 5, title: 'SELECTED WORKS', year: '2025', image: 'https://via.placeholder.com/600x800/E0E0E0?text=Project+5' },
  { id: 6, title: 'ANOTHER PROJECT', year: '2025', image: 'https://via.placeholder.com/600x800/111111?text=Project+6' },
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