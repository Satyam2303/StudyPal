// src/Home.js
import React from "react";
import Slider from "react-slick";
import "./Home.css";

// Import slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// First Slider Images
import slider1_img1 from './assets/dashboard.png';
import slider1_img2 from './assets/Detailed_Analysis_Performance.png';
import slider1_img3 from './assets/Popup_chatbot.png';

// Second Slider Images
import slider2_img1 from './assets/Timed_Test.png';
import slider2_img2 from './assets/Improvment_questions.png';
import slider2_img3 from './assets/Performanc_tracking .png';
import slider2_img4 from './assets/Smart_Recomandation.png';

// Third Slider Images
import slider3_img1 from './assets/Texbook_Generator.png';
import slider3_img2 from './assets/Self_generated_textbook.png';
import slider3_img3 from './assets/Material_section.png';

// Fourth Slider Images
import slider4_img1 from './assets/AI_teacher.png';
import slider4_img2 from './assets/Schedular.png';

// Custom Arrow for Slider
const CustomArrow = (props) => {
  const { className, style, onClick, direction } = props;
  return (
    <div
      className={className + " custom-arrow" + (direction === 'left' ? ' left-arrow' : ' right-arrow')}
      style={{ ...style }}
      onClick={onClick}
    >
      {direction === 'left' ? (
        <span>&#8592;</span>
      ) : (
        <span>&#8594;</span>
      )}
    </div>
  );
};

const Home = () => {
  // Settings for sliders with different numbers of images
  const settings_3_slides = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings_4_slides = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings_2_slides = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Image arrays for each slider
  const slider1_images = [slider1_img1, slider1_img2, slider1_img3];
  const slider2_images = [slider2_img1, slider2_img2, slider2_img3, slider2_img4];
  const slider3_images = [slider3_img1, slider3_img2, slider3_img3];
  const slider4_images = [slider4_img1, slider4_img2];

  // Badge arrays for each slider
  const slider1_badges = ["Dashboard", "Detailed Analysis", "Popup Chatbot"];
  const slider2_badges = ["Timed Test", "Improvement Questions", "Performance Tracking", "Smart Recommendation"];
  const slider3_badges = ["Textbook Generator", "Self Generated Textbook", "Material Section"];
  const slider4_badges = ["AI Teacher", "Scheduler"];

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to MentrAI</h1>
        <p>
          The smartest tutor you'll ever have. One that knows your gaps, your
          strengths, your style - and helps you succeed.
        </p>
      </header>

      <section className="home-intro">
        <h2>Your Personal AI-Powered Study Partner</h2>
        <p>
          MentrAI leverages cutting-edge AI to create a truly personalized
          learning experience. Stop wasting time on generic content and get the
          expert-level guidance you need, exactly when you need it.
        </p>
      </section>

      {/* --- Sliders Section --- */}
      <section className="sliders-section fancy-slider-bg">
        {/* Slider 1 */}
        <div className="slider-container">
          <h3>Core Dashboard Features</h3>
          <p className="slider-description">Essential tools for monitoring progress, analyzing performance, and getting instant AI assistance through our intelligent chatbot.</p>
          <Slider {...settings_3_slides}>
            {slider1_images.map((img, index) => (
              <div key={index} className="slide fancy-slide">
                <div className="slide-overlay"></div>
                <img src={img} alt={`Slide ${index + 1}`} className="slide-image fancy-image" />
                <span className="slide-badge">{slider1_badges[index]}</span>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slider 2 */}
        <div className="slider-container">
          <h3>Advanced Learning Tools</h3>
          <p className="slider-description">Comprehensive testing, personalized question generation, progress tracking, and AI-powered recommendations for optimal learning.</p>
          <Slider {...settings_4_slides}>
            {slider2_images.map((img, index) => (
              <div key={index} className="slide fancy-slide">
                <div className="slide-overlay"></div>
                <img src={img} alt={`Slide ${index + 1}`} className="slide-image fancy-image" />
                <span className="slide-badge">{slider2_badges[index]}</span>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slider 3 */}
        <div className="slider-container">
          <h3>Content Generation & Materials</h3>
          <p className="slider-description">AI-generated textbooks, self-created study materials, and organized content sections tailored to your learning needs.</p>
          <Slider {...settings_3_slides}>
            {slider3_images.map((img, index) => (
              <div key={index} className="slide fancy-slide">
                <div className="slide-overlay"></div>
                <img src={img} alt={`Slide ${index + 1}`} className="slide-image fancy-image" />
                <span className="slide-badge">{slider3_badges[index]}</span>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slider 4 */}
        <div className="slider-container">
          <h3>AI Teaching & Scheduling</h3>
          <p className="slider-description">Personalized AI tutoring sessions and intelligent study scheduling to maximize your learning efficiency.</p>
          <Slider {...settings_2_slides}>
            {slider4_images.map((img, index) => (
              <div key={index} className="slide fancy-slide">
                <div className="slide-overlay"></div>
                <img src={img} alt={`Slide ${index + 1}`} className="slide-image fancy-image" />
                <span className="slide-badge">{slider4_badges[index]}</span>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;