import { useQuery } from "@apollo/client";
import { GET_PREY_OF_SOURCES } from "../../gql/queries";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { LogicErrorPage } from "../logic/LogicErrorPage";
import { DesignSources } from "../design/DesignSources";
import { ItemType } from "../../App";
import { CriteriaController } from "../../types/CriteriaController";

export interface LogicSourceProps {
  activeItem: string;
  itemType: ItemType;
  controller: CriteriaController;
}

export const LogicSources = (props: LogicSourceProps) => {
  const options = {
    variables: {
      name: props.activeItem,
      level: props.controller.level.value,
      metrics: props.controller.metrics.value,
      startYear: props.controller.startYear.value,
      endYear: props.controller.endYear.value,
      season: props.controller.season.value,
      region: props.controller.region.value,
    },
  };
  const query =
    props.itemType === ItemType.PREDATOR
      ? GET_PREY_OF_SOURCES
      : GET_PREY_OF_SOURCES;
  const { loading, error, data } = useQuery(query, options);
  if (loading) return DesignLoadingPage();
  if (error)
    return LogicErrorPage({
      errorMessage: "Uh no, an error has occurred: " + error.message,
    });
  return DesignSources({ sources: data.getPreyOfSources });
};
