import React from "react";
export interface DesignItemLinkProps {
  itemName: string;
  onItemClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const DesignItemLink = (props: DesignItemLinkProps) => {
  return (
    <a style={{ textDecoration: "none" }} onClick={props.onItemClick}>
      {props.itemName}
    </a>
  );
};
