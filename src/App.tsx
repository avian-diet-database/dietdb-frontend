import React from "react";
import { LogicSearchBar } from "./components/logic/LogicSearchBar";
import { LogicButton } from "./components/logic/LogicButton";
import "./css/App.css";
import "..\\node_modules\\bulma\\css\\bulma.css";
import { LogicHeader } from "./components/logic/LogicHeader";

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
        <header className="App-header">
          <LogicButton/>
          <LogicHeader/>
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
