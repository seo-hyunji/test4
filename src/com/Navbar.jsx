import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/guestBook">Guest Book</Link>
      <Link to="/scrollText">Scroll Text</Link>
    </nav>
  )
}

export default Navbar