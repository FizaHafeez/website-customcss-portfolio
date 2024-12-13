"use client";

import React from 'react';
import '../style/contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div id="Contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-map-container">
            <iframe
              width="100%"
              height="100%"
              className="contact-map"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14470.900563623956!2d66.98467469147026!3d24.941431752678405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36aa91a94e3dd%3A0xe1996e0ce8e0996d!2sMuhammad%20Nagar%20Orangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730937377021!5m2!1sen!2s"
            />
            <div className="contact-info">
              <div>
                <h2>ADDRESS</h2>
                <p> Muhammad Nagar, Orangi Town, Karachi.</p>
              </div>
              <div>
                <h2>EMAIL</h2>
                <a href="mailto:fizahafeez@gmail.com">fizahafeez@gmail.com</a>
                <h2>PHONE</h2>
                <p>0300-0000001</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2>Contact</h2>
            <p>Feel free to contact</p>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
              />
            </div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
