import { useState, useEffect } from "react";
import { DesignSearchBar } from "../design/DesignSearchBar";

interface LogicSearchBarProps {
  // In test cases, fruit/vegetable.
  queryType: string;
  // An array of string options to match queries with.
  queryOptions: string[];
}

export const LogicSearchBar = (props: LogicSearchBarProps) => {
  // --- STATE --- //
  // Basic queryoptions state for now. This will eventually be:
  //  - A call to the backend for a list options
  // Simple state for query string and possible matches.
  const [queryString, updateQueryString] = useState("");
  const [queryMatches, updateQueryMatches] = useState([""]);

  // --- EFFECTS --- //
  // When query string or options update, refresh the autocompleted list.
  //  - This may be slow with large queryOptions. o(n*avgStrLen) right now.
  useEffect(() => {
    if (queryString !== "") {
      updateQueryMatches(
        props.queryOptions.filter(
          (element: string) =>
            element.toLowerCase().indexOf(queryString.toLowerCase()) > -1
        )
      );
    } else {
      updateQueryMatches([]);
    }
  }, [queryString, props.queryOptions, updateQueryMatches]);

  // --- UPDATE HANDLERS --- //
  // When the user changes their query, update the query string.
  const onQueryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateQueryString(event.target.value);
  };

  return DesignSearchBar({
    queryType: props.queryType,
    queryMatches: queryMatches,
    onQueryInputChange: onQueryInputChange,
  });
};
