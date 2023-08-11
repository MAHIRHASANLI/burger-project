import React from "react";
import AboutImage from "../assets/aboutImage.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <div className="aboutUS">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus earum explicabo illum voluptate? Recusandae soluta amet
          illo pariatur expedita quibusdam rem, modi perspiciatis a adipisci
          sint cumque neque molestiae, consequatur aperiam. Alias, a cum quos
          laboriosam, delectus quidem in maiores hic nihil inventore saepe
          labore amet ab, aspernatur possimus magnam voluptate commodi
          exercitationem veritatis non officia ipsam aperiam recusandae!
          Suscipit vel voluptatibus, tempore dicta assumenda velit aut unde
          aspernatur earum deleniti natus repellat, mollitia facere? Laudantium
          sint a vitae fuga! Blanditiis vel, voluptatum quasi deserunt
          consectetur fuga expedita dignissimos aspernatur soluta quaerat non
          veniam corporis? Veniam minima, vitae dolorum animi at voluptates
          molestias, eos similique laboriosam illum aperiam perspiciatis iure
          deserunt. Facilis, ex labore maiores, dolorum aspernatur minima id
          recusandae doloremque blanditiis ea atque, et eum ipsam expedita
          corrupti quas eveniet officia provident corporis harum quos
          reprehenderit minus aperiam obcaecati? Autem itaque vel est!
          Repudiandae, laboriosam rerum! Laboriosam aspernatur maiores mollitia
          explicabo nobis velit aut doloribus inventore vero? Ducimus, aliquam.
          Provident, esse fuga. Debitis dolor repellendus, beatae sapiente
          dolorum vel? Eaque eveniet delectus est adipisci accusantium itaque
          libero dignissimos minus facere eos eum, ut unde laborum consequatur,
          officia soluta perferendis recusandae voluptatum odit dicta officiis
          fugit sunt! Esse, animi rem.
        </p>
      </div>
    </div>
  );
};

export default About;
