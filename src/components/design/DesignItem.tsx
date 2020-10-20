import React from "react";
// import { Prey } from "../../types/Prey";
import { CriteriaController } from "../../types/CriteriaController"
import { LogicCriteria } from "../logic/LogicCriteria";
import { LogicTable } from "../logic/LogicTable";
import { LogicGraph, LogicGraphTypes } from "../logic/LogicGraph"
import { LogicSources } from "../logic/LogicSources"
import { ItemType } from "../../App"
<<<<<<< HEAD
import { LogicButton } from "../logic/LogicButton";
import { LogicHome } from "../logic/LogicHome";
import { DesignDownload } from "./DesignDownload";
import { DesignMap } from "./DesignMap";
=======
>>>>>>> d461563f7016192674dc6a957f904a3c255396d2
export interface DesignItemProps {
  activeItem: string
  itemType: ItemType
  numStudies: number
  numRecords: number
  controller: CriteriaController
}


// Note: these columns are lazy and unfriendly to mobile.
export const DesignItem = (props: DesignItemProps) => {
  return <div className="hero-body">
    <div className="section">
          <div className="notification is-light has-text-dark">
            <div className="content has-text-centered is-size-2">
             {props.numRecords} total records from {props.numStudies} total studies 
            </div>
          </div>
      <div className="columns">
        <div className="column is-6">
          <LogicCriteria controller={props.controller} />
          <LogicTable activeItem={props.activeItem} itemType={props.itemType} controller={props.controller} />
        </div>
        <div className="column is-6">
          <LogicGraph graphType={LogicGraphTypes.RECORDS_PER_SEASON} activeItem={props.activeItem} />
          <LogicGraph graphType={LogicGraphTypes.RECORDS_PER_DECADE} activeItem={props.activeItem} />
          <LogicGraph graphType={LogicGraphTypes.RECORDS_PER_DIET_TYPE} activeItem={props.activeItem} />
        </div>
      </div>
    </div>
    {/*Columns End*/}
   <LogicSources activeItem={props.activeItem} itemType={props.itemType} />
  </div>;
};
