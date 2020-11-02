import React from "react";
import { ItemType } from "../../App";
import { LogicDropdown } from "../logic/LogicDropdown";

interface DesignCriteriaProps {
  itemType: ItemType;
  onStartYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  startYearOptions: string[];
  onEndYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  endYearOptions: string[];
  onRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  regionOptions: string[];
  onLevelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  levelOptions: string[];
  onMetricsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  metricsOptions: string[];
  onSeasonsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  seasonsOptions: string[];
  onStageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  stageOptions: string[];
}

export const DesignCriteria = (props: DesignCriteriaProps) => {
  return (
    <div className="box has-background-light">
      <div className="content has-text-dark has-text-centered is-size-4">
        From{" "}
        <LogicDropdown
          criteriaOptions={props.startYearOptions}
          onChange={props.onStartYearChange}
        />{" "}
        to{" "}
        <LogicDropdown
          criteriaOptions={props.endYearOptions}
          onChange={props.onEndYearChange}
        />{" "}
        in{" "}
        <LogicDropdown
          criteriaOptions={props.regionOptions}
          onChange={props.onRegionChange}
        />{" "}
        over the span of{" "}
        <LogicDropdown
          criteriaOptions={props.seasonsOptions}
          onChange={props.onSeasonsChange}
        />
        , the data includes{" "}
        <LogicDropdown
          criteriaOptions={props.metricsOptions}
          onChange={props.onMetricsChange}
        />{" "}
        {props.itemType === ItemType.PREDATOR ? (
          <div>
            and is summarized at the level of{" "}
            <LogicDropdown
              criteriaOptions={props.levelOptions}
              onChange={props.onLevelChange}
            />
          </div>
        ) : (
          <div>
            and is of the stage{" "}
            <LogicDropdown
              criteriaOptions={props.stageOptions}
              onChange={props.onStageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};
