import React from 'react';
import './Contact.css'; // Ensure you import the stylesheet

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below or reach us through our contact details.</p>
      </div>

      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required className="form-input" />
          <input type="email" placeholder="Your Email" required className="form-input" />
          <textarea placeholder="Your Message" required className="form-textarea"></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:iceananas@foodservice.com">iceananas@foodservice.com</a></p>
        <p>Phone: <a href="tel:+6366307290">6366307290</a></p>
      </div>
    </div>
  );
};

export default Contact;
