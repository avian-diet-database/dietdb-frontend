import React from "react";
import { LogicSearchBar } from "../logic/LogicSearchBar";
import { LogicHeader } from "../logic/LogicHeader";
import { ItemType, ActiveItemVar, ActiveItemTypeVar } from "../../cache";
import { useReactiveVar } from "@apollo/client";

export const DesignHome = () => {
  const activeItem = useReactiveVar(ActiveItemVar);
  const activeItemType = useReactiveVar(ActiveItemTypeVar);
  let content;
  switch (activeItemType) {
    case ItemType.PREDATOR:
      content = (
        <LogicSearchBar
          queryType={ItemType.PREDATOR}
          placeholder="Enter a predator name"
          left="What does "
          right=" eat?"
        />
      );
    case ItemType.PREY:
      content = (
        <LogicSearchBar
          queryType={ItemType.PREY}
          placeholder="Enter a prey name"
          left="What birds eat "
          right="?"
        />
      );
    default:
      content = (
        <div>
          <LogicHeader />
        </div>
      );
  }
  return <div className="">{content}</div>;
};
