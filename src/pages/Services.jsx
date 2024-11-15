import React from 'react';
import './Services.css';
import { Coffee, Globe, ShoppingBag, Truck, Utensils, Star, Package, Clock, Gift } from 'lucide-react';



const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        Discover the array of services we offer to enhance your bakery experience, from delicious treats to special events.
      </p>
      <div className="services-content">
        <div className="service">
          <div className="icon-circle">
            <Truck className="service-icon" />
          </div>
          <h3 className="service-title">Delivery</h3>
          <p className="service-description">We offer prompt and dependable delivery services to bring our baked goods right to your doorstep.</p>
        </div>
        <div className="service">
          <div className="icon-circle">
            <Utensils className="service-icon" />
          </div>
          <h3 className="service-title">Catering</h3>
          <p className="service-description">Perfect for events of any size, our catering service provides a variety of baked goods to suit your needs.</p>
        </div>
        <div className="service">
          <div className="icon-circle">
            <Coffee className="service-icon" />
          </div>
          <h3 className="service-title">Dine-In</h3>
          <p className="service-description">Visit us and enjoy a cozy atmosphere while savoring our freshly baked treats and pastries.</p>
        </div>
        <div className="service">
          <div className="icon-circle">
            <ShoppingBag className="service-icon" />
          </div>
          <h3 className="service-title">Online Ordering</h3>
          <p className="service-description">Order your favorite bakery items online for easy pickup at your convenience.</p>
        </div>
        <div className="service">
          <div className="icon-circle">
            <Star className="service-icon" />
          </div>
          <h3 className="service-title">Special Offers</h3>
          <p className="service-description">Take advantage of our exclusive offers and promotions to enjoy more of our delectable baked goods.</p>
        </div>
        <div className="service">
          <div className="icon-circle">
            <Package className="service-icon" />
          </div>
          <h3 className="service-title">Baking Packages</h3>
          <p className="service-description">Choose from our variety of baking packages, offering great value and convenience for any occasion.</p>
        </div>
        <div className="service">
          <div className="icon-circle">
            <Gift className="service-icon" />
          </div>
          <h3 className="service-title">Gift Cards</h3>
          <p className="service-description">Give the gift of our delightful baked goods with customizable gift cards, ideal for any occasion.</p>
        </div>
        <div className="service">
          <div className="icon-circle">
            <Clock className="service-icon" />
          </div>
          <h3 className="service-title">Flexible Hours</h3>
          <p className="service-description">Enjoy our services at your convenience with flexible hours to suit your busy schedule.</p>
        </div>
      </div>

      {/* Events Section */}
      <div className="events-container">
        <h2 className="events-title">Upcoming Events</h2>
        <p className="events-description">
          Join us for exciting events at our bakery! Here’s what’s coming up:
        </p>
        <div className="events-content">
          <div className="event">
            <img src="https://i.pinimg.com/236x/72/37/c3/7237c3e9e70db644ac7d54b0a8b3b49c.jpg" alt="Cake Decorating Workshop" className="event-image" />
            <div className="event-details">
              <h3 className="event-title">Cake Decorating Workshop</h3>
              <p className="event-date">August 15, 2024</p>
              <p className="event-description">Learn the art of cake decorating from our expert bakers. Materials provided. Sign up today!</p>
            </div>
          </div>
          <div className="event">
            <img src="https://i.pinimg.com/236x/fd/82/d3/fd82d3b5f003f34be1836084d045c61c.jpg" alt="Monthly Pastry Tasting" className="event-image" />
            <div className="event-details">
              <h3 className="event-title">Monthly Pastry Tasting</h3>
              <p className="event-date">September 5, 2024</p>
              <p className="event-description">Sample a selection of our latest pastries and give us your feedback. Enjoy an evening of delicious treats!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <p className="testimonials-description">
          Here's what our satisfied customers have to say about our bakery:
        </p>
        <div className="testimonials-content">
          <div className="testimonial">
            <img src="https://i.pinimg.com/236x/27/72/fc/2772fcb68543a339d7da0e20d3a9b283.jpg" alt="Customer Review" className="testimonial-image" />
            <div className="testimonial-text">
              <p className="testimonial-content">"The best bakery in town! Their pastries are always fresh and delicious. Highly recommend!"</p>
              <p className="testimonial-author">- Emily R.</p>
            </div>
          </div>
          <div className="testimonial">
            <img src="https://i.pinimg.com/236x/88/89/d4/8889d498849716a1525f26c9c2588fa4.jpg" alt="Customer Review" className="testimonial-image" />
            <div className="testimonial-text">
              <p className="testimonial-content">"I had a cake made for my daughter's birthday, and it was not only beautiful but tasted amazing. Thank you!"</p>
              <p className="testimonial-author">- Michael S.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
