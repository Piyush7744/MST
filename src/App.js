import React from 'react';
import Home from './pages/Home/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
