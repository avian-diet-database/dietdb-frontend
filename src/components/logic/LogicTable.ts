import { DesignTable } from "../design/DesignTable";
import { GET_PREDATOR_OF, GET_PREY_OF } from "../../gql/queries";
import { useQuery, useReactiveVar } from "@apollo/client";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { ItemType, StageVar } from "../../cache";
import { DesignErrorPage } from "../design/DesignErrorPage";
import { useTable, TableSort, TableActionType } from "./TableSorting";
import { TableController } from "../../types/TableController";
import { useEffect, useState } from "react";
import {
  ActiveItemVar,
  ActiveItemTypeVar,
  CriteriaOptionsVar,
  RegionVar,
  SeasonVar,
  StartYearVar,
  EndYearVar,
  LevelVar,
} from "../../cache";

interface LogicTableProps {
  numStudies: number;
  numRecords: number;
}

export const LogicTable = (props: LogicTableProps) => {
  //Fetch the data for the active item.
  const criteria = useReactiveVar(CriteriaOptionsVar);
  const activeItemType = useReactiveVar(ActiveItemTypeVar);
  const activeItem = useReactiveVar(ActiveItemVar);
  const region = useReactiveVar(RegionVar);
  const season = useReactiveVar(SeasonVar);
  const startYear = useReactiveVar(StartYearVar);
  const endYear = useReactiveVar(EndYearVar);
  const level = useReactiveVar(LevelVar);
  const stage = useReactiveVar(StageVar);

  const metadata = {
    name: activeItem,
    region,
    season,
    startYear,
    endYear,
    level,
    stage,
  };

  let isPredator = activeItemType === ItemType.PREDATOR;
  let isPrey = activeItemType === ItemType.PREY;

  const query = isPredator ? GET_PREY_OF : GET_PREDATOR_OF;

  const { loading, error, data } = useQuery(query);

  const [tableData, dispatchTableAction] = useTable(activeItemType);

  const [sortedBy, updateSortedBy] = useState(TableSort.ITEMS);

  useEffect(() => {
    if (data) {
      const arr = isPredator ? data.getPreyOf : data.getPredatorOf;
      dispatchTableAction({ type: TableActionType.UPDTE, payload: arr });
    }
  }, [data]);

  //Pass the data to the design.
  if (loading) return DesignLoadingPage();
  if (error)
    return DesignErrorPage({
      errorMessage:
        "Uh oh, an error has occurred :( please return to homepage!",
    });

  const tableController: TableController = {
    resetTable: (itemType: ItemType) => {
      dispatchTableAction({
        type: TableActionType.UPDTE,
        payload: [],
      });
      itemType === ItemType.PREDATOR
        ? dispatchTableAction({
            type: TableActionType.ITEMS,
            payload: null,
          })
        : dispatchTableAction({
            type: TableActionType.FRADT,
            payload: null,
          });
      // Reset the sorting to default
      updateSortedBy(() =>
        itemType === ItemType.PREDATOR ? TableSort.ITEMS : TableSort.FRADT
      );
    },
    handleMetricsClick: () => {
      updateSortedBy(TableSort.DTTYP);
      updateSortedBy(TableSort.DTTYP);
      tableData.sort === TableSort.DTTYP
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.DTTYP, payload: null });
    },
    handleCommonNameClick: () => {
      updateSortedBy(TableSort.CMNNM);
      tableData.sort === TableSort.CMNNM
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.CMNNM, payload: null });
    },
    handleFractionDietClick: () => {
      updateSortedBy(TableSort.FRADT);
      tableData.sort === TableSort.FRADT
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.FRADT, payload: null });
    },
    handleFamilyClick: () => {
      updateSortedBy(TableSort.FAMLY);
      tableData.sort === TableSort.FAMLY
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.FAMLY, payload: null });
    },
    handleNumberOfStudiesClick: () => {
      updateSortedBy(TableSort.NMSTD);
      tableData.sort === TableSort.NMSTD
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.NMSTD, payload: null });
    },
    handleTaxonClick: () => {
      updateSortedBy(TableSort.TAXON);
      tableData.sort === TableSort.TAXON
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.TAXON, payload: null });
    },
    handleItemsClick: () => {
      updateSortedBy(TableSort.ITEMS);
      tableData.sort === TableSort.ITEMS
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.ITEMS, payload: null });
    },
    handleWtVolClick: () => {
      updateSortedBy(TableSort.WTVOL);
      tableData.sort === TableSort.WTVOL
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.WTVOL, payload: null });
    },
    handleOccurClick: () => {
      updateSortedBy(TableSort.OCCUR);
      tableData.sort === TableSort.OCCUR
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.OCCUR, payload: null });
    },
    handleUnspcClick: () => {
      updateSortedBy(TableSort.UNSPC);
      tableData.sort === TableSort.UNSPC
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.UNSPC, payload: null });
    },
  };

  let arr = [];
  // This logic should be moved into a helper function.
  if (isPredator && activeItem !== "") {
    // Fix the rows for Predator page
    arr = tableData.rows.map((prey: any) => {
      let items = prey.items === null ? null : prey.items.substring(0, 4) + "%";
      let wt_or_vol =
        prey.wt_or_vol === null ? null : prey.wt_or_vol.substring(0, 4) + "%";
      let unspecified =
        prey.unspecified === null
          ? null
          : prey.unspecified.substring(0, 4) + "%";
      let occurrence =
        prey.occurrence === null ? null : prey.occurrence.substring(0, 4) + "%";
      return { ...prey, items, wt_or_vol, occurrence, unspecified };
    });
  } else if (isPrey && activeItem !== "") {
    // Fix the rows for Prey page.
    arr = tableData.rows.map((predator: any) => {
      let fraction_diet =
        predator.fraction_diet === null
          ? null
          : predator.fraction_diet.substring(0, 4) + "%";
      return { ...predator, fraction_diet };
    });
  }

  if (arr.length < 1) {
    return DesignErrorPage({ errorMessage: "That query returned no results." });
  }
  return DesignTable({
    data: arr,
    numRecords: props.numRecords,
    numStudies: props.numStudies,
    controller: tableController,
    sortedBy,
    metadata: [...Object.values(metadata)],
    activeItemType,
  });
};
