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
    
    let speciesCount = addComma(arr.numSpecies);
    let studiesCount = addComma(arr.numStudies);
    let recordsCount = addComma(arr.numRecords);



    return DesignStatistics({speciesCount:speciesCount, studiesCount:studiesCount, recordsCount:recordsCount});
}

let addComma = (inputNum:String) => {
    if(inputNum.length <= 3) {
        return inputNum;
    }
    let res = "";
    res = inputNum.substring(inputNum.length - 3) + res;
    inputNum = inputNum.substring(0, inputNum.length - 3);
    while(inputNum.length > 3) {
        res = inputNum.substring(inputNum.length - 3) + "," + res;
        inputNum = inputNum.substring(0, inputNum.length - 3);
    }
    return inputNum + "," + res;
}