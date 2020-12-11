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
          {"...from "}
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
          over {" "}
          <LogicDropdown
            criteriaOptions={props.criteria.seasonOptions}
            onChange={props.onSeasonsChange}
          />
          {isPredator ? (
            <div>
              , summarized at the level of prey{" "}
              <LogicDropdown
                criteriaOptions={props.criteria.levelOptions}
                onChange={props.onLevelChange}
              />
            </div>
          ) : (
            <div>
              , in the stage of{" "}
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
