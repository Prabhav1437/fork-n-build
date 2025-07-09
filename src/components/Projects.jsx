import React from 'react';
import './Projects.css';
import cartImg from '../assets/autocart.jpg';
import nebulaImg from '../assets/nebula.jpeg';
import soonImg from '../assets/cmg.jpg';

const projects = [
  {
    title: 'Auto Cart',
    image: cartImg,
    description: 'Personal Project | Hardware + Software Integration . AutoCart is an innovative automatic billing cart using RFID, Arduino, and Raspberry Pi. It scans items instantly, displays them on screen, and generates a bill on checkout — reducing queues and enhancing the retail experience. Built using Python (Tkinter), RFID modules, Arduino Uno, LCD/OLED displays, and Pi integration.',
  },
  {
    title: 'Project Nebula',
    image: nebulaImg,
    description: 'Organized by: SAST Club, NST RU , I contributed to this collaborative initiative focused on creative exploration and innovation using tech.The project was an exciting opportunity to work alongside talented peers and build something impactful. 👉 Check out the code and contributions on my GitHub',
  },
  {
    title: 'More Projects',
    image: soonImg,
    description: '🚧 More Projects Coming Soon! Im constantly working on exciting ideas and building new things.Follow me on GitHub and LinkedIn to stay updated with my latest creations!',
  },
];

function Projects() {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
