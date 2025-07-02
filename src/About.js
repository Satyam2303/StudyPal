// //src/About.js
import React from 'react';
import './About.css';
// **ACTION**: Make sure you have these images in src/assets/
import satyamImg from './assets/satyam.jpg';
import dhruvImg from './assets/dhruv.jpg';

const founders = [
  {
    name: 'Satyam Munot',
    img: satyamImg,
    degree: 'M.S. in Computer Science, Stevens Institute of Technology',
    desc: `An experienced developer with a passion for scalable educational solutions. He previously led development efforts in startups and has also successfully run a profitable business. Having aced IIT-JEE, BITSAT, GRE, and multiple Olympiads, he knows exactly what's broken in traditional prep systems - and how to fix it.`,
    linkedin: 'https://www.linkedin.com/in/satyam-munot-a64175221/',
    // github: 'https://github.com/Satyam2303',
  },
  {
    name: 'Dhruv Dixit',
    img: dhruvImg,
    degree: 'M.S. in Artificial Intelligence, Stevens Institute of Technology',
    desc: `AI researcher and engineer with deep expertise in generative models and reinforcement learning. With multiple publications, a patent, and real-world startup experience, Dhruv leads the development of our proprietary AI engine. He's building the brains behind the next generation of education tools - ones that can truly adapt to every student.`,
    linkedin: 'https://www.linkedin.com/in/dhruvdixit7/',
    // github: 'https://github.com/dhruvdixit',
  },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero fade-in">
        <h1 className="gradient-text">About StudyPal</h1>
        <p className="hero-subtext typewriter">
          Built by students, for students. <br />
          <span className="highlight">Personalized. Powerful. Human.</span>
        </p>
      </section>

      <div className="about-section slide-in">
        <h2>Who We Are</h2>
        <p>
          We're not just developers. We're former students who've battled the chaos of competitive exam prep ourselves. From IIT-JEE to BITSAT, from GRE to Olympiads, we've walked every step of the high-stakes, high-pressure journey that millions of students face every year. And we weren't satisfied with the options we had. Coaching centers felt industrial and impersonal. Private tutoring was expensive and hit-or-miss. Online platforms were scattered, lacking structure, or built around generic summaries that didn't adapt to our needs. We knew there had to be a better way. So we decided to build it.
        </p>
      </div>

      <div className="about-section fade-in">
        <h2>Why We Built Study Pal</h2>
        <p>Our vision emerged not in a boardroom, but in dorm rooms, libraries, late-night coding sprints, and stressful exam seasons. We have LIVED THE PROBLEM.</p>
        <ul className="why-list">
          <li>No one else is combining student psychology with real AI intelligence</li>
          <li>Ed-tech still treats students like generic "users" - we treat them like individual learners</li>
          <li>Personalization should be the norm, not a premium feature</li>
          <li>Great education shouldn't depend on geography, money, or luck</li>
        </ul>
      </div>

      <div className="founders-section">
        <h2 className="gradient-text">The Founders</h2>
        <div className="founders-container">
          {founders.map((f, i) => (
            <div className="founder-card pop-in" key={f.name}>
              <img src={f.img} alt={f.name} />
              <h3>{f.name}</h3>
              <p className="degree">{f.degree}</p>
              <p>{f.desc}</p>
              <div className="founder-socials">
                <a href={f.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0077b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 8a6 6 0 0 1 6 6v5"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8"/></svg>
                </a>
                {/* <a href={f.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta fade-in">
        <h2>Want to join our journey?</h2>
        <a href="#" className="cta-btn">Contact Us</a>
      </div>
    </div>
  );
};

export default About;