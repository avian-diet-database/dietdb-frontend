import React, { useState } from "react";
import { LogicSearchBar } from "./components/logic/LogicSearchBar";
import { LogicButton } from "./components/logic/LogicButton"
import { LogicHeader } from "./components/logic/LogicHeader";
import { LogicFooter } from "./components/logic/LogicFooter";

function App() {
  /* App state needed:
   *   activeItem -> string: Active bird/prey being viewed.
   *   updateActiveItem -> func: Change the bird/prey being viewed.
   *
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
  const [activeItem, setActiveItem] = useState("")
  return (
    <div>
      <section className="hero is-fullheight is-primary">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">
                  {/* <h1 className="title is-2"> {activeItem} </h1> */}
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
                    <LogicButton className="button is-primary is-inverted" buttonText="Github" onClick={() => { }} />
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered ">
            <div className="section">
              <LogicHeader />
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <LogicSearchBar
                  queryType="fruit"
                  queryOptions={["apple", "banana", "apricot", "plantain"]}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              </div>
              <div className="column is-4">
                <LogicSearchBar
                  queryType="vegetable"
                  queryOptions={["cucumber", "spinach", "onion", "okra"]}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogicFooter />
    </div>
  );
}

export default App;
