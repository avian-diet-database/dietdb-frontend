import React, { useState, useEffect } from "react";
import { ItemType } from "../../App";
import { DebounceInput } from "react-debounce-input";

export interface DesignSearchBarProps {
  queryMatches: string[];
  queryType: ItemType;
  placeholder: string;
  onQueryInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemSelect: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  activeItem: string;
  left: string;
  right: string;
  indexNum: number;
}

export const DesignSearchBar = (props: DesignSearchBarProps) => {
  const [liveItem, setLiveItem] = useState("_____");
  useEffect(() => {
    setLiveItem(props.activeItem || "_____");
  }, [props.queryType, props.activeItem]);

  return (
    <div className="container" onKeyDown={props.onKeyDown}>
      <p className="title is-size-3">
        {props.left}
        <span className="has-text-info">{liveItem}</span>
        {props.right}
      </p>
      <div className="dropdown">
        <div className="container">
          <div className="field has-addons">
            <div className="control">
              <DebounceInput
                value={props.activeItem}
                className="input is-info"
                type="text"
                placeholder={props.placeholder}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setLiveItem(event.target.value);
                  props.onQueryInputChange(event);
                }}
              />
            </div>
            <div className="control">
              <a
                className="button is-info"
                onClick={() =>
                  document.getElementById("item")?.scrollIntoView()
                }
              >
                Search
              </a>
            </div>
          </div>
          {props.queryMatches.length > 0 ? (
            <div
              className="dropdown-content"
              style={{ position: "absolute", zIndex: 10 }}
            >
              {props.queryMatches.map((name: string, index: number) => {
                return (
                  <a
                    key={name}
                    onClick={(
                      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => {
                      setLiveItem(event.currentTarget.textContent || "");
                      props.onItemSelect(event);
                    }}
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
      </div>
    </div>
  );
};
