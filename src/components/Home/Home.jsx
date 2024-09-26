import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS for Home styles
import pizzaimage1 from "../../assets/Images/Home/pizzaImage1.png";
import pizzaimage2 from "../../assets/Images/Home/pizzaImage2.png";
import pizzaimage3 from "../../assets/Images/Home/pizzaImage3.png";
import pizzaimage4 from "../../assets/Images/Home/pizzaImage4.png";
import HomeSlide from './HomeSlide';

const Home = () => {
  const images = [pizzaimage1, pizzaimage2, pizzaimage3, pizzaimage4]; // Array of all images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // Cycle through images
    }, 3000); // Swap images every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="home">
      <div className="home-main-content">
        <div className="home-left-content">
          <h2>“Freshly Baked,</h2>
          <h1>Just for You “</h1>
          <p>
            Experience the taste of fresh, locally sourced ingredients. Our
            seasonal dishes are
            <br />
            prepared with love and sustainability in mind.
          </p>
          <div className="home-left-content-button">
            <button>Book A Table</button>
            <button>Delivery</button>
            <button>Pick Up</button>
          </div>
        </div>

        <div className="home-right-content">

          <HomeSlide />
        </div>
      </div>
      <div className="home-bottom-content">
        <div className="operating-hours">
          <h2>5<sup>PM</sup>&nbsp;-&nbsp;11<sup>PM</sup></h2>
          <p>MON &nbsp;-&nbsp;THU</p>
        </div>
        <div className="operating-hours">
          <h2>12<sup>PM</sup>&nbsp;-&nbsp;11<sup>PM</sup></h2>
          <p>FRI</p>
        </div>
        <div className="operating-hours">
          <h2>8<sup>PM</sup>&nbsp;-&nbsp;11<sup>PM</sup></h2>
          <p>SAT &nbsp;&&nbsp;SUN</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
