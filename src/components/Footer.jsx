import React from 'react';
import './Footer.css'
import insta from "../socialicon/icons8-instagram.gif"
import twit from "../socialicon/icons8-twitter-circled.gif"
import git from "../socialicon/icons8-github.gif"
import lin from "../socialicon/icons8-linkedin-circled.gif"
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="socials">
          <a href="https://twitter.com/Lokesh_Uk_01" target="_blank" rel="noopener noreferrer">
            <img src={twit} alt="Twitter" loading="fast" className="socicon" />
          </a>
          <a href="https://www.instagram.com/luckychauhan_uk01/" target="_blank" rel="noopener noreferrer">
            <img src={insta} loading="fast" className="socicon" />
          </a>
          <a href="https://www.linkedin.com/in/lokesh-chauhan-040bb1267/" target="_blank" rel="noopener noreferrer">
            <img src={lin} alt="Linkedin" loading="fast" className="socicon" />
          </a>
          <a href="https://github.com/lokeshchauhan2801" target="_blank" rel="noopener noreferrer">
            <img src={git} className="socicon" />
          </a>
        </div>
        <p className="copy">
          &copy; Copyright 2023/
          <a href="https://github.com/lokeshchauhan2801" target="_blank" rel="noopener noreferrer">
            LOKESH CHAUHAN
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
