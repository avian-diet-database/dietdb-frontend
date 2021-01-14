import {DesignDropdown} from "../design/DesignDropdown";

interface LogicDropdownProps {
  criteriaOptions: string[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  val: string
}

export const LogicDropdown =
    (props: LogicDropdownProps) => { return DesignDropdown(props);}
