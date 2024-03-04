import React from 'react';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
    </div>
  );
};

export default App;
