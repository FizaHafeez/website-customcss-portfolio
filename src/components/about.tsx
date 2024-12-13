"use client";

import Image from 'next/image';
import React from 'react';
import '../style/about.css'; // Import the CSS file

const About = () => {
  return (
    <div id="about">
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-container">
            <Image
              className="about-image"
              alt="hero"
              src={require("../../public/assets/my_picture.jpg")}
              width={300}
              height={500}
            />
          </div>
          <div className="about-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              Graduation (B.Com) from University of Karachi (Appeared).<br />
              Intermediate (Commerce) from Board of Intermediate Education Karachi.<br />
              Matriculation (Bio. Science) from Board of Secondary Education Karachi.
            </p>
            <div className="about-button-container">
              <a href={"/assets/Fiza_Hafeez.pdf"}>
                <button className="about-button">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
