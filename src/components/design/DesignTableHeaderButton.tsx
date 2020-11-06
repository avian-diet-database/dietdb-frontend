import React from "react";

interface DesignTableHeaderButtonProps {
  classNameAddons: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText: string;
}

export const DesignTableHeaderButton = (
  props: DesignTableHeaderButtonProps
) => {
  return (
    <button
      className={"button is-primary " + props.classNameAddons}
      onClick={props.onClick}
    >
      <span>{props.buttonText}</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" />
      </span>
    </button>
  );
};
