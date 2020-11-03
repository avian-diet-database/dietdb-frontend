import {numToColor} from "../components/logic/LogicMap";

test("Number of Records to Color", () => {
    let res = numToColor(100);
    let expected = "#b15900";
    expect(res).toEqual(expected);
  });

