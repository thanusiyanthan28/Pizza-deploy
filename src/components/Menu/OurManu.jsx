import React from 'react';
import './Special.css';
import './OurManu.css';
import image1 from "../../assets/Images/Manu/manu2 (1).png";
import image2 from "../../assets/Images/Manu/manu2 (2).png";
import image3 from "../../assets/Images/Manu/manu2 (3).png";

const OurManu = () => {
  const images = [
    {
      src: image1,
      title: 'Breakfast',
      description: 'Full English Breakfast, American Breakfast, Veggie Breakfast, Vegan Breakfast, Omelette, Egg Benedict, Egg Royale.....',
    },
    {
      src: image2,
      title: 'Other Menu',
      description: 'Juices, From the fridge, Water',
    },
    {
      src: image3,
      title: 'Drinks',
      description: 'Pizza, Appetizers, Cold Starters, Hot Starters, Pasta, Risotto, Main Courses, Main Salads, Sides',
    },
  ];

  return (
    <>
     <h2 className='our-manu-title'>Pizza Da Valter Our Menu</h2>
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

export default OurManu;
