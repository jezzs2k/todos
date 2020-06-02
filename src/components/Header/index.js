import React from 'react';
import './header.css';
import logo from './images/download.png';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='left'>
          <i class='fa fa-arrow-left'></i>
          <h2>Go Back</h2>
        </div>
        <div className='center'>
          <a href='/'>
            <img src={logo} style={{ maxWidth: '200px' }} alt='Logo' />
          </a>
        </div>
        <div className='right'>
          <a href='/signup'>
            <button className='btn'>Sign Up</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
