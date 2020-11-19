import { DesignItem } from "../design/DesignItem";
import { useQuery, useReactiveVar } from "@apollo/client";
import { ITEM_PAGE_PRED, ITEM_PAGE_PREY } from "../../gql/queries";
import { DesignErrorPage } from "../design/DesignErrorPage";
import {
  ItemType,
  ActiveItemTypeVar,
  ActiveItemVar,
  CriteriaOptionsVar,
} from "../../cache";

export const LogicItem = () => {
  const activeItem = useReactiveVar(ActiveItemVar);
  const activeItemType = useReactiveVar(ActiveItemTypeVar);

  const isPred = activeItemType === ItemType.PREDATOR;

  const query = isPred ? ITEM_PAGE_PRED : ITEM_PAGE_PREY;

  const { loading, error, data } = useQuery(query);

  const iType = isPred ? "Pred" : "Prey";
  const startYears =
    loading || error ? [] : data["getFilterValues" + iType].startYears;
  const endYears =
    loading || error ? [] : data["getFilterValues" + iType].endYears;
  const regions =
    loading || error ? [] : data["getFilterValues" + iType].regions;
  const numRecords =
    loading || error ? [] : data["getNumRecordsAndStudies" + iType].records;
  const numStudies =
    loading || error ? [] : data["getNumRecordsAndStudies" + iType].studies;

  CriteriaOptionsVar({
    ...CriteriaOptionsVar(),
    startYearOptions: startYears,
    endYearOptions: endYears,
    regionOptions: ["All regions", ...regions],
  });

  // The CriteriaController is just a convenient container object to hold all this state.
  if (activeItem.length < 1 || error || loading) {
    return DesignErrorPage({
      errorMessage: "Enter a name above.",
      minHeight: 600,
    });
  }

  return DesignItem({
    activeItem,
    activeItemType,
    numRecords,
    numStudies,
    startYears,
    endYears,
    regions,
  });
};
