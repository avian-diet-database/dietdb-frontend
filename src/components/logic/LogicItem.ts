import { DesignItem } from "../design/DesignItem";
import { useQuery, useReactiveVar } from "@apollo/client";
import { ITEM_PAGE_PRED, ITEM_PAGE_PREY } from "../../gql/queries";
import { DesignErrorPage } from "../design/DesignErrorPage";
import {
  ItemType,
  ActiveItemTypeVar,
  ActiveItemVar,
  CriteriaOptionsVar,
  StartYearVar,
  EndYearVar,
  RegionVar,
  SeasonVar,
  LevelVar,
  StageVar,
} from "../../cache";

export const LogicItem = () => {
  const activeItem = useReactiveVar(ActiveItemVar);
  const activeItemType = useReactiveVar(ActiveItemTypeVar);

  const isPred = activeItemType === ItemType.PREDATOR;

  const query = isPred ? ITEM_PAGE_PRED : ITEM_PAGE_PREY;
  const skip = activeItem.length < 1;
  const { loading, error, data } = useQuery(query, { skip });



  const filterVals = isPred ? "getFilterValuesPred" : "getFilterValuesPrey";
  const numRecStud = isPred
    ? "getNumRecordsAndStudiesPred"
    : "getNumRecordsAndStudiesPrey";

  let startYears: string[] = [];
  let endYears: string[] = [];
  let regions: string[] = [];
  let stages: string[] = [];
  let numRecords: number = 0;
  let numStudies: number = 0;


  if (data && data[filterVals]) {
    startYears = data[filterVals].startYears;
    endYears = data[filterVals].endYears;
    regions = data[filterVals].regions;
    if (!isPred) {
      stages = data[filterVals].preyStages;
    }
  }

  if (data && data[numRecStud]) {
    numRecords = data[numRecStud].records;
    numStudies = data[numRecStud].studies;
  }

  CriteriaOptionsVar({
    ...CriteriaOptionsVar(),
    startYearOptions: startYears,
    endYearOptions: endYears,
    regionOptions: ["all regions", ...regions],
    stageOptions: ["any", ...stages],
  });

  // These variables are rest, but this is not
  // reflected by the ui correctly.
  StartYearVar(startYears[0] || "1900");
  EndYearVar(endYears[0] || "2020");
  RegionVar("all regions");
  SeasonVar("all seasons");
  StageVar("any");
  LevelVar("Class");

  if ((activeItem.length < 1 || error || loading)) {
//  return DesignErrorPage({
//    errorMessage: "Enter a name above.",
//    minHeight: 600,
//  });
    return null;
  }

  const component = DesignItem({
    activeItem,
    activeItemType,
    numRecords,
    numStudies,
  });

  return component;
};
