import React from 'react'
import "./Footer.css"
import { assets } from "../../assets/assets"; 



const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
        <img src={assets.logo} alt="" />
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla convallis egestas rhoncus.
    </p>
    <div className='social-icons'>
        <img src={assets.facebook_icon} alt=""/>
        <img src={assets.twitter_icon} alt=""/>
        <img src={assets.linkedin_icon} alt=""/>
    </div>

        </div>
        <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>

        </div>
        <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>8799834779</li>
            <li>arya@tomato.com</li>
        </ul>

        </div>
    </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025.All rights are reserved</p>
    </div>
  )
}

export default Footer
