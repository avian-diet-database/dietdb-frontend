import { DesignItem } from "../design/DesignItem";
import { useQuery } from "@apollo/client";
import { GET_NUM_RECORDS_AND_STUDIES } from "../../gql/queries";
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
  const [startYear, updateStartYear, startYearOptions] = useStartYear();
  const [endYear, updateEndYear, endYearOptions] = useEndYear();
  const [season, updateSeason, seasonOptions] = useSeasons();
  const [region, updateRegion, regionOptions] = useRegion(props.activeItem);
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

  const itemOptions = {
    variables: {
      name: props.activeItem,
    },
  };

  const { loading, error, data } = useQuery(
    GET_NUM_RECORDS_AND_STUDIES,
    itemOptions
  );
  const numRecords =
    loading || error ? 0 : data.getNumRecordsAndStudies.records;
  const numStudies =
    loading || error ? 0 : data.getNumRecordsAndStudies.studies;

  if (!props.activeItem || props.activeItem.length < 1) {
    return DesignErrorPage({
      errorMessage: "Enter a name above.",
      minHeight: 600,
    });
  }

  return DesignItem({ ...props, numRecords, numStudies, controller });
};
