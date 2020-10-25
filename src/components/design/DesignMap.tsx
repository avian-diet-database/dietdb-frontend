import React from "react";
import USAMap from "react-usa-map";
import { DesignScale } from "./DesignScale";

interface DesignMapProps {
  customFill: {}
}

export const DesignMap = (props: DesignMapProps) => {

  return (
    <div className="columns">
      <div className="column section container">
        <p className="is-size-3">Number of Studies Per State</p>
        <USAMap customize={props.customFill} />
        <DesignScale />
      </div>
    </div>
  );
};
