import { DesignSearchBar } from "../design/DesignSearchBar";
import { ItemType } from "../../App";
import { useAutocomplete } from "./AutocompleteHook";
import { useState } from "react";

export interface LogicSearchBarProps {
  // In test cases, fruit/vegetable.
  queryType: ItemType;
  // A callback for updating the selected item.
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  // The active item.
  activeItem: string;
  // Dispatcher for active item type.
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
  // Placeholder for input
  placeholder: string;

  // left and right are the words that will be presented to the left and right of the search bar
  left: string;
  right: string;
}

export const LogicSearchBar = (props: LogicSearchBarProps) => {
  const [queryMatches, updateQueryString] = useAutocomplete(props.queryType);
  
  const [currIndex, changeIndex] = useState(0);

  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.keyCode === 38) {
      //up arrow key
      if (currIndex <= 0) { } else {
        changeIndex(currIndex - 1)
      }
    } else if (e.keyCode === 40) {
      //down arrow key
      if (currIndex >= Math.min(9, queryMatches.length - 1)) { } else {
        changeIndex(currIndex + 1)
      }
    }
  });

  document.addEventListener("keypress", (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      selectItem(queryMatches[currIndex] || props.activeItem);
      document.getElementById("item")?.scrollIntoView();
    }
  });

  // --- UPDATE HANDLERS --- //
  // When the user changes their query, update the query string.
  const onQueryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateQueryString(event.target.value);
  };

  const selectItem = (item: string) => {
    props.updateActiveItem(item);
    props.updateItemType(props.queryType);
    updateQueryString("");
  };

  const onItemSelect = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    selectItem(event.currentTarget.textContent || "");
  };

  return DesignSearchBar({
    queryType: props.queryType,
    activeItem: props.activeItem,
    queryMatches: queryMatches,
    onQueryInputChange: onQueryInputChange,
    onItemSelect: onItemSelect,
    placeholder: props.placeholder,
    left: props.left,
    right: props.right,
    indexNum: currIndex
  });
};
