import { useReducer } from "react";
import { ItemType } from "../../cache";
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
export function mapStartYear(orig: string): CriteriaState {
  return { type: orig, value: orig };
}
export function useStartYear(
  options: string[]
): [CriteriaState, React.Dispatch<string>, string[]] {
  // The user-friendly optins.
  // Map user-friendly to backend-friendly
  // For start and end year, there isn't any mapping to be done really.
  function reducer(state: CriteriaState, action: string) {
    return mapStartYear(action);
  }
  // Initialize with 1900.
  const [state, dispatch] = useReducer(reducer, {
    type: options ? options[0] : "",
    value: options ? options[0] : "",
  });
  return [state, dispatch, options];
}

// Same as start year pretty much.
export function mapEndYear(orig: string): CriteriaState {
  return { type: orig, value: orig };
}
export function useEndYear(
  options: string[]
): [CriteriaState, React.Dispatch<string>, string[]] {
  function reducer(state: CriteriaState, action: string) {
    if (options.includes(action)) {
      return { type: action, value: action };
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    type: options ? options[options.length] : "",
    value: options ? options[options.length] : "",
  });
  return [state, dispatch, options];
}

export function mapSeason(orig: string): CriteriaState {
  if (orig === "All seasons") {
    return {
      type: orig,
      value: "all",
    };
  }
  return {
    type: orig,
    value: orig.toLowerCase(),
  };
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
    return mapSeason(action);
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "All seasons",
    value: "all",
  });
  return [state, dispatch, options];
}

export function mapRegion(orig: string) {
  if (orig === "All regions") {
    return {
      type: orig,
      value: "all",
    };
  }
  return {
    type: orig,
    value: orig,
  };
}
export function useRegion(
  options: any
): [CriteriaState, React.Dispatch<string>, string[]] {
  function reducer(state: CriteriaState, action: string) {
    // In this case, no mapping is done. The options come straight from the backend.
    return mapRegion(action);
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "All regions",
    value: "all",
  });
  return [state, dispatch, ["All regions", ...options]];
}

export function mapMetrics(orig: string): CriteriaState {
  switch (orig) {
    case "% By Occurrence":
      return { type: orig, value: "occurrence" };
    case "% By Items":
      return { type: orig, value: "items" };
    case "% By Weight/Volume":
      return { type: orig, value: "wt_or_vol" };
    case "Unspecified":
      return { type: orig, value: "unspecified" };
    default:
      return { type: "All diet types", value: "all" };
  }
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
    return mapMetrics(action);
  }
  const [state, dispatch] = useReducer(reducer, {
    type: "All diet types",
    value: "all",
  });
  return [state, dispatch, options];
}

export function mapStage(orig: string): CriteriaState {
  return { type: orig, value: orig };
}

export function useStage(
  options: string[]
): [CriteriaState, React.Dispatch<string>, string[]] {
  function reducer(state: CriteriaState, action: string) {
    return mapStage(action);
  }

  const [state, dispatch] = useReducer(reducer, {
    type: "any",
    value: "any",
  });
  return [state, dispatch, ["any", ...options]];
}

export function mapLevel(orig: string): CriteriaState {
  if (orig === "Species") {
    return { type: orig, value: "scientific_name" };
  }
  return { type: orig, value: orig.toLowerCase() };
}

export function useLevel(): [CriteriaState, React.Dispatch<string>, string[]] {
  const options = [
    "Class",
    "Species",
    "Genus",
    "Family",
    "Suborder",
    "Order",
    "Phylum",
    "Kingdom",
  ];

  function reducer(state: CriteriaState, action: string) {
    return mapLevel(action);
  }

  const [state, dispatch] = useReducer(reducer, {
    type: "Class",
    value: "scientific_name",
  });
  return [state, dispatch, options];
}
