import React from "react";
import { LogicSearchBar } from "./components/logic/LogicSearchBar";
import "./css/App.css";
import "..\\node_modules\\bulma\\css\\bulma.css";
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
  return (
    <div className="App">
      <div>
        <section className="hero is-fullheight is-link">
          <div className="hero-body">
            <div className="container">
              <LogicHeader />
              <div className="columns">
                <div className="column">
                  <LogicSearchBar
                    queryType="fruit"
                    queryOptions={["apple", "banana", "apricot", "plantain"]}
                  />
                </div>
                <div className="column">
                  <LogicSearchBar
                    queryType="vegetable"
                    queryOptions={["cucumber", "spinach", "onion", "okra"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <LogicFooter />
      </div>
    </div>
  );
}

export default App;
