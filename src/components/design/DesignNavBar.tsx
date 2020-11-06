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
            <a
              onClick={props.onPredatorClick}
              className={
                "navbar-item " +
                (props.itemType === ItemType.PREDATOR ? "is-active" : "")
              }
            >
              Predator
            </a>
            <a
              onClick={props.onPreyClick}
              className={
                "navbar-item " +
                (props.itemType === ItemType.PREY ? "is-active" : "")
              }
            >
              Prey
            </a>
            <a
              onClick={props.onHomeClick}
              className={
                "navbar-item " +
                (props.itemType === ItemType.NA ? "is-active" : "")
              }
            >
              Home
            </a>
            <span className="navbar-item">
              <a
                href="https://github.com/hurlbertlab/dietdatabase"
                className="button is-success is-inverted"
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
