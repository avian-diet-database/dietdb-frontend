import { useReducer } from "react";
import { useQuery } from "@apollo/client";
import { GET_REGIONS_PRED, GET_REGIONS_PREY } from "../../gql/queries";
import { ItemType } from "../../App";
export interface CriteriaState {
  // type: The string the user sees in the select element's options.
  // value: The string that the backend understands.
  // This object serves as a pseudo-map from user-friendly to backend-friendly.
  type: string;
  value: string;
}
// these could be cleaned up by implementing default behavior and then
// initializing them with calling the reducer, inciting its default
// behavior.
export function useStartYear(
  options: any
): [CriteriaState, React.Dispatch<string>, string[]] {
  // The user-friendly optins.
  // Map user-friendly to backend-friendly
  // For start and end year, there isn't any mapping to be done really.
  function reducer(state: CriteriaState, action: string) {
    if (options.includes(action)) {
      return { type: action, value: action };
    } else {
      return state;
    }
  }
  // Initialize with 1900.
  const [state, dispatch] = useReducer(reducer, {
    type: "1900",
    value: "1900",
  });
  return [state, dispatch, options];
}

// Same as start year pretty much.
export function useEndYear(
  options: any
): [CriteriaState, React.Dispatch<string>, string[]] {
  function reducer(state: CriteriaState, action: string) {
    if (options.includes(action)) {
      return { type: action, value: action };
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "2020",
    value: "2020",
  });
  return [state, dispatch, options];
}

export function useSeasons(): [
  CriteriaState,
  React.Dispatch<string>,
  string[]
] {
  const options = [
    "All seasons",
    "Spring",
    "Summer",
    "Fall",
    "Winter",
    "Unspecified",
  ];
  function reducer(state: CriteriaState, action: string) {
    if (options.includes(action)) {
      if (action === "All seasons") {
        return {
          type: action,
          value: "all",
        };
      }
      return {
        type: action,
        value: action.toLowerCase(),
      };
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "All seasons",
    value: "all",
  });
  return [state, dispatch, options];
}

export function useRegion(
  options: any
): [CriteriaState, React.Dispatch<string>, string[]] {
  function reducer(state: CriteriaState, action: string) {
    // In this case, no mapping is done. The options come straight from the backend.
    if (action === "All regions") {
      return {
        type: action,
        value: "all",
      };
    }
    if (options.includes(action)) {
      return {
        type: action,
        value: action,
      };
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "All regions",
    value: "all",
  });
  return [state, dispatch, ["All regions", ...options]];
}

export function useMetrics(): [
  CriteriaState,
  React.Dispatch<string>,
  string[]
] {
  const options = [
    "All diet types",
    "% By Occurrence",
    "% By Items",
    "% By Weight/Volume",
    "Unspecified",
  ];
  function reducer(state: CriteriaState, action: string) {
    if (options.includes(action)) {
      switch (action) {
        case "% By Occurrence":
          return { type: action, value: "occurrence" };
        case "% By Items":
          return { type: action, value: "items" };
        case "% By Weight/Volume":
          return { type: action, value: "wt_or_vol" };
        case "Unspecified":
          return { type: action, value: "unspecified" };
        default:
          return { type: "All diet types", value: "all" };
      }
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "All diet types",
    value: "all",
  });
  return [state, dispatch, options];
}

export function useStage(): [CriteriaState, React.Dispatch<string>, string[]] {
  const options = ["All stages", "Larva", "Pupa", "Adult"];
  function reducer(state: CriteriaState, action: string) {
    if (options.includes(action)) {
      switch (action) {
        case "All stages":
          return { type: action, value: "any" };
        case "Larva":
          return { type: action, value: "larva" };
        case "Pupa":
          return { type: action, value: "pupa" };
        case "Adult":
          return { type: action, value: "adult" };
        default:
          return { type: "All", value: "any" };
      }
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "All stages",
    value: "any",
  });
  return [state, dispatch, options];
}

export function useLevel(): [CriteriaState, React.Dispatch<string>, string[]] {
  const options = [
    "Species",
    "Genus",
    "Family",
    "Suborder",
    "Order",
    "Class",
    "Phylum",
    "Kingdom",
  ];
  function reducer(state: CriteriaState, action: string) {
    if (options.includes(action)) {
      if (action === "Species") {
        return { type: action, value: "scientific_name" };
      }
      return { type: action, value: action.toLowerCase() };
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "Species",
    value: "scientific_name",
  });
  return [state, dispatch, options];
}
