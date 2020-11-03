import { DesignErrorPage } from "../components/design/DesignErrorPage";
import { LogicErrorPage } from "../components/logic/LogicErrorPage";

test("LogicError is calling designError", () => {
    let inputMessage = "";
    let res = LogicErrorPage({errorMessage:inputMessage});
    let expected = DesignErrorPage({errorMessage:""});
    expect(res).toEqual(expected);
  });

test("LogicError is calling designError w/ correctMessage", () => {
    let inputMessage = "example error";
    let res = LogicErrorPage({errorMessage:inputMessage});
    let expected = DesignErrorPage({errorMessage:"example error"});
    expect(res).toEqual(expected);
  });