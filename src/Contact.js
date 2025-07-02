// //src/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0ADescription:%0D%0A${formData.description}`;
    window.location.href = `mailto:satyammunot2303@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page-bg">
      <div className="contact-page glass-card fade-in">
        <div className="contact-hero">
          <span className="mail-icon">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#e52e71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="4"/><polyline points="22,6 12,13 2,6"/></svg>
          </span>
          <h2 className="gradient-text">Contact Us</h2>
          <p className="typewriter">Have a question or want to get in touch? Fill out the form below.</p>
        </div>
        <form className="contact-form slide-in" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-icon-group">
              <span className="input-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2575fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21c.5-4 12.5-4 13 0"/></svg>
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-icon-group">
              <span className="input-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2575fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"/><polyline points="22,8 12,15 2,8"/></svg>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <div className="input-icon-group">
              <span className="input-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2575fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 7h10M7 11h10M7 15h6"/></svg>
              </span>
              <textarea
                id="description"
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="submit-btn pop-in">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;