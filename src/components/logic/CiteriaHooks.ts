import { useReducer } from "react"
import { useQuery } from "@apollo/client"
import { GET_REGIONS_PRED } from "../../gql/queries"
export interface CriteriaState {
    // type: The string the user sees in the select element's options.
    // value: The string that the backend understands.
    // This object serves as a pseudo-map from user-friendly to backend-friendly. 
    type: string, value: string
}
// these could be cleaned up by implementing default behavior and then
// initializing them with calling the reducer, inciting its default
// behavior.
export function useStartYear(): [CriteriaState, React.Dispatch<string>, string[]] {
    // The user-friendly optins.
    const options = [
        "1900",
        "1910",
        "1920",
        "1930",
        "1940",
        "1950",
        "1960",
        "1970",
        "1980",
        "1990",
    ]
    // Map user-friendly to backend-friendly
    // For start and end year, there isn't any mapping to be done really.
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            return { type: action, value: action }
        } else {
            return state
        }
    }
    // Initialize with 1900.
    const [state, dispatch] = useReducer(reducer, { type: "1900", value: "1900" });
    return [state, dispatch, options]
}

// Same as start year pretty much.
export function useEndYear(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = [
        "1910",
        "1920",
        "1930",
        "1940",
        "1950",
        "1960",
        "1970",
        "1980",
        "1990",
        "2020"
    ]
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            return { type: action, value: action }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "1910", value: "1910" });
    return [state, dispatch, options]
}


export function useSeasons(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = [
        "Spring",
        "Summer",
        "Fall",
        "Winter",
        "All"
    ]
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            switch (action) {
                // All becomes unspecified
                case "All":
                    return { type: action, value: "unspecified" }
                // But in all other cases, just take the lowercase versions.
                default:
                    return {
                        type: action, value: action.toLowerCase()
                    }
            }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "Spring", value: "spring" });
    return [state, dispatch, options]
}

export function useRegion(activeItem: string): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = {
        variables: {
            name: activeItem
        }
    }
    const { loading, error, data } = useQuery(GET_REGIONS_PRED, options)
    function reducer(state: CriteriaState, action: string) {
        // In this case, no mapping is done. The options come straight from the backend.
        return {
            type: action, value: action
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "Florida", value: "Florida" });
    if (loading) return [state, dispatch, []]
    if (error) return [state, dispatch, []]
    return [state, dispatch, data.getRegionsPred]
}

export function useMetrics(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = ["% By Occurrence", "% By Items", "% By Weight/Volume", "All"];
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            switch (action) {
                case "% By Occurrence":
                    return { type: action, value: "occurrence" }
                case "% By Items":
                    return { type: action, value: "items" }
                case "% By Weight/Volume":
                    return { type: action, value: "wt_or_vol" }
                default:
                    return { type: "All", value: "unspecified" }
            }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "% By Occurrence", value: "occurrence" });
    return [state, dispatch, options]
}

export function useLevel(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = ["Scientific_Name", "Suborder", "Order", "Kingdom", "Phylum", "Class", "Family", "Genus", "Species"];
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            return { type: action, value: action.toLowerCase() }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "Scientific_Name", value: "scientific_name" });
    return [state, dispatch, options]
}