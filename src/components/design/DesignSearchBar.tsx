import React from "react";
import { ItemType } from "../../App"
import { DebounceInput } from "react-debounce-input"

export interface DesignSearchBarProps {
  queryMatches: string[]
  queryType: ItemType
  placeholder: string
  onQueryInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onItemSelect: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  activeItem: string
}

export const DesignSearchBar = (props: DesignSearchBarProps) => {
  return (
    <div className="dropdown">
      <div className="container">
        <div className="field">
          <div className="control">
            <DebounceInput
              className="input is-dark is-large"
              type="text"
              placeholder={props.placeholder}
              onChange={props.onQueryInputChange}
            />
          </div>
        </div>
        {props.queryMatches.length > 0 ?
          <div className="dropdown-content">
            {props.queryMatches.map((name: string) => {
              return (
                <a key={name} onClick={props.onItemSelect} className={"dropdown-item is-size-5 has-text-left" + (props.activeItem === name ? " is-active" : "")}>{name}</a>
              );
            })} </div> : null
        }
      </div>
    </div>
  );
};
