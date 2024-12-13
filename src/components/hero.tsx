"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
import '../style/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-description">
            I am currently studying at GIAIC, pursuing a course focused on Artificial Intelligence, Web 3.0, and the Metaverse. With a deep passion for technology, I am dedicated to continually learning new skills and keeping myself updated to stay ahead in these rapidly evolving fields.
          </p>
          
          <div className="hero-contact">
            <Link href={"#Contact"}>
              <button className="contact-button">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            className="image"
            alt="hero"
            width={320}
            height={400}
            src={require("../../public/assets/my_picture.jpg")}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
