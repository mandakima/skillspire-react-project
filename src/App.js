import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Card from './components/cards/cards';

function App() {
  return (
  <div className="App">
    <Navbar />
    <Card />
    <Card />
    <Card />
  </div>
  
  );
}

export default App;