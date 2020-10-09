import { DesignItem } from "../design/DesignItem";
import { CriteriaController } from "../../types/CriteriaController"
import { GET_PREDATOR_OF, GET_PREY_OF } from "../../gql/queries"
import { useQuery } from "@apollo/client"
import { useState } from "react"
import { useStartYear, useEndYear, useRegion, useSeasons, useMetrics, useLevel } from "./CiteriaHooks"
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { DesignErrorPage } from "../design/DesignErrorPage";

interface LogicItemProps {
  activeItem: string;
  itemType: string;
}

export const LogicItem = (props: LogicItemProps) => {

  // Incorporate all the options here, need lots of useStates to manage these. 
  const [startYear, updateStartYear, startYearOptions] = useStartYear();
  const [endYear, updateEndYear, endYearOptions] = useEndYear();
  const [seasons, updateSeasons, seasonsOptions] = useSeasons();
  const [region, updateRegion, regionOptions] = useRegion();
  const [metrics, updateMetrics, metricsOptions] = useMetrics();
  const [level, updateLevel, levelOptions] = useLevel();
  const controller: CriteriaController = {
    startYear,
    updateStartYear,
    startYearOptions,

    endYear,
    updateEndYear,
    endYearOptions,

    seasons,
    updateSeasons,
    seasonsOptions: seasonsOptions,

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

  //Fetch the data for the active item.
  const query = props.itemType === "Predator" ? GET_PREY_OF : GET_PREDATOR_OF
  const options = {
    variables: {
      name: props.activeItem,
      startYear: parseInt(startYear.value),
      endYear: parseInt(endYear.value),
      seasons: seasons.value,
      region: region.value,
      metrics: metrics.value,
      level: "prey_" + level.value
    }
  }
  console.log(options);
  const { loading, error, data } = useQuery(query, options)

  //Because this is where the fetching the actual data happens, this is where filtering needs to happen as well.
  //Pass the data to the design.
  console.log(loading, error, data);
  if (loading) return DesignLoadingPage()
  if (error) return DesignErrorPage()
  return DesignItem({ prey: data.getPreyOf, sources: [], controller })
};

