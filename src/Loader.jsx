// Loader.jsx
import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // This effect will simulate loading progress from 0 to 100
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onComplete(); // Call the parent function to hide the loader
          return 100;
        }
        return prevProgress + 1; // Increment progress by 1
      });
    }, 30); // Adjust this value to change the speed of the loading bar

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader-page">
      <div className="loader-content">
        <h1 className="progress-counter">{progress} - 100</h1>
        <h2 className="loading-text">YOUR WEB EXPERIENCE IS LOADING RIGHT NOW</h2>
        <p className="loading-message">Please wait a few seconds.</p>
      </div>
    </div>
  );
};

export default Loader;