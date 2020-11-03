import { DesignHeader } from "../components/design/DesignHeader";
import { LogicHeader } from "../components/logic/LogicHeader";

test("LogicHeader is calling designHeader", () => {
    let res = LogicHeader({});
    let expected = DesignHeader();
    expect(res).toEqual(expected);
  });