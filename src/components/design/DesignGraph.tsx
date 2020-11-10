import { valueFromAST } from "graphql";
import React, { useState } from "react";
import {
  FlexibleWidthXYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair,
} from "react-vis";
import { GraphColumn } from "../../types/GraphData";

export interface DesignGraphProps {
  data: GraphColumn[];
  title: string;
}

export const DesignGraph = (props: DesignGraphProps) => {

  return (
    <article className="message">
      <div className="message-header">
        <p>{props.title}</p>
      </div>
      <div className="message-body ">
        <FlexibleWidthXYPlot
          height={165}
          xType={"ordinal"}
          className="container"
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis left={3} />
          <VerticalBarSeries
            barWidth={0.8}
            data={props.data}
          />
        </FlexibleWidthXYPlot>
      </div>
    </article>
  );
};
