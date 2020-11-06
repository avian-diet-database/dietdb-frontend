import React from "react";
import { ContinuousColorLegend } from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";

export interface DesignScaleProps {}

export const DesignScale = () => {
  return (
    <ContinuousColorLegend
      width={200}
      startTitle={"0 Records"}
      endTitle={"70+ Records"}
      startColor={"#CED5D3"}
      endColor={"#b15900"}
    />
  );
};
