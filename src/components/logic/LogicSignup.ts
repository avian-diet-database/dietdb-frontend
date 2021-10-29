import React from "react";
import { DesignSignup } from "../design/DesignSignup";

interface LogicSignupProps {
    setIsSignup: React.Dispatch<React.SetStateAction<boolean>>,
}

export const LogicSignup = (props: LogicSignupProps) => {
    return DesignSignup(props);
}