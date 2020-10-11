import React from "react"
export interface DesignSourcesProps {
    sources: string[]
}

export const DesignSources = (props: DesignSourcesProps) => {
    return <div>
        {props.sources.map((source) => {
            return <div key={props.sources.indexOf(source)}> {source} </div>
        })}
    </div>
}