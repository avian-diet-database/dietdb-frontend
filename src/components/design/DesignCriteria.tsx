import React from "react";

interface DesignCriteriaProps {
    startYear : number;
    endYear : number;
    region : string;
    seasons : string;
    metrics : string;
    level : string;
}

export const DesignCriteria = (props : DesignCriteriaProps) => {
    return (
        <div>
            <div className="tile is-parent">
                <div className="tile is-6 hero notification is-link is-vertical has-text-centered">
                    <div className="section is-7 has-text-centered has-text-light">
                        <p className="has-text-white">
                            Modify the table by changing the criteria below!!!
                        </p>
                    </div>
                    <p className="subtitle is-size-4 section">
                        From  <u>{props.startYear}</u>  to  <u>{props.endYear}</u> in <u>{props.region}</u> over 
                        the span of <u>{props.seasons}</u>, the data includes <u>{props.metrics}</u> and 
                        is summarized at the level of <u>{props.level}</u>.
                    </p>
                    <div className="section">
                        <p className="title is-size-1">The yellow eagle eats:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};