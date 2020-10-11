import React from "react";
import { Prey } from "../../types/Prey";

interface DesignTableProps {
  prey: Prey[];
}

export const DesignTable = (props: DesignTableProps) => {
  let tableBody = props.prey.map((item) => {
    return (
      <tr key={props.prey.indexOf(item)}>
        <th>{item.taxon}</th>
        <td>{item.items}</td>
        <td>{item.wt_or_vol}</td>
        <td>{item.occurence}</td>
        <td>{item.unspecified}</td>
      </tr>
    );
  });

  return (
    <div className="" id="queryTable">
      <table className="table">
        <thead>
          <tr>
            <th>Taxon</th>
            <th>Items</th>
            <th>Weight or Volume</th>
            <th>Occurrence</th>
            <th>Unspecified</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Taxon</th>
            <th>Items</th>
            <th>Weight or Volume</th>
            <th>Occurrence</th>
            <th>Unspecified</th>
          </tr>
        </tfoot>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

