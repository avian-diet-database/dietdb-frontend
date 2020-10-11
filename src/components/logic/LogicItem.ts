import { DesignItem } from "../design/DesignItem";
import { CriteriaController } from "../../types/CriteriaController"
// import { GET_PREDATOR_OF, GET_PREY_OF } from "../../gql/queries"
// import { useQuery } from "@apollo/client"
import { useStartYear, useEndYear, useRegion, useSeasons, useMetrics, useLevel } from "./CiteriaHooks"
// import { DesignLoadingPage } from "../design/DesignLoadingPage";
// import { DesignErrorPage } from "../design/DesignErrorPage";

interface LogicItemProps {
  activeItem: string;
  itemType: string;
}

export const LogicItem = (props: LogicItemProps) => {

  // Use the custom hooks to instantiate these variables.
  const [startYear, updateStartYear, startYearOptions] = useStartYear();
  const [endYear, updateEndYear, endYearOptions] = useEndYear();
  const [season, updateSeason, seasonOptions] = useSeasons();
  const [region, updateRegion, regionOptions] = useRegion();
  const [metrics, updateMetrics, metricsOptions] = useMetrics();
  const [level, updateLevel, levelOptions] = useLevel();
  // The CriteriaController is just a convenient container object to hold all this state.
  const controller: CriteriaController = {
    startYear,
    updateStartYear,
    startYearOptions,

    endYear,
    updateEndYear,
    endYearOptions,

    season,
    updateSeason,
    seasonOptions,

    region,
    updateRegion,
    regionOptions,

    metrics,
    updateMetrics,
    metricsOptions,

    level,
    updateLevel,
    levelOptions
  }

  return DesignItem({ activeItem: props.activeItem, itemType: props.itemType, sources: [], controller })
};

