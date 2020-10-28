import { DesignTable } from "../design/DesignTable";
import { CriteriaController } from "../../types/CriteriaController";
import { GET_PREDATOR_OF, GET_PREY_OF } from "../../gql/queries";
import { useQuery } from "@apollo/client";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { ItemType } from "../../App";
import { LogicErrorPage } from "./LogicErrorPage";
import { useTable, TableSort, TableActionType } from "./TableSorting";
import { TableController } from "../../types/TableController";
import { useEffect } from "react";

interface LogicTableProps {
  controller: CriteriaController;
  itemType: ItemType;
  activeItem: string;
}

export const LogicTable = (props: LogicTableProps) => {
  //Fetch the data for the active item.
  const query =
    props.itemType === ItemType.PREDATOR ? GET_PREY_OF : GET_PREDATOR_OF;
  const options = {
    variables: {
      name: props.activeItem,
      startYear: props.controller.startYear.value,
      endYear: props.controller.endYear.value,
      season: props.controller.season.value,
      region: props.controller.region.value,
      metrics: props.controller.metrics.value,
      level: props.controller.level.value,
    },
  };

  const { loading, error, data } = useQuery(query, options);

  const [tableData, dispatchTableAction] = useTable([]);

  useEffect(() => {
    if (data) {
      const arr =
        props.itemType === ItemType.PREDATOR
          ? data.getPreyOf
          : data.getPredatorOf;
      dispatchTableAction({ type: TableActionType.UPDTE, payload: arr });
    }
  }, [data]);

  //Pass the data to the design.
  if (loading) return DesignLoadingPage();
  if (error)
    return LogicErrorPage({
      errorMessage:
        "Uh no, an error has occurred :( please return to homepage!",
    });

  // Need to initialize the array but updating hte payload here creates an inf loop
  const controller: TableController = {
    handleTaxonClick: () => {
      tableData.sort === TableSort.TAXON
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.TAXON, payload: null });
    },
    handleItemsClick: () => {
      tableData.sort === TableSort.ITEMS
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.ITEMS, payload: null });
    },
    handleWtVolClick: () => {
      tableData.sort === TableSort.WTVOL
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.WTVOL, payload: null });
    },
    handleOccurClick: () => {
      console.log("handling occurr click");
      tableData.sort === TableSort.OCCUR
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.OCCUR, payload: null });
    },
    handleUnspcClick: () => {
      tableData.sort === TableSort.UNSPC
        ? dispatchTableAction({
            type: TableActionType.TOGGLEDIR,
            payload: null,
          })
        : dispatchTableAction({ type: TableActionType.UNSPC, payload: null });
    },
  };

  let arr = tableData.rows.map((prey: any) => {
    let items = prey.items === null ? null : prey.items.substring(0, 4) + "%";
    let wt_or_vol =
      prey.wt_or_vol === null ? null : prey.wt_or_vol.substring(0, 4) + "%";
    let unspecified =
      prey.unspecified === null ? null : prey.unspecified.substring(0, 4) + "%";
    let occurrence =
      prey.occurrence === null ? null : prey.occurrence.substring(0, 4) + "%";
    return { ...prey, items, wt_or_vol, occurrence, unspecified };
  });

  let activeItem = props.activeItem;

  return DesignTable({ data: arr, controller, activeItem, options} );
};
