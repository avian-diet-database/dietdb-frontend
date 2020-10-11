import React, { useState, useReducer } from "react";
import { LogicHome } from "./components/logic/LogicHome"
import { LogicFooter } from "./components/logic/LogicFooter";
import { LogicItem } from "./components/logic/LogicItem";

export enum ItemType {
  PREY,
  PREDATOR,
  NA
}
function App() {
  /* App state needed:
   *   activeItem -> string: Active bird/prey being viewed.
   *   updateActiveItem -> func: Change the bird/prey being viewed.
   *   activePage -> string: Active page component being viewed.
   *   updateActivePage
   *
   *
   *  --> LogicSearchBar: {changeActiveItem, queryType} --> DesignSearchBar: {queryMatches, queryType, onQueryInputChange}
   *       |      queryString     |
   *       |   updateQueryString  |
   *       |     queryMatches     |
   *       |  updateQueryMatches  |
   *       |  onQueryInputChange  |
   *       |______________________|
   *
   *  --> LogicItem: {activeItem}    --> DesignItem: {itemData, onFilterXChange}
   *       |       itemData       |                           --> LogicGraph: {graphType} --> DesignGraph: {graphData, loading}
   *       |    updateItemData    |                              |    graphData    |
   *       |       filterX        |                              |     loading     |
   *       |    onFilterXChange   |                              |      error      |
   *       |______________________|                              |_________________|
   *
   *   --> DesignFooter: {}
   *
   */
  const [activeItem, updateActiveItem] = useState("")
  const [itemType, updateItemType] = useState(ItemType.NA)
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-head">
          <nav className="navbar is-size-6">
            <figure className="image is-96x96"><img src="../eagle_fish_silhouette.png"></img></figure>
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">
                  <h1 className="title" > {activeItem} </h1>
                </div>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Home
                  </a>
                  <a className="navbar-item">
                    Examples
                  </a>
                  <a className="navbar-item">
                    Documentation
                  </a>
                  <span className="navbar-item">
                    <a href="https://github.com/hurlbertlab/dietdatabase"
                      className="button is-primary is-inverted"> Github </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Here, render the home if activeItem is "", and otherwise
          render the item page for it. */ }
        {activeItem === ""
          ? <LogicHome activeItem={activeItem} setActiveItem={updateActiveItem} updateItemType={updateItemType} />
          : <LogicItem activeItem={activeItem} itemType={itemType} />}
      </section>
      <LogicFooter />
    </div>
  );
}

export default App;
