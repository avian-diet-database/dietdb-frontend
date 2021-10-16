import { DesignGreenButton } from "../design/DesignGreenButton";

interface LogicGreenButtonProps {
    buttonText: string;
    className: string;
}

export const LogicGreenButton = (props: LogicGreenButtonProps) => {
    return DesignGreenButton(props);
}