import React from 'react';
import './AboutUs.css'; // Ensure this CSS file is created

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-section welcome-section">
          <div className="welcome-image-container">
            <div className="welcome-overlay"></div>
            <img 
              src="https://i.pinimg.com/564x/94/ac/c3/94acc3570e74dcc81dd3d6624b503d14.jpg" 
              alt="Bakery"
              className="welcome-image"
            />
            <div className="welcome-text">
              <h2 className="welcome-title">Welcome to Bakerville!</h2>
              <p className="welcome-description">
                At Bakerville, we believe in creating the finest baked goods with the freshest ingredients. 
                Our bakery was founded with a passion for quality and a love for all things sweet. 
                From our family to yours, we’re dedicated to providing a delightful experience with each bite.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-section">
          <h2 className="about-us-subtitle">Our Mission</h2>
          <p className="about-us-description">
            Our mission is to deliver high-quality, handcrafted baked goods that bring joy to every occasion. 
            We are committed to using the best ingredients and traditional baking techniques to ensure that each product 
            is both delicious and memorable.
          </p>
        </div>
        <div className="about-us-section">
          <h2 className="about-us-subtitle">Our Story</h2>
          <p className="about-us-description">
            Bakerville started as a small family business in 2000, with a dream to bring authentic and delectable baked goods to the community.
            Over the years, we have grown but our core values of quality and passion remain unchanged. We pride ourselves on being a part of your celebrations, big and small.
          </p>
        </div>
        <div className="about-us-section">
          <h2 className="about-us-subtitle">Our Specialties</h2>
          <p className="about-us-description">
            We specialize in a variety of baked goods, from traditional breads and pastries to custom cakes and seasonal treats. 
            Our signature items include sourdough bread, croissants, and our famous chocolate cake. We are always experimenting with new recipes to bring you something special.
          </p>
        </div>
        <div className="about-us-section">
          <h2 className="about-us-subtitle">Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img 
                src="https://i.pinimg.com/236x/25/4c/08/254c0827aa711f4dd41ce040f725f5b3.jpg" 
                alt="Team Member"
                className="team-member-image"
              />
              <h3 className="team-member-name">Jane Doe</h3>
              <p className="team-member-role">Head Baker</p>
            </div>
            <div className="team-member">
              <img 
                src="https://i.pinimg.com/236x/d0/85/2d/d0852dc9f38d8117d4d0b232fbba0efc.jpg" 
                alt="Team Member"
                className="team-member-image"
              />
              <h3 className="team-member-name">John Smith</h3>
              <p className="team-member-role">Pastry Chef</p>
            </div>
            <div className="team-member">
              <img 
                src="https://i.pinimg.com/236x/33/6f/2f/336f2fbfb74b3fec73461fe5efbb0ba4.jpg" 
                alt="Team Member"
                className="team-member-image"
              />
              <h3 className="team-member-name">Alice Johnson</h3>
              <p className="team-member-role">Cake Designer</p>
            </div>
          </div>
        </div>
        <div className="about-us-section">
          <h2 className="about-us-subtitle">Join Us</h2>
          <p className="about-us-description">
            We are always looking for passionate individuals to join our team. If you have a love for baking and a dedication to quality, 
            we’d love to hear from you. Visit our careers page to learn more about current opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
