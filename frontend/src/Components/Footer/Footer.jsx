import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'


 const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img className='a' src={logo} alt="" />
            <p>Parfemrie Barbouche</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
           <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
        <div className="footer-icons-container">
        <Link to={"https://www.instagram.com/abdelhak_barbouch/?hl=fr"}> <img src={instagram_icon} alt="" /></Link>
        </div>
        <div className="footer-icons-container">
          <Link to={"https://www.facebook.com/profile.php?id=100063512050875"}> <img className="f"src={pintester_icon} alt="" /></Link> 
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
     </div>
     <div className="footer-copyright">
        <hr />
        <p>Copyright @ by Abdelhak Barbouche -2024 - All Right Reserved .</p>
     </div>
    </div>
  )
}


export default Footer