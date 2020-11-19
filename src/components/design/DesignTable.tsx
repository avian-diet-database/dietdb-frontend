import React from "react";
import { DesignDownload } from "./DesignDownload";
import { TableController } from "../../types/TableController";
import { DesignTableHeader } from "./DesignTableHeader";
import { LogicItemLink } from "../logic/LogicItemLink";
import { TableSort } from "../logic/TableSorting";
import { useReactiveVar } from "@apollo/client";
import {
  ActiveItemVar,
  RegionVar,
  SeasonVar,
  StartYearVar,
  EndYearVar,
  LevelVar,
  ActiveItemTypeVar,
  ItemType,
} from "../../cache";
import { CriteriaValues } from "../../types/CriteriaController";

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
              <DesignTableHeader
                sortedBy={props.sortedBy}
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
                        resetTable={props.controller.resetTable}
                      />
                    ) : (
                      <LogicItemLink
                        itemType={ItemType.PREDATOR}
                        itemName={item["common_name"]}
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
