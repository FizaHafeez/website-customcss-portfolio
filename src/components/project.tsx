import Image from 'next/image';
import React from 'react';
import image1 from '../../public/assets/3_picture.png';
import image2 from '../../public/assets/dynamic_resume.png';
import image3 from '../../public/assets/1_picture.png';
import image4 from '../../public/assets/editable_resume.png';
import image5 from '../../public/assets/2_picture.png';
import image6 from '../../public/assets/resume.png';
import '../style/project.css';

const Project = () => {
  const projects = [
    {
      image: image1,
      category: "Currency Converter",
      title: "Currency Converter",
      description:
        "A tool that helps users convert amounts between two currencies using predefined rates or data from an API.",
    },
    {
      image: image2,
      category: "Resume",
      title: "Dynamic Resume",
      description:
        "A customizable resume builder where users can add or edit sections to create a personalized resume.",
    },
    {
      image: image3,
      category: "Timer",
      title: "Countdown Timer",
      description:
        "A simple timer that allows users to set a countdown, with options to start, pause, and reset the timer as needed.",
    },
    {
      image: image4,
      category: "Resume",
      title: "Editable Resume",
      description:
        "An advanced resume builder offering real-time editing and formatting options for creating a professional, polished resume.",
    },
    {
      image: image5,
      category: "Calculator",
      title: "Simple Calculator",
      description:
        "A basic calculator supporting essential operations like addition, subtraction, multiplication, and division.",
    },
    {
      image: image6,
      category: "Resume",
      title: "Static Resume",
      description:
        "A resume generator with a fixed format, allowing users to create a basic resume without customization options.",
    },
  ];

  return (
    <div id="project">
      <section className="project-section">
        <div className="project-container">
          <div className="project-header">
            <h1>My Projects</h1>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  width={320}
                  height={400}
                />
                <div className="project-overlay">
                  <h2>{project.category}</h2>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
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
