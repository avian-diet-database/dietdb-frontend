import { useQuery } from "@apollo/client";
import { useState, Dispatch, SetStateAction } from "react"
import { GET_AUTOCOMPLETE } from "../../gql/queries"

export function useAutocomplete(): [string[], Dispatch<SetStateAction<string>>] {

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

    const { loading, error, data } = useQuery(GET_AUTOCOMPLETE, options)

    // If the data is loading, there was an error, or the query string was
    // the empty string, return the empty list.
    if (loading) return [[], updateQueryString]
    if (error) return [[], updateQueryString]
    if (queryString.length < 1) return [[], updateQueryString]

    // The data must be valid, so return it.
    const queryMatches: string[] = data.getAutocomplete
    return [queryMatches, updateQueryString];
}