import React from "react";
import { LogicSearchBar } from "../logic/LogicSearchBar";
import { LogicHeader } from "../logic/LogicHeader";
import { ItemType, ActiveItemTypeVar } from "../../cache";
import { useReactiveVar } from "@apollo/client";

export const LogicHome = () => {
  const activeItemType = useReactiveVar(ActiveItemTypeVar);
  switch (activeItemType) {
    case ItemType.PREDATOR:
      return LogicSearchBar({
        queryType: ItemType.PREDATOR,
        placeholder: "Enter a bird name",
        left: "What does the ",
        right: " eat?",
      });
    case ItemType.PREY:
      return LogicSearchBar({
        queryType: ItemType.PREY,
        placeholder: "Enter a prey name",
        left: "What birds eat ",
        right: " ?",
      });
    default:
      return LogicHeader({});
  }
};
