// //src/Home.js
import React from 'react';
import './Home.css';
// **ACTION**: Make sure you have these images in src/assets/
import dummyImg1 from './assets/dummy1.jpeg';
import dummyImg2 from './assets/dummy2.png';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to StudyPal</h1>
        <p>The smartest tutor you’ll ever have. One that knows your gaps, your strengths, your style - and helps you succeed.</p>
      </header>
      <section className="home-intro">
        <h2>Your Personal AI-Powered Study Partner</h2>
        <p>
          StudyPal leverages cutting-edge AI to create a truly personalized learning experience.
          Stop wasting time on generic content and get the expert-level guidance you need, exactly when you need it.
        </p>
        <div className="home-images">
          <img src={dummyImg1} alt="AI Learning" />
          <img src={dummyImg2} alt="Personalized Path" />
        </div>
      </section>
    </div>
  );
};

export default Home;