"use client";

import Image from 'next/image';
import React from 'react';
import '../style/project.css'; // Import the CSS file

const Project = () => {
  return (
    <div id="project">
      <section className="project-section">
        <div className="project-container">
          <div className="project-header">
            <h1 className="project-title">My Projects</h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project 1 */}
            <div className="project-item">
              <div className="project-item-wrapper">
                <Image
                  alt="Currency Converter"
                  className="project-image"
                  src={require("../../public/assets/3_picture.png")}
                />
                <div className="project-overlay">
                  <h2 className="project-category">Currency Converter</h2>
                  <h1 className="project-name">Currency Converter</h1>
                  <p className="project-description">
                    A tool that helps users convert amounts between two currencies using predefined rates or data from an API.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
