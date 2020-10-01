import { DesignButton } from "../design/DesignButton";

interface LogicButtonProps {
    buttonText: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const LogicButton = (props: LogicButtonProps) => {
    return DesignButton(props);
}