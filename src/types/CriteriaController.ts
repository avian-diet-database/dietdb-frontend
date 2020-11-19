import { CriteriaState } from "../components/logic/CiteriaHooks";

export interface CriteriaValues {
  startYear: CriteriaState;
  endYear: CriteriaState;
  region: CriteriaState;
  season: CriteriaState;
  level: CriteriaState;
  stage: CriteriaState;
}

export interface CriteriaOptions {
  startYearOptions: string[];
  endYearOptions: string[];
  regionOptions: string[];
  seasonOptions: string[];
  levelOptions: string[];
  stageOptions: string[];
}
