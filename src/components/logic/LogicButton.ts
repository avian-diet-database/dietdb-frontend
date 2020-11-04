import { DesignButton } from "../design/DesignButton";

interface LogicButtonProps {
    buttonText: string;
    className: string;
}

export const LogicButton = (props: LogicButtonProps) => {
    return DesignButton(props);
}