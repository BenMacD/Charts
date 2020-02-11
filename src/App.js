import React from 'react';
import logo from './logo.svg';
import './App.css';
import Donut from './Donuts/Donut.js';
import MultiDonut from './Donuts/MultiDonut.js';

function App() {
  return (
    <div className="App">
      <Donut></Donut>
      <MultiDonut></MultiDonut>
  
    </div>
  );
}

export default App;
