import React, { useState, useEffect } from 'react';
import BioCard from './components/BioCard';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
import profileImg from './assets/prabhav2.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showContact, setShowContact] = useState(false);

  // 🔵 Cursor Effect
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

    animate();
  }, []);

  // 🔵 Meteor Shower Canvas Effect
  useEffect(() => {
    const canvas = document.getElementById('meteor-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', resize);

    const METEOR_COUNT = 18;
    const meteors = [];
    function randomMeteor() {
      const angle = Math.PI / 3 + Math.random() * Math.PI / 12;
      const speed = 6 + Math.random() * 4;
      const length = 80 + Math.random() * 60;
      const x = Math.random() * width;
      const y = -Math.random() * height;
      return { x, y, angle, speed, length, alpha: 0.5 + Math.random() * 0.3 };
    }
    for (let i = 0; i < METEOR_COUNT; i++) {
      meteors.push(randomMeteor());
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let m of meteors) {
        ctx.save();
        ctx.globalAlpha = m.alpha;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(
          m.x - Math.cos(m.angle) * m.length,
          m.y - Math.sin(m.angle) * m.length
        );
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }
    }

    function update() {
      for (let m of meteors) {
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        if (m.x > width + 100 || m.y > height + 100) {
          Object.assign(m, randomMeteor());
          m.x = Math.random() * width;
          m.y = -50;
        }
      }
    }

    let running = true;
    function animate() {
      if (!running) return;
      update();
      draw();
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
    };
  }, []);

  // 🔵 User Data
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

  // 🔵 Main UI
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

      {/* Meteor Canvas */}
      <canvas
        id="meteor-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

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
