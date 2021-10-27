import React from "react";
import { DesignSignup } from "../design/DesignSignup";
import { CREATE_USER }  from "../../gql/mutations";
import { FetchResult, MutationFunctionOptions, useMutation } from "@apollo/client";

interface LogicSignupProps {
    setIsSignup: React.Dispatch<React.SetStateAction<boolean>>,
    addUser:(options?: MutationFunctionOptions<any, Record<string, any>>) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
}

export const LogicSignup = (props: LogicSignupProps) => {
    return DesignSignup(props);
}