import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import img1 from "../../assets/Images/About/img1 (1).png";
import img2 from "../../assets/Images/About/img1 (2).png";
import img3 from "../../assets/Images/About/img1 (3).png";
import img4 from "../../assets/Images/About/img1 (4).png";
import img5 from "../../assets/Images/About/img1 (5).png";


const AboutSlide = () => {
  const images = [img1, img2, img3, img4, img5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div style={{ position: 'relative', width: '90%', height: '300px', margin: 'auto' }}>
      {transitions((style, i) => (
        <animated.div
          key={i}
          style={{
            ...style,
            position: 'absolute',
            width: '80%',
            height: '',
          }}
        >
          <img
            src={images[i]}
            alt={`Slideshow Image ${i + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default AboutSlide;
