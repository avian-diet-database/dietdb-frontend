import { DesignDropdown } from "../design/DesignDropdown";

interface LogicDropdownProps {
    criteriaTitle : string;
    criteriaOptions : string[];
    //onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const LogicDropdown = (props: LogicDropdownProps) => {
    return DesignDropdown(props);
}