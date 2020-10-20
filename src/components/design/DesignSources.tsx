import React from "react"
export interface DesignSourcesProps {
    sources: string[]
}

export const DesignSources = (props: DesignSourcesProps) => {
    return <div className="message is-dark">
        <div className="message-header">
          Sources
        </div>
          <div className="message-body has-background-light">
            <div className="has-background-light has-text-dark is-scrollable">
             {props.sources.map((source) => {
                 return <div className="block" key={props.sources.indexOf(source)}> {source} </div>
             })}
          </div>
        </div>
      </div>
}
