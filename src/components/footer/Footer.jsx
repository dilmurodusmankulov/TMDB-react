import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
      <footer className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li className="menuItem">Dilmurod_Programmer</li>
            <li className="menuItem">Dilmurod_Programmer</li>
            <li className="menuItem">Dilmurod_Programmer</li>
            <li className="menuItem">Dilmurod_Programmer</li>
          </ul>
          <div className="infoText">
            Qanaqadir savollaringiz bo'lsa Dilmurod_Programmer bilan bog'laning!!!
          </div>
          <div className="socialIcons">
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>
        </ContentWrapper>
      </footer>
    );
};

export default Footer;
