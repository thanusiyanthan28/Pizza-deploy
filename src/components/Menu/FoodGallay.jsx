import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './FoodGallery.css';
import food1 from "../../assets/Images/Manu/Food_gallery/food1.png"; // Breakfast image
import food2 from "../../assets/Images/Manu/Food_gallery/food2.png"; // Drink image
import food3 from "../../assets/Images/Manu/Food_gallery/food3.png"; // Pizza image

const FoodGallery = () => {
    const [activeButton, setActiveButton] = useState('breakfast');

    // Image mapping for each button
    const images = {
        breakfast: {
            main: food1,
            top: food2,
            bottom: food3,
        },
        pizza: {
            main: food3,
            top: food1,
            bottom: food2,
        },
        drink: {
            main: food2,
            top: food3,
            bottom: food1,
        },
    };

    // Handle button click
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    // Animation logic
    const buttonAnimations = {
        breakfast: useSpring({
            transform: activeButton === 'breakfast' ? 'scale(2)' : 'scale(1)',
            config: { tension: 170, friction: 20 },
        }),
        pizza: useSpring({
            transform: activeButton === 'pizza' ? 'scale(2)' : 'scale(1)',
            config: { tension: 170, friction: 20 },
        }),
        drink: useSpring({
            transform: activeButton === 'drink' ? 'scale(2)' : 'scale(1)',
            config: { tension: 170, friction: 20 },
        }),
    };

    // Right-side images rotation animation
    const mainImageAnimation = useSpring({
        opacity: 1,
        transform: 'rotate(0deg)',
        from: { opacity: 0, transform: 'rotate(-360deg)' },
        config: { tension: 170, friction: 20 },
        reset: true,
    });

    return (
        <div className="food-gallery">

            {/* Left Side - Buttons with Images */}
            <div className="buttons">
                <div className='buttons-left'>
                    <h2>“Pizza Da Valter Food Menu”</h2>
                    <p>Hand-tossed, wood-fired, and bursting with flavor.
                        Whether you’re a classic Margherita fan or craving something bold,
                        our pizzas are made fresh with only the finest ingredients.</p>
                </div>
                <div className='inside-button'>
                    {/* <h2>“Pizza Da Valter Food Menu”</h2> */}

                    {['breakfast', 'pizza', 'drink'].map((button) => {
                        const buttonStyle = buttonAnimations[button]; // Apply the correct animation style
                        const imageStyle = buttonStyle; // Reuse the same style for the image

                        return (
                            <div key={button} className="button-wrapper">


                                {/* Corresponding image below button */}
                                <animated.img
                                    style={imageStyle}
                                    src={images[button].main}
                                    alt={button}
                                    className="button-image"
                                />
                                {/* Button */}
                                <animated.button
                                    style={buttonStyle}
                                    className={`food-button ${activeButton === button ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(button)}
                                >
                                    {button.charAt(0).toUpperCase() + button.slice(1)}
                                </animated.button>
                            </div>
                        );
                    })}
                </div>
                <button className='inside-button-seemore'>View All &gt;</button>
            </div>

            {/* Right Side - Main and rotating images */}
            <div className="right-side-images">
                <animated.img
                    style={mainImageAnimation}
                    src={images[activeButton].top}
                    alt={`${activeButton} top`}
                    className="top-image"
                />
                <animated.img
                    style={mainImageAnimation}
                    src={images[activeButton].main}
                    alt={`${activeButton} main`}
                    className="main-image"
                />
                <animated.img
                    style={mainImageAnimation}
                    src={images[activeButton].bottom}
                    alt={`${activeButton} bottom`}
                    className="bottom-image"
                />
            </div>
        </div>
    );
};

export default FoodGallery;
