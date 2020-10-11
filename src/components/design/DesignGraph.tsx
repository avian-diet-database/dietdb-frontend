import React from "react"
import { XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from "react-vis"
import { GraphColumn } from "../../types/GraphData"

export interface DesignGraphProps {
    data: GraphColumn[]
}
export const DesignGraph = (props: DesignGraphProps) => {
    const data = [
        { x: "1", y: 8 },
        { x: "2", y: 5 },
        { x: "3", y: 4 },
        { x: "4", y: 9 },
        { x: "5", y: 1 },
        { x: "6", y: 7 },
        { x: "0", y: 6 },
        { x: "7", y: 3 },
        { x: "8", y: 2 },
        { x: "9", y: 0 }
    ]
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