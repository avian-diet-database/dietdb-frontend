import React from "react";

interface DesignCriteriaProps {
}

export const DesignCriteria = () => {
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
                        From  <u>1980</u>  to  <u>2010</u>  in <u>all regions</u> over the span
                        of <u>all 4 seasons</u>, the data includes <u>all metrics</u> and is
                        summarized at the level of <u>order</u>.
                    </p>
                    <div className="section">
                        <p className="title is-size-1">The yellow eagle eats:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};