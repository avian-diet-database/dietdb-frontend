import React from "react";
import { LogicDropdown } from "../logic/LogicDropdown";
import { ItemType } from "../../cache";
import { CriteriaOptions } from "../../types/CriteriaController";

interface DesignCriteriaProps {
  activeItemType: ItemType;
  activeItem: string;
  criteria: CriteriaOptions;
  onStartYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onEndYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onLevelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSeasonsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onStageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DesignCriteria = (props: DesignCriteriaProps) => {
  const isPredator = props.activeItemType === ItemType.PREDATOR;
  return (
    <div className="message is-primary">
      <div className="message-body is-size-5">
        <div className="block">
          {"From "}
          {
            <LogicDropdown
              criteriaOptions={props.criteria.startYearOptions}
              onChange={props.onStartYearChange}
            />
          }
          {" to "}
          <LogicDropdown
            criteriaOptions={props.criteria.endYearOptions}
            onChange={props.onEndYearChange}
          />{" "}
          in{" "}
          <LogicDropdown
            criteriaOptions={props.criteria.regionOptions}
            onChange={props.onRegionChange}
          />{" "}
          over the span of{" "}
          <LogicDropdown
            criteriaOptions={props.criteria.seasonOptions}
            onChange={props.onSeasonsChange}
          />
          {isPredator ? (
            <div>
              and summarized at the level of{" "}
              <LogicDropdown
                criteriaOptions={props.criteria.levelOptions}
                onChange={props.onLevelChange}
              />
            </div>
          ) : (
            <div>
              and is of the stage{" "}
              <LogicDropdown
                criteriaOptions={props.criteria.stageOptions}
                onChange={props.onStageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
