import {
  useTable,
  TableDirection,
  TableSort,
  TableActionType,
} from "../components/logic/TableSorting";
import { ItemType } from "../App";
import { renderHook, act } from "@testing-library/react-hooks";
import { Prey } from "../types/Prey";
import { Predator } from "../types/Predator";

const testPrey: Prey[] = [
  {
    taxon: "Anseriformes",
    items: "4.1",
    wt_or_vol: "4.1",
    occurrence: "null",
    unspecified: "null",
  },
  {
    taxon: "Lagomorpha",
    items: "0.9",
    wt_or_vol: "1.5",
    occurrence: "null",
    unspecified: "null",
  },
  {
    taxon: "Rodentia",
    items: "1.8",
    wt_or_vol: "1.2",
    occurrence: "null",
    unspecified: "null",
  },
  {
    taxon: "Carnivora",
    items: "3.8",
    wt_or_vol: "6.7",
    occurrence: "null",
    unspecified: "null",
  },
];

const testPredators: Predator[] = [
  {
    common_name: "Yellow-billed Cuckoo",
    family: "Cuculidae",
    diet_type: "Items",
    fraction_diet: "63",
    number_of_studies: "2",
  },
  {
    common_name: "Tennessee Warbler",
    family: "Parulidae",
    diet_type: "Wt_or_Vol",
    fraction_diet: "83",
    number_of_studies: "1",
  },
  {
    common_name: "Elegant Trogon",
    family: "Trogonidae",
    diet_type: "Wt_or_Vol",
    fraction_diet: "82.5",
    number_of_studies: "3",
  },
  {
    common_name: "Chipping Sparrow",
    family: "Passerellidae",
    diet_type: "Wt_or_Vol",
    fraction_diet: "69",
    number_of_studies: "4",
  },
];

test("Default Predator Table", () => {
  const { result } = renderHook(() => useTable(ItemType.PREDATOR));
  expect(result.current[0]).toStrictEqual({
    rows: [],
    direction: TableDirection.DESCENDING,
    sort: TableSort.ITEMS,
  });
});

test("Default Prey Table", () => {
  const { result } = renderHook(() => useTable(ItemType.PREY));
  expect(result.current[0]).toStrictEqual({
    rows: [],
    direction: TableDirection.DESCENDING,
    sort: TableSort.FRADT,
  });
});

test("Predator Table Default Sort", () => {
  const { result } = renderHook(() => useTable(ItemType.PREDATOR));
  act(() => {
    result.current[1]({
      type: TableActionType.UPDTE,
      payload: testPrey,
    });
  });
  /**
   * Default should be descending sort. If a greater than b, a comes first.
   */
  expect(result.current[0].rows).toStrictEqual(
    testPrey.sort((a, b) => {
      if (!a.items) return 1;
      if (!b.items) return 1;
      if (parseFloat(a.items) < parseFloat(b.items)) return 1;
      if (parseFloat(a.items) > parseFloat(b.items)) return -1;
      return 0;
    })
  );
});

test("Predator Table Toggled Default Sort", () => {
  const { result } = renderHook(() => useTable(ItemType.PREDATOR));
  act(() => {
    result.current[1]({
      type: TableActionType.UPDTE,
      payload: testPrey,
    });
    result.current[1]({
      type: TableActionType.TOGGLEDIR,
      payload: null,
    });
  });

  expect(result.current[0].rows).toStrictEqual(
    testPrey.sort((a, b) => {
      if (!a.items) return -1;
      if (!b.items) return -1;
      if (parseFloat(a.items) < parseFloat(b.items)) return -1;
      if (parseFloat(a.items) > parseFloat(b.items)) return 1;
      return 0;
    })
  );
});

