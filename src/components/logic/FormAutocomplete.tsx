import { GET_SCIENTIFIC_NAMES, GET_PREY_NAMES} from "../../gql/queries";
import { useQuery} from "@apollo/client";


export const AutocompleteScientificNames = () => {

    const { loading, error, data} = useQuery(GET_SCIENTIFIC_NAMES);

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return `Error! ${error.message}`;
    }

    const scientificNames = data.getScientificNames
    const results = scientificNames.map((sciName: any) => sciName['sci_name'] )

    return results;

}

export const AutocompletePreyNames = () => {

    const { loading, error, data} = useQuery(GET_PREY_NAMES)

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return `Error! ${error.message}`;
    }

    const preyNames = data.getPreyNames
    const results = preyNames.map((name: any) => name['name'] )

    return results;
}
