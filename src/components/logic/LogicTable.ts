import { DesignTable } from "../design/DesignTable";

interface LogicTableProps {
    list:JSX.Element[];
}

export const LogicTable = (props:LogicTableProps) => {
    return DesignTable(props);
}