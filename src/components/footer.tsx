"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import '../style/footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        <a className="footer-logo">
          <Image
            src={require("../../public/assets/my-logo.png")}
            alt="fiza hafeez"
            width={100}
            height={100}
            className="w-[120px]"
          />
          <span className="footer-logo-text">FIZA HAFEEZ</span>
        </a>
        <p className="footer-text">
          2024 FIZA HAFEEZ
        </p>
        <span className="footer-social">
          <Link
            target="_blank"
            href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEvDy_AB_98M3pivv0UhI15BqXEUkHcF4P0&keywords=fiza%20hafeez&origin=RICH_QUERY_SUGGESTION&position=0&searchId=e96eb7ae-40b1-416a-a6b2-b7aefc57f5ff&sid=uiw&spellCorrectionEnabled=false"
            className="footer-social-icon"
          >
            <AiOutlineLinkedin />
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
