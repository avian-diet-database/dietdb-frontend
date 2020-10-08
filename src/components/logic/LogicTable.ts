import { Prey } from "../../types/Prey";
import { DesignTable } from "../design/DesignTable";

interface LogicTableProps {
    prey: Prey[]
}

export const LogicTable = (props: LogicTableProps) => {
    return DesignTable(props);
}