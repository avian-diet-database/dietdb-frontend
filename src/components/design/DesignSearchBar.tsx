import React, { useState, useEffect } from "react";
import { ItemType } from "../../App";
import { DebounceInput } from "react-debounce-input";

export interface DesignSearchBarProps {
  queryMatches: string[];
  queryType: ItemType;
  placeholder: string;
  onQueryInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onQueryCancel: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onQueryFocus: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemSelect: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  activeItem: string;
  left: string;
  right: string;
  indexNum: number;
  displayMatches: boolean;
}

export const DesignSearchBar = (props: DesignSearchBarProps) => {
  return (
    <div
      className="container is-flex is-flex-direction-row"
      onKeyDown={props.onKeyDown}
    >
      <p className="subtitle is-size-2 pt-5">{props.left}</p>
      <div className="dropdown">
        <div className="container">
          <div className="field has-addons">
            <div className="control">
              <DebounceInput
                value={props.activeItem}
                style={{ border: "none", boxShadow: "none" }}
                className="input is-size-2 has-text-info title"
                type="text"
                placeholder={props.placeholder}
                onChange={props.onQueryInputChange}
                onBlur={props.onQueryCancel}
                onFocus={props.onQueryFocus}
              />
            </div>
          </div>
          {props.queryMatches.length > 0 && props.displayMatches ? (
            <div
              className="dropdown-content"
              style={{ position: "absolute", zIndex: 10 }}
            >
              {props.queryMatches.map((name: string, index: number) => {
                return (
                  <a
                    key={name}
                    onClick={props.onItemSelect}
                    className={
                      "dropdown-item is-size-5 has-text-left" +
                      (index === props.indexNum ? " is-active" : "")
                    }
                  >
                    {name}
                  </a>
                );
              })}{" "}
            </div>
          ) : null}
        </div>
        <p className="subitle is-size-2 pt-5">{props.right}</p>
      </div>
    </div>
  );
};
