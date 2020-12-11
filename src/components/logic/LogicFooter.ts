import { useQuery } from "@apollo/client";
import { GET_DATABASE_STATS } from "../../gql/queries";
import { DesignFooter } from "../design/DesignFooter";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { LogicErrorPage } from "./LogicErrorPage";

interface LogicFooterProps {
}

let databaseTime = ""

export const LogicTime = () => {

    const query = GET_DATABASE_STATS;
    const { loading, error, data} = useQuery(query);
    if (loading) return DesignLoadingPage()
    if (error) return LogicErrorPage({ errorMessage: "Uh no, an error has occurred :( please return to homepage!" + error.message })
    const arr = data.getAvianTableStats;
    
    let lastUpdated = arr.lastUpdated;

    databaseTime = lastUpdated;
    return lastUpdated;
}

export const getTime = () => {
    return databaseTime;
}

export const LogicFooter = () => {
    let time = LogicTime();
    return DesignFooter({lastUpdated:time});
}