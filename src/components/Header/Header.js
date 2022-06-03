import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (

    <div className='header'>
        
        <img className='logo' src={logo} alt="" />

        <div className="nav">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
        </div>

    </div>

  )
}

export default Header