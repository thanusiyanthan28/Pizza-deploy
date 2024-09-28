import React, { useState } from 'react';
import './Juice.css';
import juice1 from "../../../assets/Images/Manu/Food_gallery/juice/juice1.png";  // Replace with your pizza images
import juice2 from "../../../assets/Images/Manu/Food_gallery/juice/juice2.png";  
// ... import other pizza images

const pizzas = [
  { id: 2, name: 'POMPELMO', description: '', image: juice1 },
  { id: 3, name: 'CHINOTTO', description: '', image: juice1 },
  { id: 4, name: 'APPLE JUICE', description: '', image: juice1 },
  { id: 5, name: 'BUFALINA', description: '', image: juice2 },
  { id: 6, name: 'BUFALINA', description: '', image: juice2 },
  { id: 7, name: 'BUFALINA', description: '', image: juice2 },
  { id: 7, name: 'RED BULL', description: 'Fried Eggs, Streaky Bacon, Cumberland Sausage, Hash Brown, Baked Beans, Portobello Mushroom,Grilled Tomatoes, Sourdough.', image: juice2 },


  // ... add more pizza data for the remaining 11 types
];

const FromTheFridge = () => {
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
            <p>{pizza.description}</p>
            <button>£ 15.6</button>
          </div>
          <img src={pizza.image} alt={pizza.name} className="juice-image" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default FromTheFridge;
