import { useState } from 'react'
import './App.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/ing3.jpg'
import img5 from './assets/img4.jpg'
import img4 from './assets/img5.jpg'
import img6 from './assets/ing6.jpg'
import img7 from './assets/img7.jpg'
import Marquee from './Marque'
import Loader from './Loader'

function App() {
   const portfolioItems = [
    <img src={img1} alt="Collection 1" />,
    <img src={img2} alt="Collection 2" />,
    <img src={img3} alt="Collection 3" />,
    <img src={img4} alt="Collection 4" />,
    <img src={img5} alt="Collection 4" />,
    <img src={img6} alt="Collection 4" />,
    <img src={img7} alt="Collection 4" />,

  ];
   const [isLoading, setIsLoading] = useState(true);
     const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
     {isLoading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <div className="App">
      <h1>Our Featured Collections</h1>
      <Marquee items={portfolioItems} />
    </div>
      )}
 
    </>
  );
}


export default App
