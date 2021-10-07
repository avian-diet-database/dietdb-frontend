import React, { useState } from "react";
import { ItemType, ActiveItemTypeVar } from "../../cache";
import { useReactiveVar } from "@apollo/client";

interface DesignNavBarProps {
  onPredatorClick: () => void;
  onPreyClick: () => void;
  onHomeClick: () => void;
  onAboutClick: () => void;
}
export const DesignNavBar = (props: DesignNavBarProps) => {
  const [mobileActive, setMobileActive] = useState(false);
  const active = mobileActive ? "is-active" : "";
  const activeItemType = useReactiveVar(ActiveItemTypeVar);
  return (
    <nav className="navbar is-fixed-top is-info" id="home">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img src="../eagle_fish_silhouette.png" alt="Bird"></img>
        </div>
        <a
          role="button"
          className="navbar-burger burger"
          data-target="navbarMenuHeroA"
          onClick={() => setMobileActive(!mobileActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div id="navbarMenuHeroA" className={"navbar-menu " + active}>
        <div className="navbar-start">
          <a
            onClick={() => {
              setMobileActive(false);
              props.onPredatorClick();
            }}
            className={
              "navbar-item " +
              (activeItemType === ItemType.PREDATOR ? "is-active" : "")
            }
          >
            Diet by Bird
          </a>
          <a
            onClick={() => {
              setMobileActive(false);
              props.onPreyClick();
            }}
            className={
              "navbar-item " +
              (activeItemType === ItemType.PREY ? "is-active" : "")
            }
          >
            Diet by Prey
          </a>
          <a
            onClick={() => {
              setMobileActive(false);
              props.onHomeClick();
            }}
            className={
              "navbar-item " +
              (activeItemType === ItemType.NA ? "is-active" : "")
            }
          >
            Home
          </a>
        </div>
        <div className="navbar-end">
          <a className={"navbar-item"} onClick={props.onAboutClick}>
            About (Note: THIS IS DEV ENVIRONMENT!!)
          </a>
          <span className="navbar-item">
            <a
              href="https://github.com/ahhurlbert/aviandietdb"
              className="button is-info is-inverted"
            >
              R package
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};