// //src/Mission.js
import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <div className="mission-page">
      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          We’re here to build the smartest tutor you’ll ever have. One that knows your gaps, your strengths, your style - and helps you succeed. At Study Pal, our mission is simple, but ambitious: 
          <strong> To democratize elite-level learning using advanced AI that understands, adapts, and grows with every student.</strong>
        </p>
      </div>
      
      <div className="mission-vision">
        <h3>We envision a world where:</h3>
        <ul>
          <li>Students don’t waste hours searching for the “right” content</li>
          <li>Every learner receives expert-level guidance at a fraction of the cost</li>
          <li>Feedback is instant, tutoring is personalized, and progress is measurable</li>
        </ul>
      </div>

      <div className="mission-delivery">
        <h3>How We Deliver on That Mission</h3>
        <div className="delivery-points">
            <div className="point">
                <h4>Agentic AI</h4>
                <p>Modular AI agents working as a symphony: generating textbooks, explaining answers, tracking progress, and recommending the right next steps - all dynamically.</p>
            </div>
            <div className="point">
                <h4>Psychologically Tuned Learning Paths</h4>
                <p>Built with student psychologists, our AI understands more than just what students get wrong - it understands why.</p>
            </div>
            <div className="point">
                <h4>Scalable Access to High-Quality Content</h4>
                <p>Auto-generated, context-aware, exam-specific resources that feel like they were written just for you: because they were.</p>
            </div>
            <div className="point">
                <h4>Human-like Interaction</h4>
                <p>With AI avatars, voice interfaces, and natural language tutoring, we’re bringing warmth and empathy back to digital learning.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;