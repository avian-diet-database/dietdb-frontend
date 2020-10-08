import { DesignItem } from "../design/DesignItem";
import { CriteriaController } from "../../types/CriteriaController"
import { GET_PREDATOR_OF, GET_PREY_OF } from "../../gql/queries"
import { useQuery } from "@apollo/client"
import { useState } from "react"

interface LogicItemProps {
  activeItem: string;
  itemType: string;
}

export const LogicItem = (props: LogicItemProps) => {

  // Incorporate all the options here, need lots of useStates to manage these. 
  const [startYear, updateStartYear] = useState("")
  const [endYear, updateEndYear] = useState("")
  const [seasons, updateSeasons] = useState("")
  const [region, updateRegion] = useState("")
  const [metrics, updateMetrics] = useState("")
  const [level, updateLevel] = useState("")
  const controller: CriteriaController = {
    startYear: startYear,
    updateStartYear: updateStartYear,
    endYear: endYear,
    updateEndYear: updateEndYear,
    seasons: seasons,
    updateSeasons: updateSeasons,
    region: region,
    updateRegion: updateRegion,
    metrics: metrics,
    updateMetrics: updateMetrics,
    level: level,
    updateLevel: updateLevel
  }

  //Fetch the data for the active item.
  const query = props.itemType === "Predator" ? GET_PREY_OF : GET_PREDATOR_OF
  const options = {
    variables: {
      name: props.activeItem,
      startYear: startYear,
      endYear: endYear,
      seasons: seasons,
      region: region,
      metrics: metrics,
      level: level
    }
  }
  const { loading, error, data } = useQuery(query, options)

  //Because this is where the fetching the actual data happens, this is where filtering needs to happen as well.
  //Pass the data to the design.
  console.log(loading, error, data);
  if (data) {
    return DesignItem({ prey: data.getPreyOf, sources: [], controller });
  } else {
    return DesignItem({ prey: [], sources: [], controller });
  }
};

