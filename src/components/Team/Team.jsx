import React, { useState, useRef, useEffect } from 'react';
import './Team.css';

import ashiVermaImage from '../../../public/a.jpg';
import yashiGuptaImage from '../../../public/b.jpg';
import shubhaSinghImage from '../../../public/c.jpg';
import saumyaVermaImage from '../../../public/d.jpg';
import omVermaImage from '../../../public/e.jpg';

const teamMembers = [
  { id: 1, name: 'Ashi Verma', title: 'CEO', photo: ashiVermaImage },
  { id: 2, name: 'Yashi Gupta', title: 'COO', photo: yashiGuptaImage },
  { id: 3, name: 'Shubha Singh', title: 'Chief Product Officer', photo: shubhaSinghImage },
  { id: 4, name: 'Saumya Verma', title: 'CTO', photo: saumyaVermaImage },
  { id: 5, name: 'Om Verma', title: 'VP of Engineering', photo: omVermaImage },
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [photoTop, setPhotoTop] = useState(0);
  const containerRef = useRef(null);

  const handleMouseEnter = (member, e) => {
    setHoveredMember(member);
    const containerTop = containerRef.current.getBoundingClientRect().top;
    setPhotoTop(e.currentTarget.getBoundingClientRect().top - containerTop + e.currentTarget.offsetHeight / 2 - 80);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <div className="team-container" ref={containerRef}>
      <div className="team-list">
        <h2>Our Team</h2>
        <ul>
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className={hoveredMember && hoveredMember.id === member.id ? 'active' : ''}
              onMouseEnter={(e) => handleMouseEnter(member, e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="member-name">{member.name}</span>
              <span className="member-title">{member.title}</span>
            </li>
          ))}
        </ul>
        {hoveredMember && (
          <div className="team-photo-popup" style={{ top: `${photoTop}px` }}>
            <div className="team-photo-card">
              <img src={hoveredMember.photo} alt={hoveredMember.name} className="team-member-photo" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
