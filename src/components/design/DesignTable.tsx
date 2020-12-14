import React from "react";
import { DesignDownload } from "./DesignDownload";
import { TableController } from "../../types/TableController";
import { DesignTableHeader } from "./DesignTableHeader";
import { LogicItemLink } from "../logic/LogicItemLink";
import { TableSort } from "../logic/TableSorting";
import { ItemType } from "../../cache";
import { getTime } from "../logic/LogicFooter";

interface DesignTableProps {
  data: any[];
  controller: TableController;
  sortedBy: TableSort;
  numRecords: number;
  numStudies: number;
  metadata: string[];
  activeItemType: ItemType;
}

export const DesignTable = (props: DesignTableProps) => {
  let isPredator = props.activeItemType == ItemType.PREDATOR;

  return (
    <div className="message">
      <div className="message-header">
        <div>{isPredator ? "Bird Query Results" : "Prey Query Results"}</div>
        <DesignDownload
          csvData={downloadData(props.data, props.metadata)}
          fileName={"avianDietTable"}
        />
      </div>
      <div className="message-body">
        <div className="is-scrollable">
          <table className="table is-striped is-fullwidth">
            <thead>
              <DesignTableHeader {...props} />
            </thead>
            <tbody>
              {props.data.map((item) => {
                return (
                  <tr key={props.data.indexOf(item)}>
                    {isPredator ? (
                      <LogicItemLink
                        itemType={ItemType.PREY}
                        itemName={item["taxon"]}
                      />
                    ) : (
                        <LogicItemLink
                          itemType={ItemType.PREDATOR}
                          itemName={item["common_name"]}
                        />
                      )}
                    {Object.keys(item)
                      .filter((val) => val != "__typename")
                      .filter((val) => val != "taxon" && val != "common_name")
                      .map((datum) => {
                        return <td key={datum}>{item[datum]}</td>;
                      })}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <DesignTableHeader {...props} />
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

let downloadData = (preyData: any[], metadata: any[]) => {
  
  let resData = [];
  let headers = [];
  headers = Object.keys(preyData[0]);
  headers = formatHeaders(headers);
  resData.push(headers);
  let body = [];
  for (let item of preyData) {
    body = Object.values(item);
    body.unshift(metadata[0])
    body.splice(2, 0, metadata[5]);
    body.splice(2, 0, metadata[4]);
    body.splice(2, 0, metadata[3]);
    body.splice(2, 0, metadata[2]);
    body.splice(2, 0, metadata[1]);
    body[body.length] = getTime();
    resData.push(body);
  }
  return resData;
};

let formatHeaders = (headers:any[]) => {
  headers[0] = "query type";
  headers.unshift("species");
  headers.splice(2, 0, "prey level");
  headers.splice(2, 0, "end year");
  headers.splice(2, 0, "start year");
  headers.splice(2, 0, "season");
  headers.splice(2, 0, "region");
  headers[headers.length] = "DataBase Timestamp"
  return headers;
};
