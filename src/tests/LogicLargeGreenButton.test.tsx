import { DesignLargeGreenButton } from "../components/design/DesignLargeGreenButton";
import { LogicLargeGreenButton } from "../components/logic/LogicLargeGreenButton";

test("LogicLargeGreenButton is calling DesignLargeGreenButton", () => {
    let props = {
        buttonText:"Back to Dashboard",
        className:"back-dashboard-button-pg-2"
    }

    let res = LogicLargeGreenButton(props);
    let expected = DesignLargeGreenButton(props);
    expect(res).toEqual(expected);
  });