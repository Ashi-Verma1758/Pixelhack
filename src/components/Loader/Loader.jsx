// src/components/Loader/Loader.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // This timer simulates the loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait for a moment before completing to show the 100% state
          setTimeout(onComplete, 500); 
          return 100;
        }
        return prev + 2; // Increment progress
      });
    }, 50); // Adjust this value to change the speed of the progress

    // Cleanup function to clear the interval
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }} // This is the fade-out animation
      transition={{ duration: 0.8 }}
    >
      <div className="loading-content-wrapper">
        <motion.h1
          className="loading-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Web Experience is Loading Right Now
        </motion.h1>

        <div className="progress-bar-container">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}