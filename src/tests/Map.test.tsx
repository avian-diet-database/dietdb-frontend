import { DesignMap } from "../components/design/DesignMap";
import { numToColor, createMap } from "../components/logic/LogicMap";

test("Number of Records to Color", () => {
  let res = numToColor(100);
  let expected = "#b15900";
  expect(res).toEqual(expected);
});

test("Creating a map from state data", () => {
  let input: any[] = [];
  let res = createMap(input);
  let expected = DesignMap({customFill:{}});
  expect(res).toEqual(expected);
});
