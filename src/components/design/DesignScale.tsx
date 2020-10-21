import React from "react"
import {ContinuousColorLegend} from 'react-vis';

export interface DesignScaleProps {
}

export const DesignScale = () => {
    return (
    <div className="">
        <ContinuousColorLegend startTitle={"0 record"} midTitle={"35 records"} endTitle={"70 records"}startColor={"white"} midColor={"ffae1a"} endColor={"#b15900"} width={100} height = {100}/>
    </div>
    )
}