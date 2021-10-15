import React from "react";
import { DesignSubmitData } from "../design/DesignSubmitData";
import { TEST, TESTB } from "../../gql/mutations";
import { gql, useMutation } from "@apollo/client";
import { LogicErrorPage } from "./LogicErrorPage";
import { DesignLoadingPage } from "../design/DesignLoadingPage";

export const LogicSubmitData = () => {
    const [addData, { data, loading, error }] = useMutation(TESTB);

    // if (loading) return DesignLoadingPage()
    // if (error) return LogicErrorPage({ errorMessage: "Uh no, an error has occurred :( please return to homepage!" + error.message })
    // console.log("sending this data: \n" + data);

    return DesignSubmitData({addData:addData});
}