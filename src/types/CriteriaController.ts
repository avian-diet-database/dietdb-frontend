export interface CriteriaController {
    startYear: string
    endYear: string
    region: string
    seasons: string
    metrics: string
    level: string
    updateStartYear: React.Dispatch<React.SetStateAction<string>>
    updateEndYear: React.Dispatch<React.SetStateAction<string>>
    updateRegion: React.Dispatch<React.SetStateAction<string>>
    updateSeasons: React.Dispatch<React.SetStateAction<string>>
    updateMetrics: React.Dispatch<React.SetStateAction<string>>
    updateLevel: React.Dispatch<React.SetStateAction<string>>
}