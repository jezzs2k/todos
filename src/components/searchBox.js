import React, { useState } from 'react';

import './searchBox.css';
import searchIconfrom from './img/search.svg';

const SearchBox = () => {
  const [state, setstate] = useState({
    isFocus: false,
    text: '',
  });

  const handleFocus = () => {
    setstate({ ...state, isFocus: true });
  };

  const loseFocus = () => {
    setstate({ ...state, isFocus: false });
  };

  const handleInputFocus = (e) => {
    setstate({ ...state, text: e.target.value });
  };

  console.log(state.text.slice(0, 3));

  return (
    <div className='searchBox'>
      <input
        type='text'
        name='q'
        placeholder='Type something to search ...'
        // className={`input-control ${state.text.length > 10 ? 'border' : ''}`}
        className={`input-control ${
          (state.text !== '' && state.text.slice(0, 3) !== '090') ||
          state.text.length > 10
            ? 'border'
            : ''
        }`}
        value={state.text}
        onChange={handleInputFocus}
        onMouseEnter={handleFocus}
        onMouseLeave={loseFocus}
      />
      {!state.isFocus && (
        <div className='btn'>
          <img src={searchIconfrom} className='icon' alt='search' />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
