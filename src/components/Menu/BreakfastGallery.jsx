import React, { useState } from 'react';
import './PizzaGallery.css';
import pizza1 from "../../assets/Images/Manu/Food_gallery/Pizza/pizza1 (1).png";  // Replace with your pizza images
import pizza2 from "../../assets/Images/Manu/Food_gallery/Pizza/pizza1 (2).png";
// ... import other pizza images

const pizzas = [
  { id: 1, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 2, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },
  { id: 3, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 4, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },
  { id: 5, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 6, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },
  { id: 7, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 8, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },
  { id: 9, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 10, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },
  { id: 11, name: 'Margherita', description: 'Classic pizza with tomato sauce, mozzarella cheese', image: pizza1 },
  { id: 12, name: 'Pepperoni', description: 'Pepperoni slices with mozzarella cheese', image: pizza2 },

  // ... add more pizza data for the remaining 11 types
];

const BreakfastGallery = () => {
  const [activePizza, setActivePizza] = useState(null);  // Active pizza state

  const handleMouseEnter = (id) => {
    setActivePizza(id);
  };

  const handleMouseLeave = () => {
    setActivePizza(null);
  };

  return (
    <div>
    <div className="pizza-title">
    <h2>Breakfast</h2>
    </div>
    <div className="pizza-gallery">
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className={`pizza-container ${activePizza === pizza.id ? 'active' : ''} ${activePizza && activePizza !== pizza.id ? 'inactive' : ''}`}
          onMouseEnter={() => handleMouseEnter(pizza.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="pizza-info">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <button>£ 15.6</button>
          </div>
          <img src={pizza.image} alt={pizza.name} className="pizza-image" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default BreakfastGallery;
