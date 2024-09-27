import React from 'react';
import './Service.css';
import image1 from "../../assets/Images/Service/service-1 (1).png";
import image2 from "../../assets/Images/Service/service-1 (2).png";
import image3 from "../../assets/Images/Service/service-1 (3).png";
import background from "../../assets/Images/Service/service-back.png"

const Service = () => {
  const images = [
    {
      src: image1,
      title: 'Book a Table',
      qusition1: '1. Slot Time :',
      qusition2: '2. Required information :',
      qusition3: '3. Start Time :',
      qusition4: '4. Restrictions :',
      qusition5: '5. Availability :',
      qusition6: '6. Capacity :',
      anwser1:'Each booking slot lasts 75 minutes.',
      anwser2:'Date, Time, Number of People, Name, Phone Number.',
      anwser3:'Bookings begin at 5:15 p.m.',
      anwser4:'Select only from available time slots (no custom times).',
      anwser5:'Bookings can be made any time or day, availability.',
      anwser6:'56 People (2 people: 20 tables , 4 people: 6 tables)',
      button_text:'Book Now'
    },
    {
      src: image2,
      title: 'Pick-Up',
      qusition1: '1. Discount :',
      qusition2: '2. Pizza Size :',
      qusition3: '3. Payment Option :',
  
      anwser1:'10% OFF on all Pick-Up orders.',
      anwser2:'12-inch Pizzas (one size only).',
      anwser3:'Pay at the branch when collecting your order. Review order details in the app before payment.',
       button_text:'Pick Up'
    },
    {
      src: image3,
      title: 'Delivery',
      qusition1: '1. Delivery Range :',
      qusition2: '2. Delivery Time :',
      qusition3: 'Note :',

      anwser1:'We deliver within 1mile of the restaurant.',
      anwser2:'We guarantee delivery within 30 minutes for orders within the delivery range..',
      anwser3:'Delivery is not available beyond this range.',
       button_text:'Delivery'
    },
  ];

  return (
    < >
    <h2 className='service-special-title'>Pizza Da Valter Features & Services</h2>
    <div className="service-image-gallery">
      {images.map((image, index) => (
        <div className="service-image-container" key={index}>
          <img src={image.src} alt={image.title} className="service-image" />
          <div className="service-overlay">
            <h3 className="service-title">{image.title}</h3>
            <div className="qustion-answer">
            <div className="qustion1">
            <p className="service-description">{image.qusition1}</p>
            <p className="service-description service-answer">{image.anwser1}</p>
            </div>
            <div className="qustion1">
            <p className="service-description">{image.qusition2}</p>
            <p className="service-description service-answer">{image.anwser2}</p>
            </div>
            <div className="qustion1">  
            <p className="service-description">{image.qusition3}</p>
            <p className="service-description service-answer">{image.anwser3}</p>
            </div>
            <div className="qustion1">
            <p className="service-description">{image.qusition4}</p>
            <p className="service-description service-answer">{image.anwser4}</p>
            </div>
            <div className="qustion1">
            <p className="service-description service-answer">{image.qusition5}</p>
            <p className="service-description service-answer">{image.anwser5}</p>
            </div>
            <div className="qustion1">
            <p className="service-description">{image.qusition6}</p>
            <p className="service-description service-answer">{image.anwser6}</p>
            </div>
            </div>
    

            <button className="service-description service-button" >{image.button_text}</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Service;
