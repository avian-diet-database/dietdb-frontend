import React from "react";
import { LogicSearchBar } from "../logic/LogicSearchBar";
import { LogicHeader } from "../logic/LogicHeader";
import { ItemType } from "../../App";

export interface DesignHomeProps {
  activeItem: string;
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
}

export const DesignHome = (props: DesignHomeProps) => {
  return (
    <div className="hero-body">
      <div className="container has-text-center ">
        <div className="section ">
          <LogicHeader />
        </div>
        <div className="section">
          <LogicSearchBar
            queryType={ItemType.PREDATOR}
            activeItem={props.activeItem}
            updateActiveItem={props.updateActiveItem}
            updateItemType={props.updateItemType}
            placeholder="Enter a predator name"
            left="What does "
            right=" eat?"
          />
          <div className="section">
            <LogicSearchBar
              queryType={ItemType.PREY}
              activeItem={props.activeItem}
              updateActiveItem={props.updateActiveItem}
              updateItemType={props.updateItemType}
              placeholder="Enter a prey name"
              left="What bird eats "
              right="?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//          <figure className="image is-40x40 column is-one-fifth"><img src="../eagle_fish_silhouette.png"></img></figure>
//          <figure className="image is-40x40 column is-one-fifth"><img src="../bird_caterpillar_silhouette.png"></img></figure>
