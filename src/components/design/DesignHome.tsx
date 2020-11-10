import React from "react";
import { LogicSearchBar } from "../logic/LogicSearchBar";
import { LogicHeader } from "../logic/LogicHeader";
import { ItemType } from "../../App";
import { LogicStatistics } from "../logic/LogicStatistics";

export interface DesignHomeProps {
  activeItem: string;
  itemType: ItemType;
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
}

export const DesignHome = (props: DesignHomeProps) => {
  let content;
  switch (props.itemType) {
    case ItemType.PREDATOR:
      content = (
        <LogicSearchBar
          queryType={ItemType.PREDATOR}
          activeItem={props.activeItem}
          updateActiveItem={props.updateActiveItem}
          updateItemType={props.updateItemType}
          placeholder="Enter a predator name"
          left="What does "
          right=" eat?"
        />
      );
    case ItemType.PREY:
      content = (
        <LogicSearchBar
          queryType={ItemType.PREY}
          activeItem={props.activeItem}
          updateActiveItem={props.updateActiveItem}
          updateItemType={props.updateItemType}
          placeholder="Enter a prey name"
          left="What bird eats "
          right="?"
        />
      );
    default:
      content = 
      <div>
        <LogicHeader />
      </div>;
  }
  return <div className="">{content}</div>;
};
