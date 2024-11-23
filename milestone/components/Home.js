// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to import the updated CSS file

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Food Service!</h1>
      <p>Your favorite dishes delivered fresh to your door.</p>

      <div className="featured">
        <h2>Featured Menu Items</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="image-container">
              <img
                src="/assets/samosa.jpg"
                alt="Samosa"
              />
            </div>
            <h3>Featured Dish: Samosa</h3>
            <p>Delicious crispy samosas filled with savory fillings.</p>
            <Link to="/menu">See Full Menu</Link>
          </div>
        </div>
      </div>

      <div className="promotions">
        <h3>Seasonal Specials</h3>
        <p>Check out our limited-time offers!</p>
      </div>

      <footer className="footer">
        <p>© 2024 Food Service. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
