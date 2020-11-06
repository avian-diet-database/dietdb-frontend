import React from "react";
import { LogicSearchBar } from "../logic/LogicSearchBar";
import { LogicHeader } from "../logic/LogicHeader";
import { ItemType } from "../../App";

export interface LogicHomeProps {
  activeItem: string;
  itemType: ItemType;
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
}

export const LogicHome = (props: LogicHomeProps) => {
  switch (props.itemType) {
    case ItemType.PREDATOR:
      return LogicSearchBar({
        queryType: ItemType.PREDATOR,
        activeItem: props.activeItem,
        updateActiveItem: props.updateActiveItem,
        updateItemType: props.updateItemType,
        placeholder: "Enter a bird name",
        left: "What does the ",
        right: " eat?",
      });
    case ItemType.PREY:
      return LogicSearchBar({
        queryType: ItemType.PREY,
        activeItem: props.activeItem,
        updateActiveItem: props.updateActiveItem,
        updateItemType: props.updateItemType,
        placeholder: "Enter a prey name",
        left: "What birds eat ",
        right: " ?",
      });
    default:
      return LogicHeader({});
  }
};
