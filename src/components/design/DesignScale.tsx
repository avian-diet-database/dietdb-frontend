import React from "react";
import { ContinuousColorLegend } from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";

export interface DesignScaleProps {}

export const DesignScale = () => {
  return (
    <ContinuousColorLegend
      width={300}
      startTitle={"0 Studies"}
      midTitle={"35 Studies"}
      endTitle={"70+ Studies"}
      startColor={"#ffffff"}
      endColor={"#b15900"}
    />
  );
};

