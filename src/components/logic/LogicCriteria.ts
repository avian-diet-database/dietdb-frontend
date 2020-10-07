import { DesignCriteria } from "../design/DesignCriteria";
import { CriteriaController } from "../../types/CriteriaController"

interface LogicCriteriaProps {
    controller: CriteriaController
}


export const LogicCriteria = (props: LogicCriteriaProps) => {
    const onStartYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.controller.updateStartYear(event.target.value)
    };
    const onEndYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.controller.updateEndYear(event.target.value)
    };
    const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.controller.updateRegion(event.target.value)
    };
    const onLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.controller.updateLevel(event.target.value)
    };
    const onMetricsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.controller.updateMetrics(event.target.value)
    };
    const onSeasonsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.controller.updateSeasons(event.target.value)
    };

    return DesignCriteria({
        onStartYearChange: onStartYearChange,
        onEndYearChange: onEndYearChange,
        onRegionChange: onRegionChange,
        onLevelChange: onLevelChange,
        onMetricsChange: onMetricsChange,
        onSeasonsChange: onSeasonsChange
    });
}