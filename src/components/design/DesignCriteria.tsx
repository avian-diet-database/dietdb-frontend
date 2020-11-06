import React from "react";
import { ItemType } from "../../App";
import { LogicDropdown } from "../logic/LogicDropdown";
import { CriteriaController } from "../../types/CriteriaController";

interface DesignCriteriaProps {
  itemType: ItemType;
  controller: CriteriaController;
  activeItem: string;
  editing: boolean;
  setEditing: React.Dispatch<boolean>;
  onStartYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onEndYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onLevelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onMetricsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSeasonsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onStageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DesignCriteria = (props: DesignCriteriaProps) => {
  return (
    <div className="message is-primary">
      <div className="message-body is-size-5">
        <div className="block">
          {"From "}
          {
            <LogicDropdown
              criteriaOptions={props.controller.startYearOptions}
              onChange={props.onStartYearChange}
            />
          }
          {" to "}
          <LogicDropdown
            criteriaOptions={props.controller.endYearOptions}
            onChange={props.onEndYearChange}
          />{" "}
          in{" "}
          <LogicDropdown
            criteriaOptions={props.controller.regionOptions}
            onChange={props.onRegionChange}
          />{" "}
          over the span of{" "}
          <LogicDropdown
            criteriaOptions={props.controller.seasonOptions}
            onChange={props.onSeasonsChange}
          />
          , the data includes{" "}
          <LogicDropdown
            criteriaOptions={props.controller.metricsOptions}
            onChange={props.onMetricsChange}
          />{" "}
          {props.itemType === ItemType.PREDATOR ? (
            <div>
              and is summarized at the level of{" "}
              <LogicDropdown
                criteriaOptions={props.controller.levelOptions}
                onChange={props.onLevelChange}
              />
            </div>
          ) : (
            <div>
              and is of the stage{" "}
              <LogicDropdown
                criteriaOptions={props.controller.stageOptions}
                onChange={props.onStageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
