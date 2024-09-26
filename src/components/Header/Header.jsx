import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS for styling
import pizzalogo from "../../assets/Images/Home/PizzaLogo.png"

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Home'); // Default selected menu

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
  };

  return (
    <header className={`header ${scroll ? 'header--scrolled' : ''}`}>
      <div className="header__logo">
        <img src={pizzalogo} alt="Pizza Logo" className="logo" />
        <span className="brand-name">PizzaBrand</span>
      </div>
      <nav className="header__menu">
        <ul>
          {['Home', 'About', 'Menu', 'Service', 'Location'].map((menu) => (
            <li
              key={menu}
              className={selectedMenu === menu ? 'selected' : ''}
              onClick={() => handleMenuClick(menu)}
            >
              <a href={`#${menu.toLowerCase()}`}>{menu}</a>
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
