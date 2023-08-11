import React from "react";
import "../styles/contact.css";
import ContactImage from "../assets/contactImage.webp";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="contactLeft"
        style={{
          backgroundImage: `url(${ContactImage})`,
        }}
      ></div>

      <div className="contactRigth">
        <label>FullName</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <br />
        <button className="contactBtn">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
