import React from "react";
export interface DesignItemLinkProps {
  itemName: string;
  onItemClick: (
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ) => void;
}

export const DesignItemLink = (props: DesignItemLinkProps) => {
  return (
    <td onClick={props.onItemClick}>
      <a style={{ textDecoration: "none" }} className="has-text-primary-dark">
        {props.itemName}
      </a>
    </td>
  );
};
