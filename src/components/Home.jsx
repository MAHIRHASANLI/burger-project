import React from "react";
import { useNavigate } from "react-router";
import "../styles/home.css";
import BurgerHome from "../assets/burgerHome.webp";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home" style={{ backgroundImage: `url(${BurgerHome})` }}>
      <button className="homeBtn" onClick={() => navigate("contact")}>
        Order it
      </button>
    </div>
  );
};

export default Home;
