import { DesignDropdown } from "../design/DesignDropdown";

interface LogicDropdownProps {
    criteriaTitle: string
    criteriaOptions: string[]
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const LogicDropdown = (props: LogicDropdownProps) => {
    return DesignDropdown(props);
}