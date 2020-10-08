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
  activeItem: string
}



export const DesignItem = (props: DesignItemProps) => {
<<<<<<< HEAD
  let nameList = props.prey.map(item =>
    <div key={item.wt_or_vol}> {item.taxon} </div>
  );
  return (
    <div className="tile is-parent">
      <div className="tile section">
        <LogicCriteria controller={props.controller} activeItem={props.activeItem} />
      </div>
      <div className="tile section">
        <LogicTable
          list={nameList}
        />
      </div>
    </div>)
    ;
=======
  return <div>
    <LogicCriteria controller={props.controller} activeItem={props.activeItem} />
    {props.prey.map(item =>
      <div key={props.prey.indexOf(item)}> {item.taxon} </div>
    )}
  </div>;
>>>>>>> 423bf6bf3707fd444e2299f5149e1e311015d9b5
};

