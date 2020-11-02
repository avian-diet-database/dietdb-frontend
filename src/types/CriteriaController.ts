import { CriteriaState } from "../components/logic/CiteriaHooks";

export interface CriteriaController {
  startYear: CriteriaState;
  endYear: CriteriaState;
  region: CriteriaState;
  season: CriteriaState;
  metrics: CriteriaState;
  level: CriteriaState;
  stage: CriteriaState;
  startYearOptions: string[];
  endYearOptions: string[];
  regionOptions: string[];
  seasonOptions: string[];
  metricsOptions: string[];
  levelOptions: string[];
  stageOptions: string[];
  updateStartYear: React.Dispatch<string>;
  updateEndYear: React.Dispatch<string>;
  updateRegion: React.Dispatch<string>;
  updateSeason: React.Dispatch<string>;
  updateMetrics: React.Dispatch<string>;
  updateLevel: React.Dispatch<string>;
  updateStage: React.Dispatch<string>;
}

