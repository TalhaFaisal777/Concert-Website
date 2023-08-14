import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='container'>

      <h2 className='logo'>Concert<span className='rx'>Rx</span></h2>
        <ul className='nav'>
          <Link to="/" className='bar1 bar'>Product</Link>
          <Link to="/" className='bar2 bar'>Our Story</Link>
          <Link to="/pricing" className='bar3 bar'>Pricing</Link>
        </ul>
        <button className='btn1 '>Login</button>
        <button className='btn2 '> Get Started </button>

      </div>
    
    </>
  )
}

export default Navbar;