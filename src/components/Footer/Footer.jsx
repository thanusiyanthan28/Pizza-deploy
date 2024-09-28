import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
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
                <p>Phone : +44 20 8355 7032</p>
                <p>Email : info@pizzadavalter.co.uk</p>
                <p>Address : 7 Bellevue Road, London, SW17 7EG</p>

            </div>
            <div className='footer-quick-links'>
            <h4>Quick Links</h4>
                
            <a href='/about'><p>About Us</p></a> 
             <Link to="/main-manu"><p>Menu</p></Link>   
             <Link to="/special"><p>Special Diets</p></Link> 
             <Link to="/service"><p>Service</p></Link> 
             <Link to="/location"> <p>Location</p></Link>
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
