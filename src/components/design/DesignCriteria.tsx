import React from "react";

interface DesignCriteriaProps {
    onStartYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onEndYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onLevelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onMetricsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onSeasonsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const DesignCriteria = (props: DesignCriteriaProps) => {
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
                        From  <u>{}</u>  to  <u>{}</u> in <u>{}</u> over
                        the span of <u>{}</u>, the data includes <u>{}</u> and
                        is summarized at the level of <u>{}</u>.
                    </p>
                    <div className="section">
                        <p className="title is-size-1">The yellow eagle eats:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};