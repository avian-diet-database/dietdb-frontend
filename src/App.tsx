import React from "react";
import { LogicSearchBar } from "./components/logic/LogicSearchBar";
import "./css/App.css";
import "..\\node_modules\\bulma\\css\\bulma.css";

function App() {
  /* App state needed: 
  *   activeItem -> string: Active bird/prey being viewed.
  *   updateActiveItem -> func: Change the bird/prey being viewed.
  * 
  *   
  *  
  *  --> LogicSearchBar: {changeActiveItem, queryType}
  *       |      queryString     | 
  *       |   updateQueryString  |         
  *       |     queryMatches     |  --> DesignSearchBar: {queryMatches, queryType, onQueryInputChange}      
  *       |  updateQueryMatches  | 
  *       |  onQueryInputChange  | 
  *       |______________________|
  * 
  *  --> LogicItem: {activeItem}
  *       |       itemData       |  --> LogicGraph: {unknown}
  *       |    updateItemData    |      |     unknown     |  --> DesignGraph: {}
  *       |       filterX        |      |_________________| 
  *       |    onFilterXChange   |  
  *       |______________________|  --> DesignItem: {itemData, onFilterXChange}
  * 
  *   --> DesignFooter: {}
  *      
  */
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <LogicSearchBar
            queryType="fruit"
            queryOptions={["apple", "banana", "apricot", "plantain"]}
          />
          <LogicSearchBar
            queryType="vegetable"
            queryOptions={["cucumber", "spinach", "onion", "okra"]}
          />
        </header>
      </div>
    </div>
  );
}

export default App;
