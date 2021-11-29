import { useQuery, useReactiveVar } from "@apollo/client";
import React from "react";
import { ActiveItemVar } from "../../cache";
import { GET_PENDING_DIET } from "../../gql/queries";
import { DesignAdminDashboard } from "../design/DesignAdminDashboard";

export const LogicAdminDashboard = () => {
    let pendingData;

    const query = GET_PENDING_DIET;
    const { loading, error, data } = useQuery(query, { pollInterval: 250 });

    if (data) {
        pendingData = data.getPendingDiet;
    }

    return DesignAdminDashboard({
        pendingData
    });
}