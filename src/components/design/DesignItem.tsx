import React from "react";
// import { Prey } from "../../types/Prey";
import { CriteriaController } from "../../types/CriteriaController"
import { LogicCriteria } from "../logic/LogicCriteria";
import { LogicTable } from "../logic/LogicTable";
import { LogicGraph, LogicGraphTypes } from "../logic/LogicGraph"
import { LogicSources } from "../logic/LogicSources"
import { ItemType } from "../../App"
export interface DesignItemProps {
  activeItem: string
  itemType: ItemType
  numStudies: number
  numRecords: number
  controller: CriteriaController
}



export const DesignItem = (props: DesignItemProps) => {
  return <div className="hero-body">
    <div className="section">
      <div className="columns">
        <div className="column is-6">
          <div className="content">
            {props.numStudies} total studies
          </div>
          <LogicCriteria controller={props.controller} />
          <LogicGraph graphType={LogicGraphTypes.RECORDS_PER_SEASON} activeItem={props.activeItem} />
          <LogicSources activeItem={props.activeItem} itemType={props.itemType} />
        </div>
        <div className="column is-6">
          <div className="content">
            {props.numRecords} total records
          </div>
          <LogicTable activeItem={props.activeItem} itemType={props.itemType} controller={props.controller} />
        </div>
      </div>
    </div>
  </div>;
};
