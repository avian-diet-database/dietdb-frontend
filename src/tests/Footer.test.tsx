import { DesignFooter } from "../components/design/DesignFooter";
import { LogicFooter } from "../components/logic/LogicFooter";

test("LogicFooter is calling designFooter", () => {
    const mockLogicSources = jest.fn(LogicFooter);
    mockLogicSources.mockReturnValueOnce(DesignFooter({lastUpdated:"testDate123"}))
    let res = mockLogicSources({});
    let expected = DesignFooter({lastUpdated:"testDate123"});
    expect(res).toEqual(expected);
  });