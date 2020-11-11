import React, { useState } from "react";
import { LogicFooter } from "./components/logic/LogicFooter";
import { LogicItem } from "./components/logic/LogicItem";
import { LogicHome } from "./components/logic/LogicHome";
import { DesignNavBar } from "./components/design/DesignNavBar";
import { LogicSearchBar } from "./components/logic/LogicSearchBar";
import { DesignHeader } from "./components/design/DesignHeader";

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
      <DesignNavBar
        itemType={itemType}
        onHomeClick={() => {
          updateActiveItem("");
          updateItemType(ItemType.NA);
          document.body.scrollIntoView();
        }}
        onPreyClick={() => {
          updateActiveItem("");
          updateItemType(ItemType.PREY);
          document.body.scrollIntoView();
        }}
        onPredatorClick={() => {
          updateActiveItem("");
          updateItemType(ItemType.PREDATOR);
          document.body.scrollIntoView();
        }}
      />
      <section className={"hero is-fullheight-with-navbar"}>
        <div className="hero-head"></div>
        <div className="hero-body">
          {/* Here, render the home if activeItem is "", and otherwise
          render the item page for it. */}
          {/*<LogicHome
            activeItem={activeItem}
            itemType={itemType}
            updateActiveItem={updateActiveItem}
            updateItemType={updateItemType}
          >*/}
          <div className="container">
            {itemType === ItemType.NA ? <DesignHeader /> : null}
            {itemType !== ItemType.PREY ? (
              <LogicSearchBar
                queryType={ItemType.PREDATOR}
                activeItem={activeItem}
                updateActiveItem={updateActiveItem}
                updateItemType={updateItemType}
                placeholder={"Enter a bird name"}
                left={"What does the "}
                right={" eat?"}
              />
            ) : null}
            {itemType !== ItemType.PREDATOR ? (
              <LogicSearchBar
                queryType={ItemType.PREY}
                activeItem={activeItem}
                updateActiveItem={updateActiveItem}
                updateItemType={updateItemType}
                placeholder={"Enter a prey name"}
                left={"What birds eat "}
                right={" ?"}
              />
            ) : null}
          </div>
        </div>
      </section>
      <section id="item">
        <LogicItem
          activeItem={activeItem}
          itemType={itemType}
          updateActiveItem={updateActiveItem}
          updateItemType={updateItemType}
        />
      </section>
      <LogicFooter />
    </div>
  );
}

export default App;
