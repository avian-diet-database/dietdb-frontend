import React from "react";
import { LogicDropdown } from "../logic/LogicDropdown"

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
        <div className="box">
            <div className="content is-7 has-text-centered">
                Modify the table by changing the criteria below!!!
            </div>
            <div className="content has-text-centered is-size-4">
                From  <LogicDropdown criteriaTitle="Start Year" criteriaOptions={["1", "2", "3"]} onChange={props.onStartYearChange} />  to  <LogicDropdown criteriaTitle="End Year" criteriaOptions={["4", "5", "6"]} onChange={props.onEndYearChange} /> in <LogicDropdown criteriaTitle="Regions" criteriaOptions={["North", "South", "East"]} onChange={props.onRegionChange} /> over
                        the span of <LogicDropdown criteriaTitle="Seasons" criteriaOptions={["Fall", "Witner", "Spring"]} onChange={props.onSeasonsChange} />, the data includes <LogicDropdown criteriaTitle="Metrics" criteriaOptions={["Fall", "Witner", "Spring"]} onChange={props.onMetricsChange} /> and
                        is summarized at the level of <LogicDropdown criteriaTitle="Level" criteriaOptions={["Kingdom", "Phylum", "Order"]} onChange={props.onLevelChange} />.
                    </div>
        </div>
    );
};