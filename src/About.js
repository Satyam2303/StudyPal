// //src/About.js
import React from 'react';
import './About.css';
// **ACTION**: Make sure you have these images in src/assets/
import satyamImg from './assets/satyam.jpg';
import dhruvImg from './assets/dhruv.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          We’re not just developers. We’re former students who’ve battled the chaos of competitive exam prep ourselves. From IIT-JEE to BITSAT, from GRE to Olympiads, we’ve walked every step of the high-stakes, high-pressure journey that millions of students face every year. And we weren’t satisfied with the options we had. Coaching centers felt industrial and impersonal. Private tutoring was expensive and hit-or-miss. Online platforms were scattered, lacking structure, or built around generic summaries that didn’t adapt to our needs. We knew there had to be a better way. So we decided to build it.
        </p>
      </div>

      <div className="about-section">
        <h2>Why We Built Study Pal</h2>
        <p>Our vision emerged not in a boardroom, but in dorm rooms, libraries, late-night coding sprints, and stressful exam seasons. We have LIVED THE PROBLEM.</p>
        <ul className="why-list">
          <li>No one else is combining student psychology with real AI intelligence</li>
          <li>Ed-tech still treats students like generic “users” - we treat them like individual learners</li>
          <li>Personalization should be the norm, not a premium feature</li>
          <li>Great education shouldn’t depend on geography, money, or luck</li>
        </ul>
      </div>

      <div className="founders-section">
        <h2>The Founders</h2>
        <div className="founders-container">
          <div className="founder-card">
            <img src={satyamImg} alt="Satyam Munot" />
            <h3>Satyam Munot</h3>
            <p className="degree">M.S. in Computer Science, Stevens Institute of Technology</p>
            <p>An experienced developer with a passion for scalable educational solutions. He previously led development efforts in startups and has also successfully run a profitable business. Having aced IIT-JEE, BITSAT, GRE, and multiple Olympiads, he knows exactly what’s broken in traditional prep systems - and how to fix it.</p>
          </div>
          <div className="founder-card">
            <img src={dhruvImg} alt="Dhruv Dixit" />
            <h3>Dhruv Dixit</h3>
            <p className="degree">M.S. in Artificial Intelligence, Stevens Institute of Technology</p>
            <p>AI researcher and engineer with deep expertise in generative models and reinforcement learning. With multiple publications, a patent, and real-world startup experience, Dhruv leads the development of our proprietary AI engine. He's building the brains behind the next generation of education tools - ones that can truly adapt to every student.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;