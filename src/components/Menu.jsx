import React from "react";
import { DataMenu } from "../helpers";
import BurgerItem from "./BurgerItem";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgers</h1>
      <div className="burgers">
        {DataMenu &&
          DataMenu.map((burger, index) => (
            <BurgerItem key={index} burger={burger} />
          ))}
      </div>
    </div>
  );
};

export default Menu;
