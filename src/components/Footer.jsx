import React from "react";
import "../styles/footer.css";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="faIcons">
          <FiInstagram />
          <FiFacebook
            style={{
              marginLeft: "20px",
            }}
          />
          <FiLinkedin
            style={{
              marginLeft: "20px",
            }}
          />
        </div>
        <div className="text">Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
  );
};

export default Footer;
