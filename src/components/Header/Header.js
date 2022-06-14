import React from 'react';
import useFirebase from '../../Hooks/FirebaseUse';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
  const {user, signOutUser} = useFirebase();
  return (

    <div className='header'>
        
        <img className='logo' src={logo} alt="" />

        <div className="nav">
            <a href="/">Home</a>
            <a href="/review">Review</a>
            { 
              user.email ? 
                <button onClick={signOutUser}>Logout</button>
                :
                <a href="/login">Login</a>
            }
        </div>

    </div>

  )
}

export default Header