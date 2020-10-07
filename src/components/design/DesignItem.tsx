import React from "react";
import { Prey } from "../../types/Prey";
interface DesignItemProps {
  prey: Prey[];
  sources: string[];
}

export const DesignItem = (props: DesignItemProps) => {
  return <div>
    {props.prey.map(item =>
      <div> {item.wt_or_vol} </div>
    )}
  </div>;
};

