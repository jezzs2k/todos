import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './modal.css';

const Modal = (props) => {
  const { closeModal, text } = props;
  return (
    <div className='modal'>
      <div className='content'>
        <h2 className='title'>This is a modal</h2>
        <div className='close' onClick={closeModal}>
          <img
            src='https://cdn.glitch.com/93da3caa-db24-4c0b-ba19-61b6378f8fc5%2Fclose-cross.svg?v=1591154055122'
            className='close-icon'
            alt='close'
          />
        </div>
        <p className='text'>{text}</p>
        <div className='action'>
          <button className='btn accept' onClick={closeModal}>
            Accept
          </button>
          <button className='btn decline' onClick={closeModal}>
            Decline
          </button>
        </div>
      </div>
      <div className='bg'></div>
    </div>
  );
};

Modal.protoTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
