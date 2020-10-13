import { RECORDS_PER_SEASON, RECORDS_PER_DECADE, RECORDS_PER_DIET_TYPE } from "../../gql/queries"
import { useQuery } from "@apollo/client"
import { DesignLoadingPage } from "../design/DesignLoadingPage"
import { DesignGraph } from "../design/DesignGraph"
import { LogicErrorPage } from "./LogicErrorPage"
export enum LogicGraphTypes {
    RECORDS_PER_SEASON,
    RECORDS_PER_DIET_TYPE,
    RECORDS_PER_DECADE
}

export interface LogicGraphProps {
    graphType: LogicGraphTypes
    activeItem: string
}

export const LogicGraph = (props: LogicGraphProps) => {

    let query
    let title
    let options = {
        variables: {
            name: props.activeItem
        }
    }
    switch (props.graphType) {
        case (LogicGraphTypes.RECORDS_PER_SEASON):
            query = RECORDS_PER_SEASON
            title = "Records Per Season"
            break
        case (LogicGraphTypes.RECORDS_PER_DIET_TYPE):
            query = RECORDS_PER_DIET_TYPE
            title = "Records Per Diet Type"
            break
        case (LogicGraphTypes.RECORDS_PER_DECADE):
            query = RECORDS_PER_DECADE
            title = "Records Per Decade"
            break
        default:
            query = RECORDS_PER_SEASON
            title = "Records Per Season"
            break
    }
    const { loading, error, data } = useQuery(query, options)
    if (loading) return DesignLoadingPage();
    if (error) return LogicErrorPage({ hint: "general" })
    let graphData
    switch (props.graphType) {
        case (LogicGraphTypes.RECORDS_PER_SEASON):
            graphData = data.getRecordsPerSeason
            break
        case (LogicGraphTypes.RECORDS_PER_DIET_TYPE):
            graphData = data.getRecordsPerDietType
            break
        case (LogicGraphTypes.RECORDS_PER_DECADE):
            graphData = data.getRecordsPerDecade
            break
        default:
            graphData = data.getRecordsPerSeason
            break
    }

    if (loading) return DesignLoadingPage();
    if (error) return LogicErrorPage({ hint: "general" })
    return DesignGraph({ data: graphData, title: title })

}