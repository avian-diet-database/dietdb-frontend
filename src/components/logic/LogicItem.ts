import { DesignItem } from "../design/DesignItem";
import { GET_PREDATOR_OF, GET_PREY_OF } from "../../gql/queries"
import { useQuery } from "@apollo/client"

interface LogicItemProps {
  activeItem: string;
  itemType: string;
}

export const LogicItem = (props: LogicItemProps) => {
  //Fetch the data for the active item.
  const query = props.itemType === "Predator" ? GET_PREY_OF : GET_PREDATOR_OF
  const options = { variables: { name: props.activeItem } }
  const { loading, error, data } = useQuery(query, options)
  //Because this is where the fetching the actual data happens, this is where filtering needs to happen as well.
  //Pass the data to the design.
  console.log(loading, error, data);
  if (data) {
    return DesignItem({ prey: data.getPreyOf, sources: [] });
  } else {
    return DesignItem({ prey: [], sources: [] });
  }
};

