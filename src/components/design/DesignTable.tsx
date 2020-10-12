import React from "react";
import { Prey } from "../../types/Prey";

interface DesignTableProps {
  prey: Prey[];
}

export const DesignTable = (props: DesignTableProps) => {
  let tableBody = props.prey.map((item) => {
    return (
      <tr key={props.prey.indexOf(item)}>
        <td>{item.taxon}</td>
        <td>{item.items}</td>
        <td>{item.wt_or_vol}</td>
        <td>{item.occurence}</td>
        <td>{item.unspecified}</td>
      </tr>
    );
  });

  return (
    <div className="box has-background-light is-scrollable has-text-dark" >
      <table className="table is-fullwidth has-background-light has-text-dark" >
        <thead>
          <tr>
            <th>Taxon</th>
            <th>Items</th>
            <th>Weight or Volume</th>
            <th>Occurrence</th>
            <th>Unspecified</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
        <tfoot>
          <tr>
            <th>Taxon</th>
            <th>Items</th>
            <th>Weight or Volume</th>
            <th>Occurrence</th>
            <th>Unspecified</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

