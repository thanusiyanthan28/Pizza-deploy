import React, { useState } from 'react';
import "./Location.css";

const Location = () => {
    const [address, setAddress] = useState('');
    const [distance, setDistance] = useState(null);
    const pizzaShopCoordinates = { lat: 51.4458024, lng: -0.1684309 }; // Coordinates of Pizza Da Valter

    const handleSearch = () => {
        // Function to calculate the distance using Haversine formula or Google Maps API
        // Here we will simulate it, but you should implement the actual distance calculation
        if (address) {
            // Simulated distance calculation
            const simulatedDistance = Math.random() * 10; // Simulate a distance in km
            setDistance(simulatedDistance.toFixed(2));
        }
    };

    return (
        <div className='location'>
            <h2 className='location-title'>Pizza Da Valter Location</h2>
            <div className='location-shop'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6551965864096!2d-0.1684309!3d51.4458024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605e99236c46b%3A0x808830fc11ed1d7f!2sPizza%20Da%20Valter!5e0!3m2!1sen!2suk!4v1695825923910!5m2!1sen!2suk"
                    width="100%"
                    height="350px"
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </div>

            <div 
                className='location-search' 
                // onMouseEnter={() => setShowSearch(true)} 
                // onMouseLeave={() => setShowSearch(false)}
            >
                <p><span>Address :</span>7 Bellevue Rd, London SW17 7EG, United Kingdom.</p>
            </div>
        </div>
    );
};

export default Location;
