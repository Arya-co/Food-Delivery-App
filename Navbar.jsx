import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>
      <Link to='./' ><img src={assets.logo} alt="Logo" className='logo' /></Link>
      
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : "" }>menu</a>
        <a href="#add-download" onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact Us</a>
      </ul>
      
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className='dot'></div>
        </div>
        
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
