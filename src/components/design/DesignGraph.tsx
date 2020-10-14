import React from "react"
import { XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from "react-vis"
import { GraphColumn } from "../../types/GraphData"

export interface DesignGraphProps {
    data: GraphColumn[]
    title: string
}
export const DesignGraph = (props: DesignGraphProps) => {
    return <article className="message is-dark">
        <div className="message-header">
            {props.title}
        </div>
        <div className="message-body">
                <XYPlot height={300} width={500} xType={"ordinal"} className="container">
                    <VerticalGridLines />
                    <HorizontalGridLines/>
                    <XAxis />
                    <YAxis left={3}/>
                    <VerticalBarSeries barWidth={1} data={props.data} />
                </XYPlot>
            </div>
    </article>
}