// //src/app.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Mission from './Mission';
import Contact from './Contact';
import Signup from './Signup'; // Import the new Signup component

function App() {
  // The useState for showForm has been removed

  return (
    <div className="App">
      {/* The onSignupClick prop is no longer needed */}
      <Navbar />

      {/* The pop-up container block has been removed */}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} /> {/* Add the new route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;