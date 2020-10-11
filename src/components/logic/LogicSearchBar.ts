import { DesignSearchBar } from "../design/DesignSearchBar";
import { ItemType } from "../../App"
import { useAutocomplete } from "./AutocompleteHook"

export interface LogicSearchBarProps {
  // In test cases, fruit/vegetable.
  queryType: ItemType
  // A callback for updating the selected item.
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>
  // The active item.
  activeItem: string
  // Dispatcher for active item type.
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>
  // Placeholder for input
  placeholder: string
}

export const LogicSearchBar = (props: LogicSearchBarProps) => {

  const [queryMatches, updateQueryString] = useAutocomplete(props.queryType)

  // --- UPDATE HANDLERS --- //
  // When the user changes their query, update the query string.
  const onQueryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateQueryString(event.target.value)
  };

  const onItemSelect = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    props.updateActiveItem(() => { return event.currentTarget.textContent || "" })
    props.updateItemType(props.queryType)
  }

  return DesignSearchBar({
    queryType: props.queryType,
    activeItem: props.activeItem,
    queryMatches: queryMatches,
    onQueryInputChange: onQueryInputChange,
    onItemSelect: onItemSelect,
    placeholder: props.placeholder
  });
};
