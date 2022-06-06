import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (

    <div className='header'>
        
        <img className='logo' src={logo} alt="" />

        <div className="nav">
            <a href="/">Home</a>
            <a href="/review">Review</a>
        </div>

    </div>

  )
}

export default Header