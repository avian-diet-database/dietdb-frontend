import { DesignLoadingPage } from "../components/design/DesignLoadingPage";
import { LogicLoadingPage } from "../components/logic/LogicLoadingPage";

test("LogicLoading is calling designLoading", () => {
    let res = LogicLoadingPage();
    let expected = DesignLoadingPage();
    expect(res).toEqual(expected);
  });