import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About/About';
import ProjectsPage from './Projects/ProjectsPage';
import SkillsPage from './Skills/SkillsPage';

function Body() {
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </div>
  );
}

export default Body;
