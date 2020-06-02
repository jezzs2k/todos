import React, { useState } from 'react';

import './searchBox.css';
import searchIconfrom from './img/search.svg';

const SearchBox = () => {
  const [state, setstate] = useState({
    isFocus: false,
    text: '',
  });

  const isFocus = () => {
    setstate({ ...state, isFocus: true });
  };

  const loseFocus = () => {
    setstate({ ...state, isFocus: false });
  };

  const value = (e) => {
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
          state.text.slice(0, 3) !== '090' || state.text.length > 10
            ? 'border'
            : ''
        }`}
        value={state.text}
        onChange={value}
        onMouseEnter={isFocus}
        onMouseLeave={loseFocus}
      />
      {!state.isFocus && (
        <div className='btn'>
          <img
            src={searchIconfrom}
            alt='search'
            style={{ maxWidth: '30px', width: '100%' }}
            className='icon'
          />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
