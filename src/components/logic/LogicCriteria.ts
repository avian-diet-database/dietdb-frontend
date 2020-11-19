import { DesignCriteria } from "../design/DesignCriteria";
import {
  StartYearVar,
  EndYearVar,
  RegionVar,
  LevelVar,
  SeasonVar,
  StageVar,
  CriteriaOptionsVar,
  ItemType,
} from "../../cache";
import { useReactiveVar } from "@apollo/client";

interface LogicCriteriaProps {
  activeItem: string;
  activeItemType: ItemType;
}
export const LogicCriteria = (props: LogicCriteriaProps) => {
  const criteria = useReactiveVar(CriteriaOptionsVar);

  const onStartYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    StartYearVar(event.target.value);
  };
  const onEndYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    EndYearVar(event.target.value);
  };
  const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    RegionVar(event.target.value);
  };
  const onLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    LevelVar(event.target.value);
  };
  const onSeasonsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    SeasonVar(event.target.value);
  };
  const onStageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    StageVar(event.target.value);
  };

  return DesignCriteria({
    ...props,
    criteria,
    onStartYearChange,
    onEndYearChange,
    onRegionChange,
    onLevelChange,
    onSeasonsChange,
    onStageChange,
  });
};