test("Predator Table wt_or_vol Sort", () => {
  const { result } = renderHook(() => useTable(ItemType.PREDATOR));
  act(() => {
    result.current[1]({
      type: TableActionType.UPDTE,
      payload: testPrey,
    });

    result.current[1]({
      type: TableActionType.WTVOL,
      payload: null,
    });
  });

  expect(result.current[0].rows).toStrictEqual(
    testPrey.sort((a, b) => {
      if (!a.wt_or_vol) return 1;
      if (!b.wt_or_vol) return 1;
      if (parseFloat(a.wt_or_vol) < parseFloat(b.wt_or_vol)) return 1;
      if (parseFloat(a.wt_or_vol) > parseFloat(b.wt_or_vol)) return -1;
      return 0;
    })
  );
});

test("Predator Table wt_or_vol Sort", () => {
  const { result } = renderHook(() => useTable(ItemType.PREDATOR));
  act(() => {
    result.current[1]({
      type: TableActionType.UPDTE,
      payload: testPrey,
    });

    result.current[1]({
      type: TableActionType.WTVOL,
      payload: null,
    });

    result.current[1]({
      type: TableActionType.TOGGLEDIR,
      payload: null,
    });
  });

  expect(result.current[0].rows).toStrictEqual(
    testPrey.sort((a, b) => {
      if (!a.wt_or_vol) return 1;
      if (!b.wt_or_vol) return 1;
      if (parseFloat(a.wt_or_vol) < parseFloat(b.wt_or_vol)) return -1;
      if (parseFloat(a.wt_or_vol) > parseFloat(b.wt_or_vol)) return 1;
      return 0;
    })
  );
});

test("Prey Table Default Sort", () => {
  const { result } = renderHook(() => useTable(ItemType.PREY));
  act(() => {
    result.current[1]({
      type: TableActionType.UPDTE,
      payload: testPredators,
    });
  });
  /**
   * Default should be descending sort. If a greater than b, a comes first.
   */
  expect(result.current[0].rows).toStrictEqual(
    testPredators.sort((a, b) => {
      if (parseFloat(a.fraction_diet) < parseFloat(b.fraction_diet)) return 1;
      if (parseFloat(a.fraction_diet) > parseFloat(b.fraction_diet)) return -1;
      return 0;
    })
  );
});

test("Prey Table Toggled Default Sort", () => {
  const { result } = renderHook(() => useTable(ItemType.PREY));
  act(() => {
    result.current[1]({
      type: TableActionType.UPDTE,
      payload: testPredators,
    });
    result.current[1]({
      type: TableActionType.TOGGLEDIR,
      payload: null,
    });
  });

  expect(result.current[0].rows).toStrictEqual(
    testPredators.sort((a, b) => {
      if (parseFloat(a.fraction_diet) < parseFloat(b.fraction_diet)) return -1;
      if (parseFloat(a.fraction_diet) > parseFloat(b.fraction_diet)) return 1;
      return 0;
    })
  );
});

test("Prey Table Num Studies Sort", () => {
  const { result } = renderHook(() => useTable(ItemType.PREY));
  act(() => {
    result.current[1]({
      type: TableActionType.UPDTE,
      payload: testPredators,
    });
    result.current[1]({
      type: TableActionType.NMSTD,
      payload: null,
    });
  });

  expect(result.current[0].rows).toStrictEqual(
    testPredators.sort((a, b) => {
      if (parseFloat(a.number_of_studies) < parseFloat(b.number_of_studies))
        return 1;
      if (parseFloat(a.number_of_studies) > parseFloat(b.number_of_studies))
        return -1;
      return 0;
    })
  );
});

test("Prey Table Num Studies Toggled Sort", () => {
  const { result } = renderHook(() => useTable(ItemType.PREY));
  act(() => {
    result.current[1]({
      type: TableActionType.UPDTE,
      payload: testPredators,
    });
    result.current[1]({
      type: TableActionType.NMSTD,
      payload: null,
    });
    result.current[1]({
      type: TableActionType.TOGGLEDIR,
      payload: null,
    });
  });

  expect(result.current[0].rows).toStrictEqual(
    testPredators.sort((a, b) => {
      if (parseFloat(a.number_of_studies) < parseFloat(b.number_of_studies))
        return -1;
      if (parseFloat(a.number_of_studies) > parseFloat(b.number_of_studies))
        return 1;
      return 0;
    })
  );
});
