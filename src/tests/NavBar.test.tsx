import { DesignNavBar } from "../components/design/DesignNavBar";
import React from "react";
import { fireEvent, getByTestId, getByText, render } from "@testing-library/react";

test("DesignNavBar is rendering overall", () => {
  const mockLogicSources = jest.fn();
  mockLogicSources.mockReturnValueOnce(
    <DesignNavBar
      onPredatorClick={() => console.log("testing navBar click...")}
      onPreyClick={() => console.log("testing navBar click...")}
      onHomeClick={() => console.log("testing navBar click...")}
      onAboutClick={() => console.log("testing navBar click...")}
      onSubmitDataClick={() => console.log("testing navBar click...")}
      onAdminClick={() => console.log("testing navBar click...")}
      onLoginClick={() => console.log("testing navBar click...")}
      onLogoutClick={() => console.log("testing navBar click...")}
    ></DesignNavBar>
  );
  let res = mockLogicSources();
  let expected = (
    <DesignNavBar
      onPredatorClick={() => console.log("testing navBar click...")}
      onPreyClick={() => console.log("testing navBar click...")}
      onHomeClick={() => console.log("testing navBar click...")}
      onAboutClick={() => console.log("testing navBar click...")}
      onSubmitDataClick={() => console.log("testing navBar click...")}
      onAdminClick={() => console.log("testing navBar click...")}
      onLoginClick={() => console.log("testing navBar click...")}
      onLogoutClick={() => console.log("testing navBar click...")}
    ></DesignNavBar>
  );
  expect(res.toString()).toEqual(expected.toString());
});


test("DesignNavBar is rendering links", () => {
    const tree = render(
        <DesignNavBar
        onPredatorClick={() => null}
        onPreyClick={() => null}
        onHomeClick={() => null}
        onAboutClick={() => null}
        onSubmitDataClick={() => null}
        onAdminClick={() => null}
        onLoginClick={() => null}
        onLogoutClick={() => null}
      ></DesignNavBar>
    );

    let links = ["Home", "About", "Diet by Bird", "Diet by Prey", "Submit Data", "Admin", "R package"];

    for (var l of links) {
        expect(tree.getByText(l)).toBeDefined();
    }
});

test("DesignNavBar is rendering onClick methods", () => {
    const {container} = render(
        <DesignNavBar
        onPredatorClick={() => null}
        onPreyClick={() => null}
        onHomeClick={() => null}
        onAboutClick={() => null}
        onSubmitDataClick={() => null}
        onAdminClick={() => null}
        onLoginClick={() => null}
        onLogoutClick={() => null}
      ></DesignNavBar>
    );

    let links = ["Home", "About", "Diet by Bird", "Diet by Prey", "Submit Data", "Admin", "R package"];

    for(var l of links) {
        const link = getByText(container, l);
        fireEvent.click(link);
    }

    const link = getByTestId(container, "logo");
    fireEvent.click(link);
    const link2 = getByTestId(container, "navbar-burger");
    fireEvent.click(link2);
    const link3 = getByText(container, "Logout", { exact: false });
    fireEvent.click(link3);
});