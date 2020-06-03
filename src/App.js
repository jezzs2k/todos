import React, { useState } from 'react';
import './App.css';

import Modal from './components/Modal';

const App = () => {
  const [state, setstate] = useState({
    isClick: false,
  });

  const handleClickModal = () => {
    setstate({ isClick: true });
  };

  const closeModal = () => {
    setstate({ isClick: false });
  };

  return (
    <div className='App'>
      {state.isClick && (
        <Modal closeModal={closeModal}>
          Hieu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          adminim veniam, quis nostrud exercitation ullamco laboris nisi
          utaliquip ex ea commodo consequat. Duis aute irure dolor in
        </Modal>
      )}
      <button onClick={handleClickModal}>Open Modal</button>
    </div>
  );
};

export default App;
