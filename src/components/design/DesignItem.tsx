import React from "react";
// import { Prey } from "../../types/Prey";
import { CriteriaController } from "../../types/CriteriaController"
import { LogicCriteria } from "../logic/LogicCriteria";
import { LogicTable } from "../logic/LogicTable";
export interface DesignItemProps {
  activeItem: string
  itemType: string
  sources: string[]
  controller: CriteriaController
}



export const DesignItem = (props: DesignItemProps) => {
  return <div className="hero-body">
    <div className="section">
      <div className="columns">
        <div className="column is-6">
          <LogicCriteria controller={props.controller} />
        </div>
        <div className="column is-6">
          <LogicTable activeItem={props.activeItem} itemType={props.itemType} controller={props.controller} />
        </div>
      </div>
    </div>
  </div>;
};
