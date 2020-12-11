import React from "react";
import { LogicFooter } from "./components/logic/LogicFooter";
import { LogicItem } from "./components/logic/LogicItem";
import { DesignNavBar } from "./components/design/DesignNavBar";
import { LogicSearchBar } from "./components/logic/LogicSearchBar";
import { DesignHeader } from "./components/design/DesignHeader";
import { LogicAbout } from "./components/logic/LogicAbout";
import { ItemType, ActiveItemVar, ActiveItemTypeVar } from "./cache";
import { useReactiveVar } from "@apollo/client";

function App() {
  const activeItemType = useReactiveVar(ActiveItemTypeVar);
  return (
    <div>
      <DesignNavBar
        onHomeClick={() => {
          ActiveItemVar("");
          ActiveItemTypeVar(ItemType.NA);
          document.body.scrollIntoView();
        }}
        onAboutClick={() => {
          ActiveItemVar("");
          ActiveItemTypeVar(ItemType.ABOUT);
          document.body.scrollIntoView();
        }}
        onPreyClick={() => {
          ActiveItemVar("");
          ActiveItemTypeVar(ItemType.PREY);
          document.body.scrollIntoView();
        }}
        onPredatorClick={() => {
          ActiveItemVar("");
          ActiveItemTypeVar(ItemType.PREDATOR);
          document.body.scrollIntoView();
        }}
      />
      <section className={"hero is-fullheight-with-navbar"}>
        <div className="hero-head"></div>
        <div className="hero-body">
          {/* Here, render the home if activeItem is "", and otherwise
          render the item page for it. */}
          <div className="container">
            {activeItemType === ItemType.ABOUT ? <LogicAbout /> : null}
            {activeItemType === ItemType.NA ? <DesignHeader /> : null}
            {activeItemType === ItemType.PREDATOR ||
            activeItemType === ItemType.NA ? (
              <LogicSearchBar
                queryType={ItemType.PREDATOR}
                placeholder={"Enter a bird name"}
                left={"What does the "}
                right={" eat?"}
              />
            ) : null}
            {activeItemType === ItemType.PREY ||
            activeItemType === ItemType.NA ? (
              <LogicSearchBar
                queryType={ItemType.PREY}
                placeholder={"Enter a prey name"}
                left={"What birds eat "}
                right={" ?"}
              />
            ) : null}
          </div>
        </div>
      </section>
      <section id="item">
        <LogicItem />
      </section>
      <LogicFooter />
    </div>
  );
}

export default App;
