import React from "react";
import { LogicErrorPage } from "../logic/LogicErrorPage";
import { DesignDownload } from "./DesignDownload";
import { TableController } from "../../types/TableController";
import { DesignTableHeader } from "./DesignTableHeader";
import { ItemType } from "../../App";
import { LogicItemLink } from "../logic/LogicItemLink";
import { TableSort } from "../logic/TableSorting";

interface DesignTableProps {
  data: any[];
  controller: TableController;
  activeItem: string;
  itemType: ItemType;
  sortedBy: TableSort;
  options: {
    variables: {
      name: string;
      startYear: string;
      endYear: string;
      season: string;
      region: string;
      metrics: string;
      level: string;
    };
  };
  // A callback for updating the selected item.
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  // Dispatcher for active item type.
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
  numRecords: number;
  numStudies: number;
}

export const DesignTable = (props: DesignTableProps) => {
  let metadata = [
    "Species: " + props.activeItem,
    "Region: " + props.options.variables.region,
    "Season: " + props.options.variables.season,
    "startYear: " + props.options.variables.startYear,
    "endYear: " + props.options.variables.endYear,
    "Metrics: " + props.options.variables.metrics,
    "Level: " + props.options.variables.level,
    "Table Timestamp: " + new Date(),
  ];

  return (
    <div className="message">
      <div className="message-header">
        Data from {props.numRecords} records and {props.numStudies} studies.
        <DesignDownload
          csvData={downloadData(props.data, metadata)}
          fileName={"avianDietTable"}
        />
      </div>
      <div className="message-body">
        <div className="is-scrollable">
          <table className="table is-striped is-fullwidth">
            <thead>
              <DesignTableHeader
                sortedBy={props.sortedBy}
                itemType={props.itemType}
                controller={props.controller}
              />
            </thead>
            <tbody>
              {props.data.map((item) => {
                return (
                  <tr key={props.data.indexOf(item)}>
                    {item["taxon"] ? (
                      <LogicItemLink
                        itemType={ItemType.PREY}
                        itemName={item["taxon"]}
                        updateItemType={props.updateItemType}
                        updateActiveItem={props.updateActiveItem}
                        resetTable={props.controller.resetTable}
                      />
                    ) : (
                      <LogicItemLink
                        itemType={ItemType.PREDATOR}
                        itemName={item["common_name"]}
                        updateItemType={props.updateItemType}
                        updateActiveItem={props.updateActiveItem}
                        resetTable={props.controller.resetTable}
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
              <DesignTableHeader
                sortedBy={props.sortedBy}
                itemType={props.itemType}
                controller={props.controller}
              />
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
  resData.push(metadata);
  resData.push([]);
  resData.push(headers);
  let body = [];
  for (let item of preyData) {
    body = Object.values(item);
    resData.push(body);
  }
  return resData;
};
