import { empty } from "@apollo/client";
import { DesignErrorPage } from "../design/DesignErrorPage";

interface LogicErrorPageProps {
    errorMessage:string;
}

export const LogicErrorPage = (props:LogicErrorPageProps) => {
    return DesignErrorPage(props);
}