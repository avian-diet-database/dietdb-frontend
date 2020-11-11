import { DesignSearchBar } from "../design/DesignSearchBar";
import { ItemType } from "../../App";
import { useAutocomplete } from "./AutocompleteHook";
import { useState } from "react";
import { setTimeout } from "timers";

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

  const [displayMatches, updateDisplayMatches] = useState(true);

  const keyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 38) {
      //up arrow key
      if (currIndex > 0) {
        changeIndex(currIndex - 1);
      }
    } else if (event.keyCode === 40) {
      //down arrow key
      if (currIndex < queryMatches.length - 1) {
        changeIndex(currIndex + 1);
      }
    } else if (event.keyCode === 13) {
      // Enter key
      selectItem(queryMatches[currIndex] || props.activeItem);
      changeIndex(0);
    }
  };

  // --- UPDATE HANDLERS --- //
  // When the user changes their query, update the query string.
  const onQueryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateQueryString(event.target.value);
  };

  const onQueryFocus = () => {
    updateDisplayMatches(true);
  };

  const onQueryCancel = () => {
    setTimeout(() => updateDisplayMatches(false), 300);
  };

  const selectItem = (item: string) => {
    props.updateActiveItem(item);
    props.updateItemType(props.queryType);
    updateQueryString("");
    document.getElementById("item")?.scrollIntoView();
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
    onQueryCancel: onQueryCancel,
    onQueryFocus: onQueryFocus,
    onItemSelect: onItemSelect,
    placeholder: props.placeholder,
    left: props.left,
    right: props.right,
    indexNum: currIndex,
    onKeyDown: keyDown,
    displayMatches: displayMatches,
  });
};
