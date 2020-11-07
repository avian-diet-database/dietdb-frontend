import React from "react";
import USAMap from "react-usa-map";
import { DesignScale } from "./DesignScale";

interface DesignMapProps {
  customFill: {};
}

export const DesignMap = (props: DesignMapProps) => {
  return (
    <div className="message">
      <div className="message-header">Number of Records Per State</div>
      <div className="message-body">
        <div className="has-text-centered">
          <USAMap height={150} width={300} customize={props.customFill} />
        </div>
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <DesignScale />
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
};
