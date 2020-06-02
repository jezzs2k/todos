import React, { Component } from 'react';

import bellImg from './img/bell.svg';
import './notifi.css';

class Notification extends Component {
  render(props) {
    const { hasNotifi } = this.props;
    console.log(hasNotifi);
    return (
      <div className='notification'>
        {hasNotifi && <div className='dot'></div>}
        <img src={bellImg} alt='bell' style={{ maxWidth: '40px' }} />
      </div>
    );
  }
}

export default Notification;
