import React from "react";

export interface DesignSearchBarProps {
  queryMatches: string[];
  onQueryInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DesignSearchBar = (props: DesignSearchBarProps) => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-primary"
          type="text"
          placeholder={`Search our database...`}
          onChange={props.onQueryInputChange}
        />
      </div>
      {props.queryMatches.map((name: string) => {
        return <div key={name}> {name} </div>;
      })}
    </div>
  );
};
