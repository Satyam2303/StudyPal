// //src/Signup.js
import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-page">
      <h2>SignUp For Our Beta Trial</h2>
      <p>Fill out the form below to get early access to MentrAI and help shape the future of learning.</p>
      <div className="signup-form-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScf4jN2UgsjMcs0_49xQzv1kWQOVI-ogrE4w0tVsEH1PQ8s9A/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Beta Signup Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Signup;