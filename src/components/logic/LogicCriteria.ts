import { DesignCriteria } from "../design/DesignCriteria";
import { ItemType } from "../../App";
import { CriteriaController } from "../../types/CriteriaController";
import { useState } from "react";

interface LogicCriteriaProps {
  itemType: ItemType;
  activeItem: string;
  controller: CriteriaController;
}

export const LogicCriteria = (props: LogicCriteriaProps) => {
  const [editing, setEditing] = useState(false);

  const onStartYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.controller.updateStartYear(event.target.value);
  };
  const onEndYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.controller.updateEndYear(event.target.value);
  };
  const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.controller.updateRegion(event.target.value);
  };
  const onLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.controller.updateLevel(event.target.value);
  };
  const onMetricsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.controller.updateMetrics(event.target.value);
  };
  const onSeasonsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.controller.updateSeason(event.target.value);
  };
  const onStageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.controller.updateStage(event.target.value);
  };

  return DesignCriteria({
    itemType: props.itemType,
    activeItem: props.activeItem,
    onStartYearChange: onStartYearChange,
    startYearOptions: props.controller.startYearOptions,
    onEndYearChange: onEndYearChange,
    endYearOptions: props.controller.endYearOptions,
    onRegionChange: onRegionChange,
    regionOptions: props.controller.regionOptions,
    onLevelChange: onLevelChange,
    levelOptions: props.controller.levelOptions,
    onMetricsChange: onMetricsChange,
    metricsOptions: props.controller.metricsOptions,
    onSeasonsChange: onSeasonsChange,
    seasonsOptions: props.controller.seasonOptions,
    onStageChange: onStageChange,
    stageOptions: props.controller.stageOptions,
    editing,
    setEditing,
  });
};
