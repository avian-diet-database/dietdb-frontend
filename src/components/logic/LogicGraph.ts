import { RECORDS_PER_SEASON } from "../../gql/queries"
import { useQuery } from "@apollo/client"
import { DesignLoadingPage } from "../design/DesignLoadingPage"
import { DesignErrorPage } from "../design/DesignErrorPage"
import { DesignGraph } from "../design/DesignGraph"
export enum LogicGraphTypes {
    RECORDS_PER_SEASON
}

export interface LogicGraphProps {
    graphType: LogicGraphTypes
    activeItem: string
}

export const LogicGraph = (props: LogicGraphProps) => {

    let query
    let options = {
        variables: {
            name: props.activeItem
        }
    }
    switch (props.graphType) {
        case (LogicGraphTypes.RECORDS_PER_SEASON):
            query = RECORDS_PER_SEASON
            break
        default:
            query = RECORDS_PER_SEASON
            break
    }
    const { loading, error, data } = useQuery(query, options)

    if (loading) return DesignLoadingPage();
    if (error) return DesignErrorPage();
    return DesignGraph({ data: data.getRecordsPerSeason })

}