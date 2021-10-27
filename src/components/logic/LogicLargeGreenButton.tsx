import { DesignLargeGreenButton } from "../design/DesignLargeGreenButton";

interface LogicLargeGreenButtonProps {
    buttonText: string;
    className: string;
}

export const LogicLargeGreenButton = (props: LogicLargeGreenButtonProps) => {
    return DesignLargeGreenButton(props);
}