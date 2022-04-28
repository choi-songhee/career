import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <span className="footer__copyright">© Songhee Choi</span>
        <div className="site-contact">
          <a href="https://github.com/choi-songhee" target="_blank" className="site-contact__link" aria-label="Visit Github">
            <AiFillGithub className="site-contact__icon"/>
          </a>
          <a href="mailto:ssonghee15@gmail.com" className="site-contact__link" aria-label="Send Email">
            <HiMail className="site-contact__icon"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
