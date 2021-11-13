import React from "react";
import { DesignResetPassword } from "../design/DesignResetPassword";

interface LogicResetProps {
    setIsReset: React.Dispatch<React.SetStateAction<boolean>>,
}

export const LogicResetPassword = (props: LogicResetProps) => {
    return DesignResetPassword(props);
}