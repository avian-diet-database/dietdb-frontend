import React from "react";
import { ItemType } from "../../App";

interface DesignTabBarProps {
  onPredatorClick: () => void;
  onPreyClick: () => void;
  onHomeClick: () => void;
  itemType: ItemType;
}
export const DesignTabBar = (props: DesignTabBarProps) => {
  return (
    <nav className="tabs is-medium" id="item">
      <div className="container">
        <ul>
          <li>
            <a
              onClick={props.onPredatorClick}
              className={
                "navbar-item " +
                (props.itemType === ItemType.PREDATOR ? "is-active" : "")
              }
            >
              Bird
            </a>
          </li>
          <li>
            <a
              onClick={props.onPreyClick}
              className={
                "navbar-item " +
                (props.itemType === ItemType.PREY ? "is-active" : "")
              }
            >
              Prey
            </a>
          </li>
          <li>
            <a
              onClick={props.onHomeClick}
              className={
                "navbar-item " +
                (props.itemType === ItemType.NA ? "is-active" : "")
              }
            >
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
