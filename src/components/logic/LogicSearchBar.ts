import { useReducer } from "react";
import { DesignSearchBar } from "../ design/DesignSearchBar";

interface QueryState {
  queryType: string;
}

export const LogicSearchBar = () => {
  let PREDATORS = "predators";
  let PREY = "prey";
  let EITHER = "predators and prey";
  // TODO:
  //  -

  const QueryStateReducer = (state: QueryState): QueryState => {
    switch (state.queryType) {
      case PREDATORS:
        return { queryType: PREY };
      case PREY:
        return { queryType: EITHER };
      case EITHER:
        return { queryType: PREDATORS };
      default:
        return state;
    }
  };

  const [queryState, dispatchQueryState] = useReducer(QueryStateReducer, {
    queryType: PREDATORS,
  });
  return DesignSearchBar({
    queryState: queryState.queryType,
    dispatchQueryState: dispatchQueryState,
  });
};
