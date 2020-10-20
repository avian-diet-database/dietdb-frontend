import { DesignMap } from "../design/DesignMap";
import { GET_MAP_DATA} from "../../gql/queries";
import { useQuery } from "@apollo/client";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { LogicErrorPage } from "./LogicErrorPage";

interface LogicMapProps {
    activeItem:string;
}

export const LogicMap = (props: LogicMapProps) => {

    const query = GET_MAP_DATA;
    const options = {
        variables: {
            name: props.activeItem,
        }
    };

    const { loading, error, data } = useQuery(query, options);
    if (loading) return DesignLoadingPage()
    if (error) return LogicErrorPage({ errorMessage: "Uh no, an error has occurred :( please return to homepage!"  + error.message})
    const arr = data.getMapData;

    return DesignMap({ data: arr });
}