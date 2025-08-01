// src/App.jsx
"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/Loader/Loader';
import HomePage from './Pages/HomePage';
import WorksPage from './Pages/WorkPage';// <-- Import the new page
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  const handleGoHome = () => {
    setCurrentPage('home');
  };
  
  const handleGoToWorks = () => {
    setCurrentPage('works');
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <main>
          {currentPage === 'home' && <HomePage onGoToWorks={handleGoToWorks} />}
          {currentPage === 'works' && <WorksPage onGoHome={handleGoHome} />}
        </main>
      )}
    </>
  );
};

export default App;