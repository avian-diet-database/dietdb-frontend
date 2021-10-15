import React from "react";
import { DesignSubmitData } from "../design/DesignSubmitData";
// import { SUBMIT_DATA } from "../../gql/mutations";
import { gql, useMutation } from "@apollo/client";
import { LogicErrorPage } from "./LogicErrorPage";

export const LogicSubmitData = () => {
    const ADD_DATA = gql`
    mutation SubmitData($text: String!) {
        submitData(text: $text) {
        id
        text
        }
    }
    `;

    const [addData, {loading, error, data}] = useMutation(ADD_DATA);
    if (loading) return <p>LOADING MY FRIEND</p>
    if (error) return LogicErrorPage({ errorMessage: "Uh no, an error has occurred :( please return to homepage!" + error.message })
    console.log(data);

    return DesignSubmitData({addData:addData});
}