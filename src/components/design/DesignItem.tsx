import React from "react";
// import { Prey } from "../../types/Prey";
import { CriteriaController } from "../../types/CriteriaController";
import { LogicCriteria } from "../logic/LogicCriteria";
import { LogicTable } from "../logic/LogicTable";
import { LogicGraph, LogicGraphTypes } from "../logic/LogicGraph";
import { LogicSources } from "../logic/LogicSources";
import { ItemType } from "../../App";
import { LogicMap } from "../logic/LogicMap";
export interface DesignItemProps {
  activeItem: string;
  itemType: ItemType;
  numStudies: number;
  numRecords: number;
  controller: CriteriaController;
}

// Note: these columns are lazy and unfriendly to mobile.
export const DesignItem = (props: DesignItemProps) => {
  let isPredator = props.itemType == ItemType.PREDATOR;
  return (
    <div className="hero-body">
      <div className="section">
        <div className="columns">
          <div className="column is-6">
            <div className="notification is-light has-text-dark">
              <div className="content has-text-centered is-size-2">
                {props.numStudies} total studies
              </div>
            </div>
            <LogicCriteria controller={props.controller} />
            {isPredator ? (
              <div>
                <LogicGraph
                  graphType={LogicGraphTypes.RECORDS_PER_SEASON}
                  activeItem={props.activeItem}
                  controller={props.controller}
                />
                <LogicGraph
                  graphType={LogicGraphTypes.RECORDS_PER_DECADE}
                  activeItem={props.activeItem}
                  controller={props.controller}
                />
                <LogicGraph
                  graphType={LogicGraphTypes.RECORDS_PER_DIET_TYPE}
                  activeItem={props.activeItem}
                  controller={props.controller}
                />
              </div>
            ) : null}
          </div>
          <div className="column is-6">
            <div className="notification is-light has-text-dark">
              <div className="content has-text-centered is-size-2">
                {props.numRecords} total records
              </div>
            </div>
            <LogicTable
              activeItem={props.activeItem}
              itemType={props.itemType}
              controller={props.controller}
            />
            {isPredator ? (
              <LogicSources
                activeItem={props.activeItem}
                itemType={props.itemType}
              />
            ) : null}
          </div>
        </div>
        {isPredator ? <LogicMap activeItem={props.activeItem} /> : null}
      </div>
    </div>
  );
};
