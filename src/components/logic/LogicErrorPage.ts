import { empty } from "@apollo/client";
import { DesignErrorPage } from "../design/DesignErrorPage";

interface LogicErrorPageProps {
    hint:string;
}

export const LogicErrorPage = (props:LogicErrorPageProps) => {
    let message = "";
    if(props.hint == "empty") {
        message = "These query criteria will return an empty table";
    } else if(props.hint == "general") {
        message = "Please return home and try again!";
    }
    return DesignErrorPage(message);
}