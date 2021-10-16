import { useQuery, useReactiveVar } from "@apollo/client";
import React from "react";
import { ActiveItemVar } from "../../cache";
import { GET_PENDING_DIET2 } from "../../gql/queries";
import { DesignAdminDashboard } from "../design/DesignAdminDashboard";

export const LogicAdminDashboard = () => {
    let pendingData;

    const query = GET_PENDING_DIET2;
    const { loading, error, data } = useQuery(query);

    console.log("hi")
    console.log(data)

    if (data) {
        pendingData = data.getPendingDiet;
    }

    



    return DesignAdminDashboard({
        pendingData
    });
}