import React from "react";
import { DesignSubmitData } from "../design/DesignSubmitData";
import { CREATE_PENDING_DIET_TOTAL } from "../../gql/mutations";
import { gql, useMutation } from "@apollo/client";
import { LogicErrorPage } from "./LogicErrorPage";
import { DesignLoadingPage } from "../design/DesignLoadingPage";

interface LogicSubmitDataProps {
    user: { 
        full_name: string,
            username:string,
            email:string,
            is_verified:string,
            is_admin:string,
    }
}

export const LogicSubmitData = (props: LogicSubmitDataProps) => {
    const [addData, { data, loading, error }] = useMutation(CREATE_PENDING_DIET_TOTAL);

    // if (loading) return DesignLoadingPage()
    // if (error) return LogicErrorPage({ errorMessage: "Uh no, an error has occurred :( please return to homepage!" + error.message })
    // console.log("sending this data: \n" + data);

    return DesignSubmitData({addData:addData, user:props.user});
}