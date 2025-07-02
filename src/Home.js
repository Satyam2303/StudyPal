// src/Home.js
import React from "react";
import Slider from "react-slick";
import "./Home.css";

// Import slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ACTION: Add your 8 slider images to the 'src/assets' folder
// and update the filenames here.
import slider1_img1 from './assets/dashboard.png';
import slider1_img2 from './assets/progress.png';

import slider2_img1 from './assets/Mathquiz.jpg';
import slider2_img2 from './assets/quizimg.jpg';
import slider2_img3 from './assets/testprogress.png';

import slider3_img1 from './assets/textbookstart.jpg';
import slider3_img2 from './assets/textbooktopic.png';
import slider3_img3 from './assets/textbook.jpg';

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
  // Settings for the first slider (2 images)
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

  // Settings for the second and third sliders (3 images)
  const settings_3_slides = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
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

  const slider1_images = [slider1_img1, slider1_img2];
  const slider2_images = [slider2_img1, slider2_img2, slider2_img3];
  const slider3_images = [slider3_img1, slider3_img2, slider3_img3];

  // Helper for badges
  const slider1_badges = ["Dashboard", "Progress"];
  const slider2_badges = ["Math Quiz", "Quiz", "Test Progress"];
  const slider3_badges = ["Textbook Start", "Textbook Topic", "Textbook"];

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to StudyPal</h1>
        <p>
          The smartest tutor you'll ever have. One that knows your gaps, your
          strengths, your style - and helps you succeed.
        </p>
      </header>

      <section className="home-intro">
        <h2>Your Personal AI-Powered Study Partner</h2>
        <p>
          StudyPal leverages cutting-edge AI to create a truly personalized
          learning experience. Stop wasting time on generic content and get the
          expert-level guidance you need, exactly when you need it.
        </p>
      </section>

      {/* --- Sliders Section --- */}
      <section className="sliders-section fancy-slider-bg">
        {/* Slider 1 */}
        <div className="slider-container">
          <h3>Dynamic Content Generation</h3>
          <Slider {...settings_2_slides}>
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
          <h3>Interactive Learning Tools</h3>
          <Slider {...settings_3_slides}>
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
          <h3>Personalized Study Paths</h3>
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
      </section>
    </div>
  );
};

export default Home;