import { useQuery, useReactiveVar } from "@apollo/client";
import React from "react";
import { ActiveItemVar } from "../../cache";
import { GET_PENDING_DIET, GET_APPROVAL_HISTORY } from "../../gql/queries";
import { DesignAdminDashboard } from "../design/DesignAdminDashboard";

export const LogicAdminDashboard = () => {
    let pendingData;
    let approvalData;

    const query = GET_PENDING_DIET;
    const { loading, error, data } = useQuery(query, { pollInterval: 250 });

    const approval_query = GET_APPROVAL_HISTORY;
    const { loading: approval_loading, error: approval_error, data: approval_data } = useQuery(approval_query, { pollInterval: 250 });

    if (data) {
        pendingData = data.getPendingDiet;
        console.log(pendingData);
    }

    if (approval_data) {
        approvalData = approval_data.getApprovalHistory;
        console.log(approvalData);
    }

    return DesignAdminDashboard({
        pendingData,
        approvalData
    });
}