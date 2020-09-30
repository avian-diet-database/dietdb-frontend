import React from "react";

export interface DesignSearchBarProps {
  queryMatches: string[];
  queryType: string;
  onQueryInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DesignSearchBar = (props: DesignSearchBarProps) => {
  return (
    <div className="section">
      <div className="field">
        <div className="control">
          <input
            className="input is-primary is-large"
            type="text"
            placeholder={`Search our ${props.queryType} database...`}
            onChange={props.onQueryInputChange}
          />
        </div>
      </div>
      <div className="">
        <div className="">
          {props.queryMatches.map((name: string) => {
            return (
              <div className="media" key={name}>
                <div className="media-content">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
