import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './FoodGallery.css';
import food1 from "../../assets/Images/Manu/Food_gallery/food1.png"; // Breakfast image
import food2 from "../../assets/Images/Manu/Food_gallery/food2.png"; // Drink image
import food3 from "../../assets/Images/Manu/Food_gallery/food3.png"; // Pizza image
import Appetizere from './ViewAllManu/Appetizere';
import PizzaGallery from './PizzaGallery';
import BreakfastGallery from './BreakfastGallery';
import DrinkGallery from './Drink/DrinkGallery';


const FoodGallery = () => {
    const [activeButton, setActiveButton] = useState('breakfast');
    const [showAppetizere, setShowAppetizere] = useState(false);
    const [showPizzaGallery, setShowPizzaGallery] = useState(false);
    const [showBreakfastGallery, setShowBreakfastGallery] = useState(false);
    const [showDrinkGallery, setShowDrinkGallery] = useState(false); // State for DrinkGallery visibility

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
        setShowAppetizere(false);
        setShowPizzaGallery(false);
        setShowBreakfastGallery(false);
        setShowDrinkGallery(false); // Hide DrinkGallery on any button click

        if (button === 'pizza') {
            setShowPizzaGallery(true);
        } else if (button === 'breakfast') {
            setShowBreakfastGallery(true);
        } else if (button === 'drink') {
            setShowDrinkGallery(true); // Show DrinkGallery for the drink button
        }
    };

    // Handle "View All" click
    const handleViewAllClick = () => {
        setShowAppetizere(true);
        setShowPizzaGallery(false);
        setShowBreakfastGallery(false);
        setShowDrinkGallery(false); // Hide DrinkGallery if shown
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

    const mainImageAnimation = useSpring({
        opacity: 1,
        transform: 'rotate(0deg)',
        from: { opacity: 0, transform: 'rotate(-360deg)' },
        config: { tension: 170, friction: 20 },
        reset: true,
    });

    return (
        <div>
            <div className="food-gallery">
                <div className="buttons">
                    <div className='buttons-left'>
                        <h2>“Pizza Da Valter Food Menu”</h2>
                        <p>Hand-tossed, wood-fired, and bursting with flavor.
                            Whether you’re a classic Margherita fan or craving something bold,
                            our pizzas are made fresh with only the finest ingredients.</p>
                    </div>
                    <div className='inside-button'>
                        {['breakfast', 'pizza', 'drink'].map((button) => {
                            const buttonStyle = buttonAnimations[button];
                            return (
                                <div key={button} className="button-wrapper">
                                    <animated.img
                                        style={buttonStyle}
                                        src={images[button].main}
                                        alt={button}
                                        className="button-image"
                                    />
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
                    <button className='inside-button-seemore' onClick={handleViewAllClick}>
                        View All &gt;
                    </button>
                </div>

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

            {/* Conditionally render the Appetizere, PizzaGallery, BreakfastGallery, or DrinkGallery components */}
            {showAppetizere && <Appetizere />}
            {showPizzaGallery && <PizzaGallery />}
            {showBreakfastGallery && <BreakfastGallery />}
            {showDrinkGallery && <DrinkGallery />} {/* Render DrinkGallery when applicable */}
        </div>
    );
};

export default FoodGallery;
