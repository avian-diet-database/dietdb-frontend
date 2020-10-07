import React from "react";
import { Prey } from "../../types/Prey";
import { CriteriaController } from "../../types/CriteriaController"
export interface DesignItemProps {
  prey: Prey[]
  sources: string[]
  controller: CriteriaController
}

export const DesignItem = (props: DesignItemProps) => {
  return <div>
    {props.prey.map(item =>
      <div> {item.taxon} </div>
    )}
  </div>;
};

