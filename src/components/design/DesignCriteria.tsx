import React from "react";
import { LogicDropdown } from "../logic/LogicDropdown"

interface DesignCriteriaProps {
    activeItem: string
    onStartYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onEndYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onLevelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onMetricsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onSeasonsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const DesignCriteria = (props: DesignCriteriaProps) => {
    return (
<<<<<<< HEAD
        <div className="hero notification is-link is-vertical has-text-centered">
            <p className="subtitle is-size-4 section">
                    From  <u><LogicDropdown criteriaTitle="Start Year" criteriaOptions={["1", "2", "3"]} onChange={props.onStartYearChange} /></u>  to  <u><LogicDropdown criteriaTitle="End Year" criteriaOptions={["4", "5", "6"]} onChange={props.onEndYearChange} /></u> in <u><LogicDropdown criteriaTitle="Regions" criteriaOptions={["North", "South", "East"]} onChange={props.onRegionChange} /></u> over
                    the span of <u><LogicDropdown criteriaTitle="Seasons" criteriaOptions={["Fall", "Witner", "Spring"]} onChange={props.onSeasonsChange} /></u>, the data includes <u><LogicDropdown criteriaTitle="Metrics" criteriaOptions={["Fall", "Witner", "Spring"]} onChange={props.onMetricsChange} /></u> and
                    is summarized at the level of <u><LogicDropdown criteriaTitle="Level" criteriaOptions={["Kingdom", "Phylum", "Order"]} onChange={props.onLevelChange} /></u>.
            </p>
            <div className="section">
                <p className="title is-size-1">The {props.activeItem} eats:</p>
=======
        <div>
            <div className="tile is-parent">
                <div className="tile is-6 hero notification is-link is-vertical has-text-centered">
                    <div className="section is-7 has-text-centered has-text-light">
                        <p className="has-text-white">
                            Modify the table by changing the criteria below!!!
                        </p>
                    </div>
                    <div className="subtitle is-size-4 section">
                        From  <LogicDropdown criteriaTitle="Start Year" criteriaOptions={["1", "2", "3"]} onChange={props.onStartYearChange} />  to  <LogicDropdown criteriaTitle="End Year" criteriaOptions={["4", "5", "6"]} onChange={props.onEndYearChange} /> in <LogicDropdown criteriaTitle="Regions" criteriaOptions={["North", "South", "East"]} onChange={props.onRegionChange} /> over
                        the span of <LogicDropdown criteriaTitle="Seasons" criteriaOptions={["Fall", "Witner", "Spring"]} onChange={props.onSeasonsChange} />, the data includes <LogicDropdown criteriaTitle="Metrics" criteriaOptions={["Fall", "Witner", "Spring"]} onChange={props.onMetricsChange} /> and
                        is summarized at the level of <LogicDropdown criteriaTitle="Level" criteriaOptions={["Kingdom", "Phylum", "Order"]} onChange={props.onLevelChange} />.
                    </div>
                    <div className="section">
                        <p className="title is-size-1">The {props.activeItem} eats:</p>
                    </div>
                </div>
>>>>>>> 423bf6bf3707fd444e2299f5149e1e311015d9b5
            </div>
        </div>
    );
};