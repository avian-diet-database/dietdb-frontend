import { DesignFooter } from "../components/design/DesignFooter";
import { LogicFooter } from "../components/logic/LogicFooter";

test("LogicFooter is calling designFooter", () => {
    let res = LogicFooter({});
    let expected = DesignFooter();
    expect(res).toEqual(expected);
  });