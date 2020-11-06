import React from "react";
import { ItemType } from "../../App";

interface DesignNavBarProps {
  onPredatorClick: () => void;
  onPreyClick: () => void;
  onHomeClick: () => void;
  itemType: ItemType;
}
export const DesignNavBar = (props: DesignNavBarProps) => {
  return (
    <nav className="navbar is-size-6 has-text-light" id="home">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src="../eagle_fish_silhouette.png" alt="Bird"></img>
          </div>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className={"navbar-item"}>About</a>
            <a className={"navbar-item"}>Contact</a>
            <span className="navbar-item">
              <a
                href="https://github.com/hurlbertlab/dietdatabase"
                className="button is-dark is-inverted"
              >
                {" "}
                Github{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
