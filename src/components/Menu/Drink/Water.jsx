import React, { useState } from 'react';
import './Juice.css';
import juice1 from "../../../assets/Images/Manu/Food_gallery/juice/juice1.png";  // Replace with your pizza images
import juice2 from "../../../assets/Images/Manu/Food_gallery/juice/juice2.png";  
// ... import other pizza images

const pizzas = [
  { id: 1, name: 'PANNA STILL WATER 500ML', description: '', image: juice1 },
  { id: 2, name: 'PANNA STILL WATER 750ML', description: '', image: juice1 },
  { id: 3, name: 'BUFALINA', description: '', image: juice1 },
  { id: 4, name: 'BUFALINA', description: '', image: juice2 },
 

  // ... add more pizza data for the remaining 11 types
];

const Water = () => {
  const [activePizza, setActivePizza] = useState(null);  // Active pizza state

  const handleMouseEnter = (id) => {
    setActivePizza(id);
  };

  const handleMouseLeave = () => {
    setActivePizza(null);
  };

  return (
    <div>
      <div className="juice-title">
      </div>
    <div className="juice-gallery">
    
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className={`juice-container ${activePizza === pizza.id ? 'juice-active' : ''} ${activePizza && activePizza !== pizza.id ? 'juice-inactive' : ''}`}
          onMouseEnter={() => handleMouseEnter(pizza.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="juice-info">
            <h3>{pizza.name}</h3>
            {/* <p>{pizza.description}</p> */}
            <button>£ 15.6</button>
          </div>
          <img src={pizza.image} alt={pizza.name} className="juice-image" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Water;
