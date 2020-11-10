import { useQuery } from "@apollo/client";
import { GET_DATABASE_STATS } from "../../gql/queries";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { DesignStatistics } from "../design/DesignStatistics";
import { LogicErrorPage } from "./LogicErrorPage";

export interface LogicStatisticsProps {

}

export const LogicStatistics = () => {

    const query = GET_DATABASE_STATS;
    const { loading, error, data} = useQuery(query);
    if (loading) return DesignLoadingPage()
    if (error) return LogicErrorPage({ errorMessage: "Uh no, an error has occurred :( please return to homepage!" + error.message })
    const arr = data.getAvianTableStats;
    
    let speciesCount = arr.numSpecies;
    let studiesCount = arr.numStudies;
    let recordsCount = arr.numRecords;

    return DesignStatistics({speciesCount:speciesCount, studiesCount:studiesCount, recordsCount:recordsCount});
}