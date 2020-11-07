import React, { useState } from "react";
import { LogicFooter } from "./components/logic/LogicFooter";
import { LogicItem } from "./components/logic/LogicItem";
import { LogicHome } from "./components/logic/LogicHome";
import { DesignNavBar } from "./components/design/DesignNavBar";

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
  const isHome = itemType === ItemType.NA;
  return (
    <div id="home">
      <DesignNavBar
        itemType={itemType}
        onHomeClick={() => {
          document.getElementById("home")?.scrollIntoView();
          updateActiveItem("");
          updateItemType(ItemType.NA);
        }}
        onPreyClick={() => {
          document.getElementById("home")?.scrollIntoView();
          updateActiveItem("");
          updateItemType(ItemType.PREY);
        }}
        onPredatorClick={() => {
          document.getElementById("home")?.scrollIntoView();
          updateActiveItem("");
          updateItemType(ItemType.PREDATOR);
        }}
      />
      <section className={"hero is-fullheight-with-navbar"}>
        <div className="hero-head"></div>
        <div className="hero-body">
          {/* Here, render the home if activeItem is "", and otherwise
          render the item page for it. */}
          <LogicHome
            activeItem={activeItem}
            itemType={itemType}
            updateActiveItem={updateActiveItem}
            updateItemType={updateItemType}
          />
        </div>
      </section>
      <section id="item">
        {!isHome ? (
          <LogicItem
            activeItem={activeItem}
            itemType={itemType}
            updateActiveItem={updateActiveItem}
            updateItemType={updateItemType}
          />
        ) : (
          <div></div>
        )}
      </section>
      <LogicFooter />
    </div>
  );
}
//<div className="hero-foot">
//<DesignTabBar
//itemType={itemType}
//onHomeClick={() => {
//document.getElementById("home")?.scrollIntoView();
//updateActiveItem("");
//updateItemType(ItemType.NA);
//}}
//onPreyClick={() => {
//document.getElementById("home")?.scrollIntoView();
//updateActiveItem("");
//updateItemType(ItemType.PREY);
//}}
//onPredatorClick={() => {
//document.getElementById("home")?.scrollIntoView();
//updateActiveItem("");
//updateItemType(ItemType.PREDATOR);
//}}
///>
//</div>

export default App;
