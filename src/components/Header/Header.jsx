import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css'; // Import the CSS for styling
import pizzalogo from "../../assets/Images/Home/PizzaLogo.png"

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Home'); // Default selected menu
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu); // Set the selected menu

    // Navigate to the corresponding route
    if (menu === 'Home') {
      navigate('/'); // Navigate to the homepage
    } else if (menu === 'About') {
      navigate('/about');
    } else if (menu === 'Menu') {
      navigate('/main-manu'); // Navigate to the manu
    } else if (menu === 'Service') {
      navigate('/service'); 
      // Add navigation for Service if necessary
    } else if (menu === 'Location') {
      navigate('/location');
    }
  };

  return (
    <header className={`header ${scroll ? 'header--scrolled' : ''}`}>
      <div className="header__logo">
        <img src={pizzalogo} alt="Pizza Logo" className="logo" />
        <span className="brand-name">Pizza Da Valter</span>
      </div>
      <nav className="header__menu">
        <ul>
          {['Home', 'About', 'Menu', 'Service', 'Location'].map((menu) => (
            <li
              key={menu}
              className={selectedMenu === menu ? 'selected' : ''}
              onClick={() => handleMenuClick(menu)}
            >
              <a>{menu}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__order">
        <button className="order-btn">Order Now</button>
      </div>
    </header>
  );
};

export default Header;
