import React from "react";
import { ContinuousColorLegend } from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";

export interface DesignScaleProps {
  maxScale:number;
}

export const DesignScale = (props:DesignScaleProps) => {
  
  let maxTitle = props.maxScale + " Records"

  if(props.maxScale == 0) {
    return <p>0 US States data</p>
  }

  return (
    <ContinuousColorLegend
      width={200}
      startTitle={"0 Records"}
      endTitle={maxTitle}
      startColor={"#CED5D3"}
      endColor={"#b15900"}
    />
  );
};
