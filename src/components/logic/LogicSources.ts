import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_PREY_OF_SOURCES } from "../../gql/queries";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { LogicErrorPage } from "../logic/LogicErrorPage";
import { DesignSources } from "../design/DesignSources";
import { ActiveItemTypeVar, ItemType, ActiveItemVar } from "../../cache";

interface LogicSourcesProps {
  activeItem: string;
  activeItemType: ItemType;
}
export const LogicSources = (props: LogicSourcesProps) => {
  const query =
    props.activeItemType === ItemType.PREDATOR
      ? GET_PREY_OF_SOURCES
      : GET_PREY_OF_SOURCES;

  const skip = props.activeItem.length < 1;
  const { loading, error, data } = useQuery(query, { skip });
  if (loading) return DesignLoadingPage();
  if (error)
    return LogicErrorPage({
      errorMessage: "Uh no, an error has occurred: " + error.message,
    });

  return DesignSources({ sources: data ? data.getPreyOfSources : [] });
};
