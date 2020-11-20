import { DesignAbout } from "../components/design/DesignAbout";
import { LogicAbout } from "../components/logic/LogicAbout";

test("LogicAbout is calling designAbout", () => {
    let res = LogicAbout();
    let expected = DesignAbout();
    expect(res).toEqual(expected);
  });