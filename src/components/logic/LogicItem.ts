import { DesignItem } from "../design/DesignItem";
import { useQuery } from "@apollo/client";
import { ITEM_PAGE_PRED, ITEM_PAGE_PREY } from "../../gql/queries";
import { CriteriaController } from "../../types/CriteriaController";
import { ItemType } from "../../App";
import { DesignErrorPage } from "../design/DesignErrorPage";
import {
  useStartYear,
  useEndYear,
  useRegion,
  useSeasons,
  useMetrics,
  useLevel,
  useStage,
} from "./CiteriaHooks";

interface LogicItemProps {
  activeItem: string;
  itemType: ItemType;
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
}

export const LogicItem = (props: LogicItemProps) => {
  const itemOptions = {
    variables: {
      name: props.activeItem,
    },
  };

  let isPred = ItemType.PREDATOR === props.itemType;
  const { loading, error, data } = useQuery(
    isPred ? ITEM_PAGE_PRED : ITEM_PAGE_PREY,
    itemOptions
  );
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

  const [startYear, updateStartYear, startYearOptions] = useStartYear(
    startYears
  );
  const [endYear, updateEndYear, endYearOptions] = useEndYear(endYears);
  const [season, updateSeason, seasonOptions] = useSeasons();
  const [region, updateRegion, regionOptions] = useRegion(regions);
  const [metrics, updateMetrics, metricsOptions] = useMetrics();
  const [level, updateLevel, levelOptions] = useLevel();
  const [stage, updateStage, stageOptions] = useStage();

  // The CriteriaController is just a convenient container object to hold all this state.
  const controller: CriteriaController = {
    startYear,
    updateStartYear,
    startYearOptions,

    endYear,
    updateEndYear,
    endYearOptions,

    season,
    updateSeason,
    seasonOptions,

    region,
    updateRegion,
    regionOptions,

    metrics,
    updateMetrics,
    metricsOptions,

    level,
    updateLevel,
    levelOptions,

    stage,
    updateStage,
    stageOptions,
  };

  if (!props.activeItem || props.activeItem.length < 1) {
    return DesignErrorPage({
      errorMessage: "Enter a name above.",
      minHeight: 600,
    });
  }

  return DesignItem({ ...props, numRecords, numStudies, controller });
};
