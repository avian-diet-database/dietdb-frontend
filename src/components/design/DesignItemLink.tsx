import React from "react";
export interface DesignItemLinkProps {
  itemName: string;
  onItemClick: (
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ) => void;
}

export const DesignItemLink = (props: DesignItemLinkProps) => {
  return (
    <td className="is-clickable" onClick={props.onItemClick}>
      {props.itemName}
    </td>
  );
};
