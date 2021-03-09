import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About/About';

function Body() {
  return (
    <div className="body">
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Body;
