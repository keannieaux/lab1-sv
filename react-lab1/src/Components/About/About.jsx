import React from 'react';
import './About.css';
import image1 from './image/pr1.png'; 

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to Learnico! We are dedicated to helping you become a no-code expert. 
        Our platform offers a variety of courses taught by industry leaders. 
        Whether you're a beginner looking to learn the basics or an experienced professional wanting to expand your skills, 
        we have something for you.
      </p>
      <img src={image1} alt="pr1" />
      <p>
        Our mission is to provide high-quality, accessible education to everyone. 
        Join us on this journey to enhance your skills and find the career of your dreams!
      </p>
    </div>
  );
};

export default About;
