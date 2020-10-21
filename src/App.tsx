import React, { useState } from "react";
import { LogicHome } from "./components/logic/LogicHome";
import { LogicFooter } from "./components/logic/LogicFooter";
import { LogicItem } from "./components/logic/LogicItem";

export enum ItemType {
  PREY,
  PREDATOR,
  NA,
}
function App() {
  /* App state needed:
   *   activeItem -> string: Active bird/prey being viewed.
   *   updateActiveItem -> func: Change the bird/prey being viewed.
   *   activePage -> string: Active page component being viewed.
   *   updateActivePage
   */
  const [activeItem, updateActiveItem] = useState("");
  const [itemType, updateItemType] = useState(ItemType.NA);
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-head">
          <nav className="navbar is-size-6 has-text-light">
            <figure className="image is-96x96">
              <img src="../eagle_fish_silhouette.png"></img>
            </figure>
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item"></div>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroA"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a
                    onClick={() => {
                      updateActiveItem("");
                      updateItemType(ItemType.NA);
                    }}
                    className={
                      "navbar-item " + (activeItem === "" ? "is-active" : "")
                    }
                  >
                    Home
                  </a>
                  <a className="navbar-item">Examples</a>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a
                      href="https://github.com/hurlbertlab/dietdatabase"
                      className="button is-primary is-inverted"
                    >
                      {" "}
                      Github{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {activeItem}
        {/* Here, render the home if activeItem is "", and otherwise
          render the item page for it. */}
        {activeItem === "" ? (
          <LogicHome
            activeItem={activeItem}
            setActiveItem={updateActiveItem}
            updateItemType={updateItemType}
          />
        ) : (
          <LogicItem activeItem={activeItem} itemType={itemType} />
        )}
      </section>
      <LogicFooter />
    </div>
  );
}

export default App;
