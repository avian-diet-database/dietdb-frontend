import React, { useState } from "react";
import { LogicFooter } from "./components/logic/LogicFooter";
import { LogicItem } from "./components/logic/LogicItem";
import { LogicHome } from "./components/logic/LogicHome";
import { DesignNavBar } from "./components/design/DesignNavBar";
import { DesignTabBar } from "./components/design/DesignTabBar";

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
    <div>
      <section className={"hero is-fullheight"}>
        <div className="hero-head">
          <DesignNavBar
            itemType={itemType}
            onHomeClick={() => {
              updateActiveItem("");
              updateItemType(ItemType.NA);
            }}
            onPreyClick={() => {
              updateActiveItem("");
              updateItemType(ItemType.PREY);
            }}
            onPredatorClick={() => {
              updateActiveItem("");
              updateItemType(ItemType.PREDATOR);
            }}
          />
        </div>
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
        <div className="hero-foot">
          <DesignTabBar
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
        </div>
      </section>
      {!isHome ? (
        <LogicItem
          activeItem={activeItem}
          itemType={itemType}
          updateActiveItem={updateActiveItem}
          updateItemType={updateItemType}
        />
      ) : null}
      <LogicFooter />
    </div>
  );
}

export default App;
