import React from 'react';
import './About.css'; // Ensure you import the new stylesheet

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Discover the passion, quality, and story behind our exceptional food service.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We started with a simple mission: to serve food that brings people together and creates memorable moments. At <strong>Ice Ananas</strong>, we combine the best ingredients with creativity to offer you an unforgettable culinary experience.
          </p>
          <p>
            We believe in quality, freshness, and love for food. Our dedicated team ensures every dish is made with care and served with a smile.
          </p>
        </div>

        
      </div>

      <div className="about-footer">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>🍽️ Fresh Ingredients</li>
          <li>🌱 Healthy Options</li>
          <li>🍓 Flavorful Creations</li>
          <li>🚚 Fast Delivery</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
