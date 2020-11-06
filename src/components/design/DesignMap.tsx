import React from "react";
import USAMap from "react-usa-map";
import { DesignScale } from "./DesignScale";

interface DesignMapProps {
  customFill: {};
}

export const DesignMap = (props: DesignMapProps) => {
  return (
    <div className="message is-primary">
      <div className="message-header">Number of Records Per State</div>
      <div className="message-body columns">
        <div className="column">
          <div className="has-text-centered">
            <USAMap height={150} width={300} customize={props.customFill} />
          </div>
        </div>
        <div className="column">
          <div className="levels">
            <div className="level"></div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="level"><DesignScale /></div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
