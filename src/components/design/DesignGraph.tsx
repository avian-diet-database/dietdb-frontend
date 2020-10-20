import React from "react"
import { FlexibleWidthXYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from "react-vis"
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
        <div className="message-body has-background-light">
                <FlexibleWidthXYPlot height={165} xType={"ordinal"} className="container">
                    <VerticalGridLines />
                    <HorizontalGridLines/>
                    <XAxis />
                    <YAxis left={3}/>
                    <VerticalBarSeries barWidth={1} data={props.data} />
                </FlexibleWidthXYPlot>
            </div>
    </article>
}
