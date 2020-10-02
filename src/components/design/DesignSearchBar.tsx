import React from "react";

export interface DesignSearchBarProps {
  queryMatches: string[];
  queryType: string;
  onQueryInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DesignSearchBar = (props: DesignSearchBarProps) => {
  return (
    <div className="dropdown">
      <div className="container">
        <div className="field">
          <div className="control">
            <input
              className="input is-secondary is-large is-rounded"
              type="text"
              placeholder={`Search our ${props.queryType} database...`}
              onChange={props.onQueryInputChange}
            />
          </div>
        </div>
        {props.queryMatches.length > 0 ?
          <div className="dropdown-content">
            {props.queryMatches.map((name: string) => {
              return (
                <div key={name} className="dropdown-item is-size-5 has-text-left">{name}</div>
              );
            })} </div> : null
        }
      </div>
    </div>
  );
};
