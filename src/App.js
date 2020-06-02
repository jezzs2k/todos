import React from 'react';
import './App.css';
import Notification from './components/Notification';

function App() {
  return (
    <div className='App'>
      <Notification hasNotifi={false} />
    </div>
  );
}

export default App;
