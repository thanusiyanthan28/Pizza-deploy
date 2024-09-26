import React from 'react'
import "./Footer.css"
import pizzalogo from "../../assets/Images/Home/PizzaLogo.png"
import apple from '../../assets/Images/Download/apple.png'
import google from '../../assets/Images/Download/google.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer-main-log'>
               <div className="footer-logo">
                <img src={pizzalogo} alt="" />
                <h3>Pizza Da Valter</h3>
                </div> 
            </div>
            <div className='footer-contect'>
                <h4>Contact Us</h4>
                <p>Phone</p>
                <p>Email</p>
                <p>Address</p>

            </div>
            <div className='footer-quick-links'>
            <h4>Quick Links</h4>
                
                <p>About Us</p>
                <p>Menu</p>
                <p>Special Diets</p>
                <p>Service</p>
                <p>Location</p>
            </div>
            <div className='footer-ligal'>
            <h4>Legal Information</h4>
                
                <p>Privacy policy</p>
                <p>Terms of service</p>
                <p>Allergen information</p>
 
            </div>
            <div className='footer-social-media'>
            <h4>Social Media</h4>
                
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Pinterest</p>
            </div>
            <div className='footer-download'>
                <h4>Download Our App</h4>
                <div className="footer-download-icon">
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2024 Pizza da Valter. All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
