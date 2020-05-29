import React from 'react';
import './App.css';

function App() {
  const todos = [
    'goToBed',
    'have breakfast',
    'goToSchool',
    'learn codersX',
    'learn vocabulary',
  ];
  return (
    <div className='App'>
      <ul>
        {todos &&
          todos.map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
