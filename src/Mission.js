// //src/Mission.js
import React from 'react';
import './Mission.css';

const icons = [
  '📚', // Agentic AI
  '🧠', // Psychologically Tuned
  '🌐', // Scalable Access
  '🤖', // Human-like Interaction
];

const Mission = () => {
  return (
    <div className="mission-page">
      {/* Hero Section */}
      <section className="mission-hero fade-in">
        <h1 className="gradient-text">Our Mission</h1>
        <p className="hero-subtext typewriter">
          Democratizing elite-level learning with AI that understands, adapts, and grows with every student.
        </p>
      </section>

      {/* Mission Statement */}
      <div className="mission-statement slide-in">
        <h2>Why We Exist</h2>
        <p>
          We're here to build the smartest tutor you'll ever have. One that knows your gaps, your strengths, your style – and helps you succeed. <br/>
          <strong>StudyPal is your partner in learning, every step of the way.</strong>
        </p>
      </div>
      
      {/* Vision Section */}
      <div className="mission-vision fade-in">
        <h3>We envision a world where:</h3>
        <ul>
          <li>Students don't waste hours searching for the "right" content</li>
          <li>Every learner receives expert-level guidance at a fraction of the cost</li>
          <li>Feedback is instant, tutoring is personalized, and progress is measurable</li>
        </ul>
      </div>

      {/* Delivery Section */}
      <div className="mission-delivery">
        <h3 className="gradient-text">How We Deliver</h3>
        <div className="delivery-points">
            <div className="point pop-in">
                <span className="point-icon">{icons[0]}</span>
                <h4>Agentic AI</h4>
                <p>Modular AI agents working as a symphony: generating textbooks, explaining answers, tracking progress, and recommending the right next steps – all dynamically.</p>
            </div>
            <div className="point pop-in">
                <span className="point-icon">{icons[1]}</span>
                <h4>Psychologically Tuned Learning Paths</h4>
                <p>Built with student psychologists, our AI understands more than just what students get wrong – it understands why.</p>
            </div>
            <div className="point pop-in">
                <span className="point-icon">{icons[2]}</span>
                <h4>Scalable Access to High-Quality Content</h4>
                <p>Auto-generated, context-aware, exam-specific resources that feel like they were written just for you: because they were.</p>
            </div>
            <div className="point pop-in">
                <span className="point-icon">{icons[3]}</span>
                <h4>Human-like Interaction</h4>
                <p>With AI avatars, voice interfaces, and natural language tutoring, we're bringing warmth and empathy back to digital learning.</p>
            </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mission-cta fade-in">
        <h2>Ready to experience the future of learning?</h2>
        <a href="/signup" className="cta-btn">Join StudyPal Now</a>
      </div>
    </div>
  );
};

export default Mission;