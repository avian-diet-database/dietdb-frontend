import React from "react"
import { XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from "react-vis"
import { GraphColumn } from "../../types/GraphData"

export interface DesignGraphProps {
    data: GraphColumn[]
}
export const DesignGraph = (props: DesignGraphProps) => {
    return <div>
        <XYPlot height={300} width={500} xType={"ordinal"}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries barWidth={1} data={props.data} />
        </XYPlot>
    </div>
}