import React from "react";

interface DesignDropdownProps {
  criteriaOptions: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  val: string;
}

//Try setting the value here, instead of relying on these onChange methods.
export const DesignDropdown = (props: DesignDropdownProps) => {
  return (
    <div className="select is-primary is-small">
      <select value={props.val} onChange={props.onChange}>
        {props.criteriaOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
