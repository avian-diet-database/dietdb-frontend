import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_PREY_OF_SOURCES } from "../../gql/queries";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { LogicErrorPage } from "../logic/LogicErrorPage";
import { DesignSources } from "../design/DesignSources";
import { ActiveItemTypeVar, ItemType } from "../../cache";

export const LogicSources = () => {
  const activeItemType = useReactiveVar(ActiveItemTypeVar);
  const query =
    activeItemType === ItemType.PREDATOR
      ? GET_PREY_OF_SOURCES
      : GET_PREY_OF_SOURCES;

  const { loading, error, data } = useQuery(query);
  if (loading) return DesignLoadingPage();
  if (error)
    return LogicErrorPage({
      errorMessage: "Uh no, an error has occurred: " + error.message,
    });
  return DesignSources({ sources: data.getPreyOfSources });
};
