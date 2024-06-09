// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.scss';
import navLogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navLogo} className='nav-logo' alt="Nav Logo" />
        <img src={navProfile} className='nav-profile' alt="Profile" />
    </div>
  )
}

export default Navbar;