import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCloudDownload } from "react-icons/ai";
import '../style/navbar.css';
 // Importing the CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="navbar-header">
        <div className="navbar-inner">
          <a className="navbar-logo">
            <Image 
              src={require("../../public/assets/my-logo.png")} 
              alt="fiza hafeez" 
              width={100} 
              height={100} 
              className="logo-img"
            />
            <span className="navbar-title">FIZA HAFEEZ</span>
          </a>
          <nav className="navbar-links">
            <Link href={"/"} className="navbar-link">Home</Link>
            <Link href={"#about"} className="navbar-link">About</Link>
            <Link href={"#skills"} className="navbar-link">Skills</Link>
            <Link href={"#project"} className="navbar-link">Projects</Link>
            <Link href={"#Contact"} className="navbar-link">Contact</Link>
          </nav>
          <a href="/assets/Fiza_Hafeez.pdf">
            <button className="download-button">
              Download CV
              <AiOutlineCloudDownload className="download-icon"/>
            </button>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar
