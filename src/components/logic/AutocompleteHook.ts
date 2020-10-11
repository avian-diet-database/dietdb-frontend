import { useQuery } from "@apollo/client";
import { useState, Dispatch, SetStateAction } from "react"
import { GET_AUTOCOMPLETE } from "../../gql/queries"

export function useAutocomplete(): [string[], Dispatch<SetStateAction<string>>] {

    const [queryString, updateQueryString] = useState("");

    const options = {
        variables: {
            input: queryString
        }
    }
    console.log(options)
    const { loading, error, data } = useQuery(GET_AUTOCOMPLETE, options)

    if (loading) return [[], updateQueryString]
    if (error) return [[], updateQueryString]
    if (queryString.length < 1) return [[], updateQueryString]
    const queryMatches: string[] = data.getAutocomplete
    return [queryMatches, updateQueryString];
}