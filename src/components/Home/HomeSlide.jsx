import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import pizzaimage1 from "../../assets/Images/Home/pizzaImage1.png";
import pizzaimage2 from "../../assets/Images/Home/pizzaImage2.png";
import pizzaimage3 from "../../assets/Images/Home/pizzaImage3.png";
import pizzaimage4 from "../../assets/Images/Home/pizzaImage4.png";
import "./HomeSlide.css"

const HomeSlide = () => {
  const images = [pizzaimage1, pizzaimage2, pizzaimage3, pizzaimage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the main image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Main image transition
  const mainTransition = useTransition(currentIndex, {
    from: { opacity: 0, transform: 'scale(0.5)' }, // Start small
    enter: { opacity: 1, transform: 'scale(1)' },  // Grow to full size
    leave: { opacity: 0, transform: 'scale(0.5)' }, // Shrink back
    config: { duration: 1000 }, // Smooth transitions
  });

  return (
    <div className="home-right-content-inside" style={{ position: 'relative', width: '80%', height: '600px' , backgroundColor:'transparent'}}>
      {/* Top large image with smooth transition */}
      {mainTransition((style, i) => (
        <animated.img
          key={i}
          src={images[i]}
          className="home-top-image"
          alt="Top Pizza"
          style={{
            ...style,
            marginTop:'',
            position:'absolute',
            top: '0',
            left: '0',
            width: '80%',
            objectFit: 'cover', // Maintain image aspect ratio
            zIndex: 1, // Keep it above the smaller images
          }}
        />
      ))}

      {/* Row of smaller images */}
      <div className="small-image-row" style={{ position: 'absolute', bottom: '0', width: '100%', display: 'flex', justifyContent: '' }}>
        <img
          src={images[(currentIndex + 1) % images.length]}
          className="small-image small-image-1"
          alt="Small Pizza 1"
          style={{ width: '200px', height: '200px', transition: 'transform 0.3s ease-in-out' }}
        />
        <img
          src={images[(currentIndex + 2) % images.length]}
          className="small-image small-image-2"
          alt="Small Pizza 2"
          style={{ width: '200px', height: '200px', transition: 'transform 0.3s ease-in-out' }}
        />
        <img
          src={images[(currentIndex + 3) % images.length]}
          className="small-image small-image-3"
          alt="Small Pizza 3"
          style={{ width: '200px', height: '200px', transition: 'transform 0.3s ease-in-out' }}
        />
      </div>
    </div>
  );
};

export default HomeSlide;
