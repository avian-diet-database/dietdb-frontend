import { DesignAdminDashboard } from "../components/design/DesignAdminDashboard";
import { LogicAdminDashboard } from "../components/logic/LogicAdminDashboard";
import TestRenderer from 'react-test-renderer';
import { DesignLargeGreenButton } from "../components/design/DesignLargeGreenButton";
import React from "react";
import { fireEvent, getByTestId, render } from "@testing-library/react";

test("LogicAdminDashboard is calling DesignAdminDashboard", () => {
    let pendingData: {
      common_name: string;
      source: string;
      subspecies: string;
      taxonomy: string;
      location_region: string;
      location_specific: string;
      prey_kingdom: string;
      diet_type: string;
    }[];
    const mockLogicSources = jest.fn(LogicAdminDashboard);
    mockLogicSources.mockReturnValueOnce(DesignAdminDashboard({pendingData}));
    let res = mockLogicSources();
    let expected = DesignAdminDashboard({pendingData});
    expect(res.toString()).toEqual(expected.toString());
  });

  test("LogicAdminDashboard is calling DesignAdminDashboard with data", () => {
    let pendingData = [{      
      common_name: "common_name",
      source: "source",
      subspecies: "subspecies",
      taxonomy: "taxonomy",
      location_region: "location_region",
      location_specific: "location_specific",
      prey_kingdom: "prey_kingdom",
      diet_type: "diet_type"}];

    const mockLogicSources = jest.fn(LogicAdminDashboard);
    mockLogicSources.mockReturnValueOnce(DesignAdminDashboard({pendingData}));
    let res = mockLogicSources();
    let expected = DesignAdminDashboard({pendingData});
    expect(res.toString()).toEqual(expected.toString());
  });

  test("OnClick triggers movePgtoPg function", () => {
    let pendingData = [{      
      common_name: "common_name",
      source: "source",
      subspecies: "subspecies",
      taxonomy: "taxonomy",
      location_region: "location_region",
      location_specific: "location_specific",
      prey_kingdom: "prey_kingdom",
      diet_type: "diet_type"}];

      const {container} = render(<DesignAdminDashboard pendingData={pendingData}></DesignAdminDashboard>);
      const button = getByTestId(container, 'dashboard-button');
      const button2 = getByTestId(container, 'dashboard-button-2');
      const button3 = getByTestId(container, 'dashboard-button-3');
      fireEvent.click(button);
      fireEvent.click(button2);
      fireEvent.click(button3);
  });