import React from "react";
import "./Footer.scss";

import Contact from "./Contact";
import Info from "./Info";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container-shadow">
        <div className="footer-container-contact">
          <Contact />
          <Info />
        </div>
        <div className="footer-copyright">
          <span>
            <strong>MCKwak</strong> © Copyright 2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
