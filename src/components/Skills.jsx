import React, { useState } from 'react';
import './Skills.css';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaGuitar } from 'react-icons/fa';
import { SiCplusplus, SiArduino, SiRaspberrypi } from 'react-icons/si';
import clickSound from '../assets/glass.mp3';

const skills = [
  { name: 'Python', icon: <FaPython size={40} />, description: 'Learned basics to intermediate, then moved onto Tkinter , Pillow etc.' },
  { name: 'HTML5', icon: <FaHtml5 size={40} />, description: 'Fully comfortable with semantic HTML and page structure.' },
  { name: 'CSS3', icon: <FaCss3Alt size={40} />, description: 'Know flexbox, grid, animations, and responsive design.' },
  { name: 'JavaScript', icon: <FaJsSquare size={40} />, description: 'Learnt up to array methods, DOM manipulation, and ES6 features.' },
  { name: 'React', icon: <FaReact size={40} />, description: 'Currently learning components, hooks, props, and state management.' },
  { name: 'C++', icon: <SiCplusplus size={40} />, description: 'Proficient in C++ with DSA, STL, and multimedia programming; completed all topics up to sound/video generation, currently revising.' },
  { name: 'Java', icon: <FaJava size={40} />, description: 'Covered Java as per ISC Class 12 curriculum, with strong understanding of OOP concepts and completed DSA topics including Arrays, Strings, Linked Lists, and Binary Search Trees.' },
  { name: 'Arduino', icon: <SiArduino size={40} />, description: 'Able to write sketches, use sensors, and run simple embedded programs.' },
  { name: 'Raspberry Pi', icon: <SiRaspberrypi size={40} />, description: 'Setup, GPIO usage, Python scripting and project integration.' },
  { name: 'Guitar', icon: <FaGuitar size={40} />, description: 'Comfortable with chords, rhythm patterns, and basic leads.' }
];

function Skills() {
  const [selected, setSelected] = useState(null);
  const audio = new Audio(clickSound);

  const handleClick = (skill) => {
    audio.currentTime = 0;
    audio.play();
    setSelected(skill);
  };

  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-icon animated-skill"
            onClick={() => handleClick(skill)}
          >
            {skill.icon}
          </div>
        ))}
      </div>
      {selected && (
        <div className="skill-popup" onClick={() => setSelected(null)}>
          <div className="popup-content">
            <div className="popup-icon">{selected.icon}</div>
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;