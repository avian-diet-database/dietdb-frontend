import { empty } from "@apollo/client";
import { DesignErrorPage } from "../design/DesignErrorPage";

interface LogicErrorPageProps {
    queryMessage:string;
}

export const LogicErrorPage = (props:LogicErrorPageProps) => {
    let emptyQuery = "These query criteria will return an empty table";
    let unknownError = "Please return home and try again!"
    return DesignErrorPage();
}