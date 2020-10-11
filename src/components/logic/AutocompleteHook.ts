import { useQuery } from "@apollo/client";
import { useState, Dispatch, SetStateAction } from "react"
import { GET_AUTOCOMPLETE_PRED, GET_AUTOCOMPLETE_PREY } from "../../gql/queries"
import { ItemType } from "../../App"

export function useAutocomplete(itemType: ItemType): [string[], Dispatch<SetStateAction<string>>] {

    // The user's input. The actual data isn't important beyond this hook.
    const [queryString, updateQueryString] = useState("");


    // The variables of the GraphQL query.
    //  - input: The prefix that the user has entered.
    const options = {
        variables: {
            input: queryString
        }
    }
    // Query the backend. This will have to be changed to be either
    // Predator or Prey.
    const query = itemType === ItemType.PREDATOR ? GET_AUTOCOMPLETE_PRED : GET_AUTOCOMPLETE_PREY
    const { loading, error, data } = useQuery(query, options)
    console.log(loading, error, data)


    // If the data is loading, there was an error, or the query string was
    // the empty string, return the empty list.
    if (loading) return [[], updateQueryString]
    if (error) return [[], updateQueryString]
    if (queryString.length < 1) return [[], updateQueryString]

    // The data must be valid, so return it.

    const queryMatches: string[] = itemType === ItemType.PREDATOR ? data.getAutocompletePred : data.getAutocompletePrey
    return [queryMatches, updateQueryString];
}