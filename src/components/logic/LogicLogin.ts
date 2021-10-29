import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import React from "react";
import { DesignLogin } from "../design/DesignLogin";

interface LogicLoginProps {
    setUser:any,
}

export const LogicLogin = (props: LogicLoginProps) => {
    return DesignLogin(props);
}