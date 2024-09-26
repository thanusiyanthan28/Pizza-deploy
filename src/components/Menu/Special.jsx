import React from 'react';
import './Special.css';
import image1 from "../../assets/Images/Manu/manu1 (1).png";
import image2 from "../../assets/Images/Manu/manu1 (2).png";
import image3 from "../../assets/Images/Manu/manu1 (3).png";

const Special = () => {
  const images = [
    {
      src: image1,
      title: 'Vegetarian Friendly',
      description: 'Margherita, Vegetariana, Quattro Formaggi, Funghi e Spinaci, Caprese Pizza, Pizza al Pesto, Mediterranean Pizza',
    },
    {
      src: image2,
      title: 'Vegan-Friendly',
      description: 'Vegan Margherita, Vegan Veggie Delight, Vegan Pesto Pizza, Mediterranean Vegan, Vegan Bianca, Vegan Funghi Pizza',
    },
    {
      src: image3,
      title: 'Gluten-Friendly',
      description: 'Gluten-Free Margherita, Gluten-Free Veggie Pizza, Gluten-Free Quattro Formaggi, Gluten-Free Funghi e Spinaci, Gluten-Free  ',
    },
  ];

  return (
    <>
    <h2 className='special-title'>Pizza Da Valter Special Diets</h2>
    <div className="image-gallery">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image.src} alt={image.title} className="image" />
          <div className="overlay">
            <h3 className="title">{image.title}</h3>
            <p className="description">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Special;
