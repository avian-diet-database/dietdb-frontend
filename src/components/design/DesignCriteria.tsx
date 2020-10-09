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
    let startYear = ["1900", "1910", "1920", "1930", "1940", "1950", "1960", "1970", "1980", "1990"];
    let endYear = ["1910", "1920", "1930", "1940", "1950", "1960", "1970", "1980", "1990", "2020"];
    let region = ["North America", "South America", "Asia", "Africa", "Australia"];
    let season = ["Winter", "Spring", "Summer", "Fall"];
    let metrics = ["% Occurrence", "% By item", "% By Weight/Volume"];
    let level = ["Order", "Kingdom", "Phylum", "Class", "Family", "Genus", "Species"];
    return (
        <div className="box hero is-link">
            <div className="content is-7 has-text-centered">
                Modify the table by changing the criteria below!!!
            </div>
            <div className="content has-text-centered is-size-4">
                From  <LogicDropdown criteriaTitle="Start Year" criteriaOptions={startYear} onChange={props.onStartYearChange} />  to  <LogicDropdown criteriaTitle="End Year" criteriaOptions={endYear} onChange={props.onEndYearChange} /> in <LogicDropdown criteriaTitle="Regions" criteriaOptions={region} onChange={props.onRegionChange} /> over
                        the span of <LogicDropdown criteriaTitle="Seasons" criteriaOptions={season} onChange={props.onSeasonsChange} />, the data includes <LogicDropdown criteriaTitle="Metrics" criteriaOptions={metrics} onChange={props.onMetricsChange} /> and
                        is summarized at the level of <LogicDropdown criteriaTitle="Level" criteriaOptions={level} onChange={props.onLevelChange} />.
            </div>
        </div>
    );
};