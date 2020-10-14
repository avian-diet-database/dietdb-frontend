import React from "react";

interface DesignTableProps {
  data: any[];
}

export const DesignTable = (props: DesignTableProps) => {
  if (props.data.length < 1) {
    return <div></div>;
  }

  return (
    <div className="box has-background-light is-scrollable has-text-dark">
      <table className="table is-fullwidth has-background-light has-text-dark">
        <thead>
          <tr>
            {Object.keys(props.data[0]).map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            return (
              <tr key={props.data.indexOf(item)}>
                {Object.keys(item).map((datum) => {
                  return <td key={datum}> {item[datum]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            {Object.keys(props.data[0]).map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
