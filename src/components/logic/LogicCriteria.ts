import { DesignCriteria } from "../design/DesignCriteria";

interface LogicCriteriaProps {
    startYear : number;
    endYear : number;
    region : string;
    seasons : string;
    metrics : string;
    level : string;
}

export const LogicCriteria = (props: LogicCriteriaProps) => {

    return DesignCriteria(props);
}