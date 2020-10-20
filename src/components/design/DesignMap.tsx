import React from 'react';
import USAMap from "react-usa-map";

interface DesignMapProps {
    activeItem:string;
}

export const numToColor = (count:number) => {
    if(count <= 0) {
        return "white";
    } else if(count <= 5) {
        return "red";
    } else if(count <= 10) {
        return "navy";
    } else if(count <= 15) {
        return "blue";
    } else if(count <= 20) {
        return "yellow";
    } else if(count <= 25) {
        return "pink";
    } else if(count <= 30) {
        return "black";
    } else if(count <= 35) {
        return "orange";
    } else if(count <= 40) {
        return "green";
    } else if(count <= 45) {
        return "gold";
    } else {
        return "brown";
    }
}

export const DesignMap = (props:DesignMapProps) => {

    let customConfig = () => {
        return{
            "NJ": {
                fill: "navy",
            },
            "NY": {
                fill: "#CC0000"
            },
            "NC": {
                fill: 'green'
            },
            "TX": {
                fill: 'yellow'
            },
            "FL": {
                fill: 'orange'
            },
            "CA": {
                fill: 'pink'
            }
        }
    }

    return (
        <div className="App">
            <p className="is-size-3">
                Number of Studies Per State
                {props.activeItem}
            </p>
            <USAMap customize={customConfig()}/>
        </div>
    )
}


