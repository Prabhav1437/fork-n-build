import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './BioCard.css';

function BioCard({ user, showContact, setShowContact }) {
  return (
    <div className="bio-card">
      <img src={user.photo} alt="Profile" className="profile-pic" />
      <h2 className="user-name">{user.name}</h2>
      <p className="user-role">{user.role}</p>
      <p className="user-bio">{user.bio}</p>

      <button className="contact-btn" onClick={() => setShowContact(!showContact)}>
        Contact
      </button>

      <div className={`contact-info ${showContact ? 'show' : ''}`}>
        <p>{user.email}</p>
        <div className="social-links">
          <a href={user.socials[0].url} target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
          <a href={user.socials[1].url} target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
          <a href={user.socials[2].url} target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
        </div>
      </div>
    </div>
  );
}

export default BioCard;
