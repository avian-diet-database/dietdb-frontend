import React from "react";
import { LogicDropdown } from "../logic/LogicDropdown";
import { ItemType, StartYearVar, EndYearVar, RegionVar, SeasonVar, LevelVar, StageVar } from "../../cache";
import { CriteriaOptions } from "../../types/CriteriaController";
import { useReactiveVar } from "@apollo/client";

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
  const startYear = useReactiveVar(StartYearVar);
  const endYear = useReactiveVar(EndYearVar);
  const region = useReactiveVar(RegionVar);
  const season = useReactiveVar(SeasonVar);
  const level = useReactiveVar(LevelVar);
  const stage = useReactiveVar(StageVar);

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
              val = {startYear}
            />
          }
          {" to "}
          <LogicDropdown
            criteriaOptions={props.criteria.endYearOptions}
            onChange={props.onEndYearChange}
            val={endYear}
          />{" "}
          in{" "}
          <LogicDropdown
            criteriaOptions={props.criteria.regionOptions}
            onChange={props.onRegionChange}
            val={region}
          />{" "}
          over {" "}
          <LogicDropdown
            criteriaOptions={props.criteria.seasonOptions}
            onChange={props.onSeasonsChange}
            val={season}
          />
          {isPredator ? (
            <div>
              , summarized at the level of prey{" "}
              <LogicDropdown
                criteriaOptions={props.criteria.levelOptions}
                onChange={props.onLevelChange}
                val={level}
              />
            </div>
          ) : (
            <div>
              , in the stage of{" "}
              <LogicDropdown
                criteriaOptions={props.criteria.stageOptions}
                onChange={props.onStageChange}
                val={stage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
