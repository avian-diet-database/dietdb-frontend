import React from "react";
import { Prey } from "../../types/Prey";
import { CriteriaController } from "../../types/CriteriaController"
import { LogicCriteria } from "../logic/LogicCriteria";
import { LogicTable } from "../logic/LogicTable";
import { LogicLoadingPage } from "../logic/LogicLoadingPage";
import { LogicErrorPage } from "../logic/LogicErrorPage";
export interface DesignItemProps {
  prey: Prey[]
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
          <div className="content has-text-centered">
            {props.prey.map(item =>
              <div key={props.prey.indexOf(item)}> {item.taxon} </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>;
};
