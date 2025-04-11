import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <span className='navbar-brand' href='#'>
        Navbar
      </span>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-item nav-link' to='/about'>About</Link>
          <Link className='nav-item nav-link' to='/contact'>Contact Us</Link>
          <Link className='nav-item nav-link' to='/user/Ned Navigator'>User</Link>
          <Link className='nav-item nav-link' to='/login'>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
