import React, { useState } from 'react';
import './DrinkGallery.css'; // Import your CSS for styling
import Juice from './Juice';
import FromTheFridge from './FromTheFridge';
import Water from './Water';

const DrinkGallery = () => {
    const [activeButton, setActiveButton] = useState('juice'); // Default to Juice

    // Handle button click
    const handleButtonClick = (button) => {
        setActiveButton(button); // Set active button state
    };

    return (
        <div>
            <h2 className='drink-gallery-title'>Drinks</h2>
            {/* Button Group */}
            <div className="button-group">
                {['juice', 'fromTheFridge', 'water'].map((button) => (
                    <button
                        key={button}
                        className={`button ${activeButton === button ? 'active' : 'inactive'}`}
                        onClick={() => handleButtonClick(button)}
                    >
                        {/* Correctly format the button label */}
                        {button.charAt(0).toUpperCase() + button.slice(1).replace(/([A-Z])/g, ' ')}
                    </button>
                ))}
            </div>

            {/* Conditionally Render Components */}
            {activeButton === 'juice' && <div><Juice /></div>}
            {activeButton === 'fromTheFridge' && <FromTheFridge />}
            {activeButton === 'water' && <Water />}
        </div>
    );
};

export default DrinkGallery;
