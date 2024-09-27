import React, { useState, useRef } from 'react';
import './Appetizere.css';
import pizza1 from "../../../assets/Images/Manu/Food_gallery/Pizza/pizza1 (1).png";
import pizza2 from "../../../assets/Images/Manu/Food_gallery/Pizza/pizza1 (2).png";
// ... import other pizza images

const pizzas = [
  { id: 1, name: 'SICILIAN OLIVES', description: 'Fried Eggs, Streaky Bacon, Cumberland Sausage, Hash Brown, Baked Beans, Portobello Mushroom,Grilled Tomatoes, Sourdough.', image: pizza1 },
  { id: 2, name: 'GARLIC BREAD', description: 'Fried Eggs, Streaky Bacon, Cumberland Sausage, Hash Brown, Baked Beans, Portobello Mushroom,Grilled Tomatoes, Sourdough.', image: pizza2 },
  { id: 3, name: 'SICILIAN OLIVES', description: 'Fried Eggs, Streaky Bacon, Cumberland Sausage, Hash Brown, Baked Beans, Portobello Mushroom,Grilled Tomatoes, Sourdough.', image: pizza1 },
  { id: 4, name: 'GARLIC BREAD', description: 'Fried Eggs, Streaky Bacon, Cumberland Sausage, Hash Brown, Baked Beans, Portobello Mushroom,Grilled Tomatoes, Sourdough.', image: pizza2 },
  { id: 5, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 6, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },
  { id: 7, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 8, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },
  { id: 9, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 10, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },
  // Add more pizza objects...
];

const MainCourses = () => {
  const [activePizza, setActivePizza] = useState(null); // Active pizza state
  const scrollRef = useRef(null);

  const handleMouseEnter = (id) => {
    setActivePizza(id);
  };

  const handleMouseLeave = () => {
    setActivePizza(null);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300; // Change this value for more/less scroll
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="appetizere-gallery-container">
        <div className='appetizere-title'><h2>Main Courses</h2> </div>
      <button className="appetizere-arrow appetizere-left-arrow" onClick={() => scroll('left')}>‹</button>

      <div className="appetizere-gallery" ref={scrollRef}>
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className={`appetizere-container ${activePizza === pizza.id ? 'appetizere-active' : ''} ${activePizza && activePizza !== pizza.id ? 'appetizere-inactive' : ''}`}
            onMouseEnter={() => handleMouseEnter(pizza.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="appetizere-pizza-info">
              <h3>{pizza.name}</h3>
              <p>{pizza.description}</p>
              <button className='appetizere-price-button'>£ 15.6</button>
            </div>
            <img src={pizza.image} alt={pizza.name} className="appetizere-pizza-image" />
          </div>
        ))}
      </div>

      <button className="appetizere-arrow appetizere-right-arrow" onClick={() => scroll('right')}>›</button>
    </div>
  );
};

export default MainCourses;
