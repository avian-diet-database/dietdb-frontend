import { useReducer } from "react";
import { Prey } from "../../types/Prey";

export enum TableSort {
  TAXON,
  ITEMS,
  WTVOL,
  OCCUR,
  UNSPC,
  NONE,
}

export enum TableDirection {
  ASCENDING,
  DESCENDING,
}

export enum TableActionType {
  TOGGLEDIR,
  TAXON,
  ITEMS,
  WTVOL,
  OCCUR,
  UNSPC,
  UPDTE,
}

export interface TableAction {
  type: TableActionType;
  payload: any;
}

const sortByType = (
  data: Prey[],
  sort: TableSort,
  dir: TableDirection
): Prey[] => {
  switch (sort) {
    case TableSort.TAXON:
      return sortByTaxon(data, dir);
    case TableSort.ITEMS:
      return sortByItems(data, dir);
    case TableSort.WTVOL:
      return sortByWtVol(data, dir);
    case TableSort.OCCUR:
      return sortByOccur(data, dir);
    case TableSort.UNSPC:
      return sortByUnspc(data, dir);
    default:
      return data;
  }
};
const actionToSort = (action: TableActionType): TableSort => {
  switch (action) {
    case TableActionType.TAXON:
      return TableSort.TAXON;
    case TableActionType.ITEMS:
      return TableSort.ITEMS;
    case TableActionType.WTVOL:
      return TableSort.WTVOL;
    case TableActionType.OCCUR:
      return TableSort.OCCUR;
    case TableActionType.UNSPC:
      return TableSort.UNSPC;
    default:
      return TableSort.NONE;
  }
};

export interface TableState {
  rows: any;
  sort: TableSort;
  direction: TableDirection;
}

export const useTable = (
  data: any
): [TableState, React.Dispatch<TableAction>] => {
  const tableReducer = (state: TableState, action: TableAction): TableState => {
    const sort = actionToSort(action.type);
    let data = {
      sort: sort,
      rows: sortByType(state.rows, sort, state.direction),
      direction: state.direction,
    };
    const opDir =
      state.direction === TableDirection.ASCENDING
        ? TableDirection.DESCENDING
        : TableDirection.ASCENDING;
    if (action.type === TableActionType.UPDTE)
      data = {
        sort: state.sort,
        rows: sortByType(action.payload, state.sort, state.direction),
        direction: state.direction,
      };
    if (action.type === TableActionType.TOGGLEDIR)
      data = {
        sort: state.sort,
        rows: sortByType(state.rows, state.sort, opDir),
        direction: opDir,
      };

    return data;
  };

  const initialState: TableState = {
    rows: data,
    sort: TableSort.ITEMS,
    direction: TableDirection.DESCENDING,
  };
  // This is being initialized with an empty array. No point in sending an initializer
  const [state, dispatch] = useReducer(tableReducer, initialState);
  return [state, dispatch];
};

const sortByTaxon = (data: Prey[], dir: TableDirection): Prey[] => {
  return [...data].sort((a: Prey, b: Prey) => {
    if (a.taxon < b.taxon) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.taxon > b.taxon) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }
    return 0;
  });
};

const sortByItems = (data: Prey[], dir: TableDirection): Prey[] => {
  return [...data].sort((a: Prey, b: Prey) => {
    if (a.items === null) return dir === TableDirection.ASCENDING ? -1 : 1;
    if (b.items === null) return dir === TableDirection.ASCENDING ? 1 : -1;
    if (parseFloat(a.items) < parseFloat(b.items)) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (parseFloat(a.items) > parseFloat(b.items)) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }

    return 0;
  });
};

const sortByWtVol = (data: Prey[], dir: TableDirection): Prey[] => {
  return [...data].sort((a: Prey, b: Prey) => {
    if (a.wt_or_vol === null) return dir === TableDirection.ASCENDING ? -1 : 1;
    if (b.wt_or_vol === null) return dir === TableDirection.ASCENDING ? 1 : -1;
    if (parseFloat(a.wt_or_vol) < parseFloat(b.wt_or_vol)) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (parseFloat(a.wt_or_vol) > parseFloat(b.wt_or_vol)) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }

    return 0;
  });
};
const sortByOccur = (data: Prey[], dir: TableDirection): Prey[] => {
  return [...data].sort((a: Prey, b: Prey) => {
    if (a.occurrence === null) return dir === TableDirection.ASCENDING ? -1 : 1;
    if (b.occurrence === null) return dir === TableDirection.ASCENDING ? 1 : -1;
    if (parseFloat(a.occurrence) < parseFloat(b.occurrence)) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (parseFloat(a.occurrence) > parseFloat(b.occurrence)) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }

    return 0;
  });
};
const sortByUnspc = (data: Prey[], dir: TableDirection): Prey[] => {
  return [...data].sort((a: Prey, b: Prey) => {
    if (a.unspecified === null)
      return dir === TableDirection.ASCENDING ? -1 : 1;
    if (b.unspecified === null)
      return dir === TableDirection.ASCENDING ? 1 : -1;
    if (a.unspecified < b.unspecified) {
      return dir == TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.unspecified > b.unspecified) {
      return dir == TableDirection.ASCENDING ? 1 : -1;
    }

    return 0;
  });
};
