import React from "react";
import { LogicErrorPage } from "../logic/LogicErrorPage";
import { DesignDownload } from "./DesignDownload";

interface DesignTableProps {
  data: any[];
}

export const DesignTable = (props: DesignTableProps) => {
  if (props.data.length < 1) {
    return <div>
      <LogicErrorPage errorMessage={"The following query returned no results"} />
    </div>
  }

  return (
    <div className="message is-dark">
      <div className="message-header">
        Data
        <DesignDownload csvData={downloadData(props.data)} fileName={"avianDietTable"} />
      </div>
      <div className="message-body has-background-light">
      <div className="has-background-light is-scrollable has-text-dark" >
        <table className="table is-fullwidth has-background-light has-text-dark" >
          <thead>
            <tr>
              {Object.keys(props.data[0]).map(key => {
                return <th key={key}>{key}</th>
              })}
            </tr>
          </thead>
          <tbody>{props.data.map(item => {
            return <tr key={props.data.indexOf(item)}>{Object.keys(item).map(datum => {
              return <td key={datum}> {item[datum]}</td>
            })}</tr>
          })}</tbody>
          <tfoot>
            <tr>
              {Object.keys(props.data[0]).map(key => {
                return <th key={key}>{key}</th>
              })}
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
      </div>
      </div>
    </div>
  );
};

let downloadData = (preyData: any[]) => {
  let resData = [];
  let headers = [];
  headers = Object.keys(preyData[0]);
  resData.push(headers);
  let body = [];
  for (let item of preyData) {
    body = Object.values(item)
    resData.push(body)
  }
  return resData;
}



