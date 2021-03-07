import { useReducer } from "react";
import { Prey } from "../../types/Prey";
import { Predator } from "../../types/Predator";
import { ItemType } from "../../cache";

export enum TableSort {
  DEFAULT,
  TAXON,
  ITEMS,
  WTVOL,
  OCCUR,
  CMNNM,
  FAMLY,
  DTTYP,
  NMSTD,
  FRADT,
  NONE,
  UNSPC,
}

export enum TableDirection {
  ASCENDING,
  DESCENDING,
}

export enum TableActionType {
  TOGGLEDIR,
  UPDTE,
  DEFAULT,
  TAXON,
  ITEMS,
  WTVOL,
  OCCUR,
  CMNNM,
  FAMLY,
  DTTYP,
  NMSTD,
  FRADT,
  UNSPC,
}

export interface TableAction {
  type: TableActionType;
  payload: any;
}

const sortByType = (data: any, sort: TableSort, dir: TableDirection): any[] => {
  switch (sort) {
    case TableSort.TAXON:
      return sortByTaxon(data, dir);
    case TableSort.ITEMS:
      return sortByItems(data, dir);
    case TableSort.WTVOL:
      return sortByWtVol(data, dir);
    case TableSort.OCCUR:
      return sortByOccur(data, dir);
    case TableSort.FRADT:
      return sortByFractionDiet(data, dir);
    case TableSort.NMSTD:
      return sortByNumberOfStudies(data, dir);
    case TableSort.DTTYP:
      return sortByDietType(data, dir);
    case TableSort.FAMLY:
      return sortByFamily(data, dir);
    case TableSort.CMNNM:
      return sortByCommonName(data, dir);
    case TableSort.UNSPC:
      return sortByUnspc(data, dir);
    case TableSort.DEFAULT:
      return defaultSort(data);
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
    case TableActionType.CMNNM:
      return TableSort.CMNNM;
    case TableActionType.FAMLY:
      return TableSort.FAMLY;
    case TableActionType.DTTYP:
      return TableSort.DTTYP;
    case TableActionType.NMSTD:
      return TableSort.NMSTD;
    case TableActionType.FRADT:
      return TableSort.FRADT;
    case TableActionType.UNSPC:
      return TableSort.UNSPC;
    case TableActionType.DEFAULT:
      return TableSort.DEFAULT;
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
  type: ItemType
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

    let defaultsorttype = type === ItemType.PREDATOR ? TableSort.DEFAULT : TableSort.FRADT;
    if (action.type === TableActionType.UPDTE)
      data = {
        sort: defaultsorttype,
        rows: sortByType(action.payload, defaultsorttype, state.direction),
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

  let isPredator = type === ItemType.PREDATOR;
  let sorting = isPredator ? TableSort.DEFAULT : TableSort.FRADT;
  const initialState: TableState = {
    rows: [],
    sort: sorting,
    direction: TableDirection.DESCENDING,
  };
  // This is being initialized with an empty array. No point in sending an initializer
  const [state, dispatch] = useReducer(tableReducer, initialState);
  return [state, dispatch];
};

const defaultSort = (data: Prey[]): Prey[] => {
  let hasItems = data.reduce((acc:boolean, curr:Prey):boolean=>{
    return (acc || (curr.items != null));
  },false);  

  let hasWtVol = data.reduce((acc:boolean, curr:Prey):boolean=>{
    return (acc || (curr.wt_or_vol != null));
  },false);  

  let hasOccurr = data.reduce((acc:boolean, curr:Prey):boolean=>{
    return (acc || (curr.occurrence != null));
  },false);  

  if (hasItems) {
    return sortByItems(data, TableDirection.DESCENDING);
  }

  if (hasWtVol) {
    return sortByWtVol(data, TableDirection.DESCENDING);
  }

  if (hasOccurr) {
    return sortByOccur(data, TableDirection.DESCENDING);
  }

  return sortByUnspc(data, TableDirection.DESCENDING);
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
    if (a.items === null) return 1;
    if (b.items === null) return -1; 
    if (parseFloat(a.items) < parseFloat(b.items)) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (parseFloat(a.items) > parseFloat(b.items)) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }

    // If tied, sort by taxon
    if (a.taxon < b.taxon) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.taxon > b.taxon) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }
    return 0;
  });
};

const sortByWtVol = (data: Prey[], dir: TableDirection): Prey[] => {
  return [...data].sort((a: Prey, b: Prey) => {
    if (a.wt_or_vol === null) return 1;
    if (b.wt_or_vol === null) return -1;
    if (parseFloat(a.wt_or_vol) < parseFloat(b.wt_or_vol)) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (parseFloat(a.wt_or_vol) > parseFloat(b.wt_or_vol)) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }

    // If tied, sort by taxon
    if (a.taxon < b.taxon) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.taxon > b.taxon) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }
    return 0;
  });
};

