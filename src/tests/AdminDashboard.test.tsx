import { DesignAdminDashboard } from "../components/design/DesignAdminDashboard";
import { LogicAdminDashboard } from "../components/logic/LogicAdminDashboard";

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