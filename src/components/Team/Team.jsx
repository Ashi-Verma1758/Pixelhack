// src/components/Team/Team.jsx
import React, { useState } from 'react';
import './Team.css';

// Sample data for your team members
const teamMembers = [
  { id: 1, name: 'Dr. Rick McCartney', title: 'CEO', photo: 'https://via.placeholder.com/200/51e0d302/FFFFFF?text=RMC' },
  { id: 2, name: 'Chris Koha', title: 'COO', photo: 'https://via.placeholder.com/200/51e0d302/FFFFFF?text=CK' },
  { id: 3, name: 'Caroline Nieto', title: 'Chief Product Officer', photo: 'https://via.placeholder.com/200/51e0d302/FFFFFF?text=CN' },
  { id: 4, name: 'Víctor Albertos', title: 'CTO', photo: 'https://via.placeholder.com/200/51e0d302/FFFFFF?text=VA' },
  { id: 5, name: 'Adrián Rubio', title: 'VP of Engineering', photo: 'https://via.placeholder.com/200/51e0d302/FFFFFF?text=AR' },
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleMouseEnter = (member) => {
    setHoveredMember(member);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <div className="team-container">
      <div className="team-list">
        <h2>Our Team</h2>
        <ul>
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className={hoveredMember && hoveredMember.id === member.id ? 'active' : ''}
              onMouseEnter={() => handleMouseEnter(member)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="member-name">{member.name}</span>
              <span className="member-title">{member.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="team-photo-area">
        {hoveredMember ? (
          <div className="team-photo-card">
            <img 
              src={hoveredMember.photo} 
              alt={hoveredMember.name} 
              className="team-member-photo" 
            />
          </div>
        ) : (
          <div className="team-photo-placeholder">
            {/* You can add a default image or a simple text here */}
            <span>Hover over a name to see the photo</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;