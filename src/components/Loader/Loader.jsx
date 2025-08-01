// src/components/Loader/Loader.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [nowStyleIndex, setNowStyleIndex] = useState(0);

  const nowStyles = ["NOW", "𝓝𝓞𝓦", "Nᴏᴡ"];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 1000); // Longer delay after finish
          return 100;
        }
        return prev + 1;
      });
    }, 40); // Slower increment

    const nowCycle = setInterval(() => {
      setNowStyleIndex((prev) => (prev + 1) % nowStyles.length);
    }, 700);

    return () => {
      clearInterval(progressTimer);
      clearInterval(nowCycle);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="loader-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="loader-content-wrapper">
        {/* Line 1 */}
        <motion.h1
          className="loading-counter-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {progress} – 100 &nbsp; <span className="your-lies">YOUR</span>
        </motion.h1>

        {/* Line 2 */}
        <motion.h2
          className="loading-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          WEB EXPERIENCE
        </motion.h2>

        {/* Line 3 */}
        <motion.h2
          className="loading-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          IS LOADING RIGHT <span className="loading-title-now">{nowStyles[nowStyleIndex]}</span>
        </motion.h2>

        <motion.p
          className="loading-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Please wait a few seconds.
        </motion.p>
      </div>
    </motion.div>
  );
}