const sortByOccur = (data: Prey[], dir: TableDirection): Prey[] => {
  return [...data].sort((a: Prey, b: Prey) => {
    if (a.occurrence === null) return 1; 
    if (b.occurrence === null) return -1;
    if (parseFloat(a.occurrence) < parseFloat(b.occurrence)) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (parseFloat(a.occurrence) > parseFloat(b.occurrence)) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }

    // If tied, sort by taxon
    if (a.taxon < b.taxon) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.taxon > b.taxon) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }
    return 0;
  });
};

const sortByUnspc = (data: Prey[], dir: TableDirection): Prey[] => {
  return [...data].sort((a: Prey, b: Prey) => {
    if (a.unspecified === null)
      return 1; 
    if (b.unspecified === null)
      return -1; 
    if (a.unspecified < b.unspecified) {
      return dir == TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.unspecified > b.unspecified) {
      return dir == TableDirection.ASCENDING ? 1 : -1;
    }

    // If tied, sort by taxon
    if (a.taxon < b.taxon) {
      return dir === TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.taxon > b.taxon) {
      return dir === TableDirection.ASCENDING ? 1 : -1;
    }
    return 0;
  });
};

/*
 * Prey sorting begins here
 */
const sortByCommonName = (
  data: Predator[],
  dir: TableDirection
): Predator[] => {
  return [...data].sort((a: Predator, b: Predator) => {
    if (!a.common_name) return dir === TableDirection.ASCENDING ? -1 : 1;
    if (!b.common_name) return dir === TableDirection.ASCENDING ? 1 : -1;
    if (a.common_name < b.common_name) {
      return dir == TableDirection.ASCENDING ? -1 : 1;
    }
    if (a.common_name > b.common_name) {
      return dir == TableDirection.ASCENDING ? 1 : -1;
    }
    return 0;
  });
};

const sortByFractionDiet = (
  data: Predator[],
  dir: TableDirection
): Predator[] => {
  return [...data].sort((a: Predator, b: Predator) => {
    if (!a.fraction_diet) return dir === TableDirection.ASCENDING ? -1 : 1;
    if (!b.fraction_diet) return dir === TableDirection.ASCENDING ? 1 : -1;
    if (parseFloat(a.fraction_diet) < parseFloat(b.fraction_diet)) {
      return dir == TableDirection.ASCENDING ? -1 : 1;
    }

    if (parseFloat(a.fraction_diet) > parseFloat(b.fraction_diet)) {
      return dir == TableDirection.ASCENDING ? 1 : -1;
    }
    // If tied, sort by name.
    if (a.common_name < b.common_name)
      return dir == TableDirection.ASCENDING ? -1 : 1;

    if (a.common_name > b.common_name)
      return dir == TableDirection.ASCENDING ? 1 : -1;
    return 0;
  });
};

const sortByDietType = (data: Predator[], dir: TableDirection): Predator[] => {
  return [...data].sort((a: Predator, b: Predator) => {
    if (a.diet_type === null) return dir === TableDirection.ASCENDING ? -1 : 1;
    if (b.diet_type === null) return dir === TableDirection.ASCENDING ? 1 : -1;
    if (a.diet_type < b.diet_type) {
      return dir == TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.diet_type > b.diet_type) {
      return dir == TableDirection.ASCENDING ? 1 : -1;
    }
    // If tied, sort by name.
    if (a.common_name < b.common_name)
      return dir == TableDirection.ASCENDING ? -1 : 1;

    if (a.common_name > b.common_name)
      return dir == TableDirection.ASCENDING ? 1 : -1;
    return 0;
  });
};

const sortByNumberOfStudies = (
  data: Predator[],
  dir: TableDirection
): Predator[] => {
  return [...data].sort((a: Predator, b: Predator) => {
    if (a.number_of_studies === null)
      return dir === TableDirection.ASCENDING ? -1 : 1;
    if (b.number_of_studies === null)
      return dir === TableDirection.ASCENDING ? 1 : -1;
    if (a.number_of_studies < b.number_of_studies) {
      return dir == TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.number_of_studies > b.number_of_studies) {
      return dir == TableDirection.ASCENDING ? 1 : -1;
    }
    // If tied, sort by name.
    if (a.common_name < b.common_name)
      return dir == TableDirection.ASCENDING ? -1 : 1;

    if (a.common_name > b.common_name)
      return dir == TableDirection.ASCENDING ? 1 : -1;
    return 0;
  });
};

const sortByFamily = (data: Predator[], dir: TableDirection): Predator[] => {
  return [...data].sort((a: Predator, b: Predator) => {
    if (a.family === null) return dir === TableDirection.ASCENDING ? -1 : 1;
    if (b.family === null) return dir === TableDirection.ASCENDING ? 1 : -1;
    if (a.family < b.family) {
      return dir == TableDirection.ASCENDING ? -1 : 1;
    }

    if (a.family > b.family) {
      return dir == TableDirection.ASCENDING ? 1 : -1;
    }
    // If tied, sort by name.
    if (a.common_name < b.common_name)
      return dir == TableDirection.ASCENDING ? -1 : 1;

    if (a.common_name > b.common_name)
      return dir == TableDirection.ASCENDING ? 1 : -1;

    return 0;
  });
};
