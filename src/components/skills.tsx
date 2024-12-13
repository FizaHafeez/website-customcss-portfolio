"use client";

import React from 'react';
import { AiOutlineCheckSquare } from "react-icons/ai";
import '../style/skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <div id="skills">
      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="skills-subtitle">SKILLS</h2>
            <h1 className="skills-title">My Skills</h1>
          </div>
          <div className="skills-grid">
            {/* Skill 1 */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-header-icon">
                  <AiOutlineCheckSquare className="text-xl font-bold" />
                </div>
                <h2 className="skill-card-title">HTML</h2>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '100%' }}></div>
              </div>
              <p className="skill-percentage">100%</p>
            </div>

            {/* Skill 2 */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-header-icon">
                  <AiOutlineCheckSquare className="text-xl font-bold" />
                </div>
                <h2 className="skill-card-title">CSS</h2>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '95%' }}></div>
              </div>
              <p className="skill-percentage">95%</p>
            </div>

            {/* Skill 3 */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-header-icon">
                  <AiOutlineCheckSquare className="text-xl font-bold" />
                </div>
                <h2 className="skill-card-title">JavaScript/TypeScript</h2>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
              <p className="skill-percentage">90%</p>
            </div>

            {/* Skill 4 */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-header-icon">
                  <AiOutlineCheckSquare className="text-xl font-bold" />
                </div>
                <h2 className="skill-card-title">NEXT JS</h2>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '80%' }}></div>
              </div>
              <p className="skill-percentage">80%</p>
            </div>

            {/* Skill 5 */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-header-icon">
                  <AiOutlineCheckSquare className="text-xl font-bold" />
                </div>
                <h2 className="skill-card-title">WordPress</h2>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '95%' }}></div>
              </div>
              <p className="skill-percentage">95%</p>
            </div>

            {/* Skill 6 */}
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-header-icon">
                  <AiOutlineCheckSquare className="text-xl font-bold" />
                </div>
                <h2 className="skill-card-title">ArcMap</h2>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '60%' }}></div>
              </div>
              <p className="skill-percentage">60%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
