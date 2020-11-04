import { DesignButton } from "../components/design/DesignButton";
import { LogicButton } from "../components/logic/LogicButton";

test("LogicButton is calling designButton", () => {

    let res = LogicButton({ buttonText: "test", className: "test"});
    let expected = DesignButton({ buttonText: "test", className: "test"});
    expect(res).toEqual(expected);
});

test("LogicButton w/ mismatching onClick events", () => {
    let res = LogicButton({ buttonText: "", className: ""});
    let expected = DesignButton({ buttonText: "extra", className: "extra"});
    expect(res).not.toEqual(expected);
});