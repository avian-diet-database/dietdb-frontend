import {
  useTable,
  TableDirection,
  TableSort,
} from "../components/logic/TableSorting";
import { ItemType } from "../App";
import { renderHook } from "@testing-library/react-hooks";

test("Default Predator Table Test", () => {
  const { result } = renderHook(() => useTable([], ItemType.PREDATOR));
  expect(result.current[0]).toStrictEqual({
    rows: [],
    direction: TableDirection.DESCENDING,
    sort: TableSort.ITEMS,
  });
});

test("Default Prey Table Test", () => {
  const { result } = renderHook(() => useTable([], ItemType.PREY));
  expect(result.current[0]).toStrictEqual({
    rows: [],
    direction: TableDirection.DESCENDING,
    sort: TableSort.FRADT,
  });
});
