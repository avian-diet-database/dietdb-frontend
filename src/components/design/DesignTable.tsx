import React from "react";

interface DesignTableProps {
  prey: any[];
}

export const DesignTable = (props: DesignTableProps) => {
  if (props.prey.length < 1) {
    return <div></div>
  }

  return (
    <div className="box has-background-light is-scrollable has-text-dark" >
      <table className="table is-fullwidth has-background-light has-text-dark" >
        <thead>
          <tr>
            {Object.keys(props.prey[0]).map(key => {
              return <th key={key}>{key}</th>
            })}
          </tr>
        </thead>
        <tbody>{props.prey.map(item => {
          return <tr key={props.prey.indexOf(item)}>{Object.keys(item).map(datum => {
            return <td key={datum}> {item[datum]}</td>
          })}</tr>
        })}</tbody>
        <tfoot>
          <tr>
            {Object.keys(props.prey[0]).map(key => {
              return <th key={key}>{key}</th>
            })}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

