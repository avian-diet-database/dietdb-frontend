import { CriteriaState } from "../components/logic/CiteriaHooks"

export interface CriteriaController {
    startYear: CriteriaState
    endYear: CriteriaState
    region: CriteriaState
    seasons: CriteriaState
    metrics: CriteriaState
    level: CriteriaState
    startYearOptions: string[]
    endYearOptions: string[]
    regionOptions: string[]
    seasonsOptions: string[]
    metricsOptions: string[]
    levelOptions: string[]
    updateStartYear: React.Dispatch<string>
    updateEndYear: React.Dispatch<string>
    updateRegion: React.Dispatch<string>
    updateSeasons: React.Dispatch<string>
    updateMetrics: React.Dispatch<string>
    updateLevel: React.Dispatch<string>
}