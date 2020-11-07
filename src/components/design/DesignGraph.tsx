import React from "react";
import {
  FlexibleWidthXYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";
import { GraphColumn } from "../../types/GraphData";

export interface DesignGraphProps {
  data: GraphColumn[];
  title: string;
}
export const DesignGraph = (props: DesignGraphProps) => {
  console.log(props.data);
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
          <VerticalBarSeries barWidth={0.8} data={props.data} />
        </FlexibleWidthXYPlot>
      </div>
    </article>
  );
};
