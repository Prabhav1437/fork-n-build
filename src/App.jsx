import React, { useState, useEffect } from 'react';
import BioCard from './components/BioCard';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
import profileImg from './assets/prabhav2.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showContact, setShowContact] = useState(false);

useEffect(() => {
  const cursor = document.querySelector('.cursor');
  const dot = document.querySelector('.cursor-dot');

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  const animate = () => {
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;
    requestAnimationFrame(animate);
  };

  animate(); // only once
}, []);

  const user = {
    name: 'Prabhav Jain',
    role: 'Aspiring AI/ML Developer',
    bio: 'Curious and motivated student exploring the world of coding, AI, and technology. I love creating smart solutions and learning how tech shapes the future.',
    photo: profileImg,
    email: 'jainprabhav1437@gmail.com',
    socials: [
      { name: 'GitHub', url: 'https://github.com/Prabhav1437' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prabhav-jain-32386b328/' },
      { name: 'Instagram', url: 'https://www.instagram.com/prabhav_jain__/' }
    ]
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar">
        <h1 className="title">Prabhav Jain</h1>
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <BioCard user={user} showContact={showContact} setShowContact={setShowContact} />
      <Skills />
      <Projects />

      {/* Meteor Shower */}
      <div className="meteor-container">
        {[...Array(15)].map((_, i) => (
          <div
            className="meteor"
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Custom Cursor */}
   <div className="cursor"></div>
<div className="cursor-dot"></div>
<footer className="simple-footer">
  <p>Built with caffeine & curiosity ☕🚀 — <strong>Prabhav Jain</strong></p>
</footer>


    </div>
  );
}

export default App;
