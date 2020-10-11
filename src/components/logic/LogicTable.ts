import { DesignTable } from "../design/DesignTable";
import { CriteriaController } from "../../types/CriteriaController"
import { GET_PREDATOR_OF, GET_PREY_OF } from "../../gql/queries"
import { useQuery } from "@apollo/client"
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { DesignErrorPage } from "../design/DesignErrorPage";

interface LogicTableProps {
    controller: CriteriaController
    itemType: string
    activeItem: string
}

export const LogicTable = (props: LogicTableProps) => {

    //Fetch the data for the active item.
    const query = props.itemType === "Predator" ? GET_PREY_OF : GET_PREDATOR_OF
    const options = {
        variables: {
            name: props.activeItem,
            startYear: props.controller.startYear.value,
            endYear: props.controller.endYear.value,
            season: props.controller.season.value,
            region: props.controller.region.value,
            metrics: props.controller.metrics.value,
            level: props.controller.level.value
        }
    }

    const { loading, error, data } = useQuery(query, options)

    //Because this is where the fetching the actual data happens, this is where filtering needs to happen as well.
    //Pass the data to the design.
    if (loading) return DesignLoadingPage()
    if (error) return DesignErrorPage()
    return DesignTable({ prey: data.getPreyOf });
}