// src/components/ContactForm/ContactForm.jsx
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Form submitted! (This is a placeholder action)');
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        <h1>STARTING A NEW JOURNEY</h1>
        <p>Share your idea, and we'll do our best to navigate you through the development process</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="project-details">Project</label>
            <textarea 
              id="project-details" 
              name="project-details" 
              placeholder="Tell us about your project, timeline and budget..." 
              rows="5"
            ></textarea>
          </div>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;