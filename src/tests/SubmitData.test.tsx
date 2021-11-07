import { DesignSubmitData } from "../components/design/DesignSubmitData";
import { LogicSubmitData } from "../components/logic/LogicSubmitData";
import { CREATE_PENDING_DIET_SKELETON } from "../gql/mutations";
import TestRenderer from 'react-test-renderer';
import { DesignDots } from "../components/design/DesignDots";
import React from "react";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';

test("LogicSubmitData should call DesignSubmitData without error", () => {
    TestRenderer.create(
        <MockedProvider mocks={[]}>
            <LogicSubmitData />
        </MockedProvider>
    );
});

test("LogicSubmitData should call DesignSubmitData with data without error", () => {
    let pendingData = [{
        common_name: "common_name",
        source: "source",
        subspecies: "subspecies",
        taxonomy: "taxonomy",
        location_region: "location_region",
        location_specific: "location_specific",
        prey_kingdom: "prey_kingdom",
        diet_type: "diet_type"
    }];

    const mocks = [
        {
            request: {
                query: CREATE_PENDING_DIET_SKELETON,
            },
            result: {
                data: { pendingData }
            },
        }
    ]

    const logicComponent = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <LogicSubmitData />
        </MockedProvider>,
    );

    const designComponent = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <DesignSubmitData addData={pendingData}></DesignSubmitData>
        </MockedProvider>
    );

    expect(designComponent.toString()).toStrictEqual(logicComponent.toString());
});

test("Next and Back buttons trigger movePgtoPg functions OnClick()", () => {
    let pendingData = [{
        common_name: "common_name",
        source: "source",
        subspecies: "subspecies",
        taxonomy: "taxonomy",
        location_region: "location_region",
        location_specific: "location_specific",
        prey_kingdom: "prey_kingdom",
        diet_type: "diet_type"
    }];

    const mocks = [
        {
            request: {
                query: CREATE_PENDING_DIET_SKELETON,
            },
            result: {
                data: { pendingData }
            },
        }
    ]

    const { container } = render(<MockedProvider mocks={mocks} addTypename={false}>
        <LogicSubmitData />
    </MockedProvider>)

    for (let i = 1; i <= 10; i++) {
        let strIdx = i.toString();
        fireEvent.click(getByTestId(container, 'submit-move-button-' + strIdx))

    }
});

test("Edit buttons trigger movePgtoPg functions OnClick()", () => {
    let pendingData = [{
        common_name: "common_name",
        source: "source",
        subspecies: "subspecies",
        taxonomy: "taxonomy",
        location_region: "location_region",
        location_specific: "location_specific",
        prey_kingdom: "prey_kingdom",
        diet_type: "diet_type"
    }];

    const mocks = [
        {
            request: {
                query: CREATE_PENDING_DIET_SKELETON,
            },
            result: {
                data: { pendingData }
            },
        }
    ]

    const { container } = render(<MockedProvider mocks={mocks} addTypename={false}>
        <LogicSubmitData />
    </MockedProvider>)

    for (let i = 1; i <= 3; i++) {
        let strIdx = i.toString();
        fireEvent.click(getByTestId(container, 'edit-button-' + strIdx))

    }
});

test("Submit button triggers submitForm function OnClick()", async () => {
    let pendingData = [{
        common_name: "common_name_to_be_implemented",
        source: ", , , ",
        subspecies: "",
        taxonomy: "",
        location_region: "",
        location_specific: "",
        prey_kingdom: "prey_kingdom_to_be_implemented",
        diet_type: "diet_type_to_be_implemented",
    }];

    const mocks = [
        {
            request: {
                query: CREATE_PENDING_DIET_SKELETON,
                variables: {
                    common_name: "common_name_to_be_implemented",
                    source: ", , , ",
                    subspecies: "",
                    taxonomy: "",
                    location_region: "",
                    location_specific: "",
                    prey_kingdom: "prey_kingdom_to_be_implemented",
                    diet_type: "diet_type_to_be_implemented",
                }
            },
            result: {
                data: { pendingData }
            },
        }
    ]

    const { container } = render(<MockedProvider mocks={mocks} addTypename={false}>
        <LogicSubmitData />
    </MockedProvider>);

    fireEvent.click(getByTestId(container, 'submit-button'));


});

test("Progress tracker renders correctly", () => {
    let pendingData = [{
        common_name: "common_name",
        source: "source",
        subspecies: "subspecies",
        taxonomy: "taxonomy",
        location_region: "location_region",
        location_specific: "location_specific",
        prey_kingdom: "prey_kingdom",
        diet_type: "diet_type"
    }];

    const mocks = [
        {
            request: {
                query: CREATE_PENDING_DIET_SKELETON,
            },
            result: {
                data: { pendingData }
            },
        }
    ]

    const { container } = render(<MockedProvider mocks={mocks} addTypename={false}>
        <LogicSubmitData />
    </MockedProvider>)

    for (let i = 1; i < 5; i++) {
        let strIdx = i.toString();

        const dotComponent = render(
            <DesignDots
                page={strIdx} />)

        expect(getByTestId(container, 'dot-' + strIdx).toString()).toEqual(dotComponent.container.toString());
    }

});

test("Display should make input box appear OnClick()", () => {
    let pendingData = [{
        common_name: "common_name",
        source: "source",
        subspecies: "subspecies",
        taxonomy: "taxonomy",
        location_region: "location_region",
        location_specific: "location_specific",
        prey_kingdom: "prey_kingdom",
        diet_type: "diet_type"
    }];

    const mocks = [
        {
            request: {
                query: CREATE_PENDING_DIET_SKELETON,
            },
            result: {
                data: { pendingData }
            },
        }
    ]

    const { container } = render(<MockedProvider mocks={mocks} addTypename={false}>
        <LogicSubmitData />
    </MockedProvider>)

    for (let i = 1; i <= 4; i++) {
        let strIdx = i.toString();
        fireEvent.click(getByTestId(container, 'display-' + strIdx));
    }


});

test("Remove should make input box appear OnClick()", () => {
    let pendingData = [{
        common_name: "common_name",
        source: "source",
        subspecies: "subspecies",
        taxonomy: "taxonomy",
        location_region: "location_region",
        location_specific: "location_specific",
        prey_kingdom: "prey_kingdom",
        diet_type: "diet_type"
    }];

    const mocks = [
        {
            request: {
                query: CREATE_PENDING_DIET_SKELETON,
            },
            result: {
                data: { pendingData }
            },
        }
    ]

    const { container } = render(<MockedProvider mocks={mocks} addTypename={false}>
        <LogicSubmitData />
    </MockedProvider>)

    for (let i = 1; i <= 4; i++) {
        let strIdx = i.toString();
        fireEvent.click(getByTestId(container, 'remove-' + strIdx));
    }

});






function waitFor(arg0: () => void): { container: any; } | PromiseLike<{ container: any; }> {
    throw new Error("Function not implemented.");
}
// let container: any = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// function testSubmitComponent() {

//     const [addData, { data, loading, error }] = useMutation(CREATE_PENDING_DIET_SKELETON);
//     if (error) {
//         return <div>Test failed - page did not render</div>;
//     }
//     return <div><DesignSubmitData addData={addData}></DesignSubmitData></div>;
// }

// test("LogicSubmitData is calling DesignSubmitData", () => {
//     act(() => {
//         testSubmitComponent()
//         const mockLogicSources = jest.fn(LogicSubmitData);
//     // mockLogicSources.mockReturnValueOnce(testSubmitComponent());
//     let res = mockLogicSources();
//         // let expected = testSubmitComponent();
//     expect(res.toString()).toBe(container.textContent);
//     });

//   });

//   test("LogicAdminDashboard is calling DesignAdminDashboard with data", () => {
//     let pendingData = [{      
//       common_name: "common_name",
//       source: "source",
//       subspecies: "subspecies",
//       taxonomy: "taxonomy",
//       location_region: "location_region",
//       location_specific: "location_specific",
//       prey_kingdom: "prey_kingdom",
//       diet_type: "diet_type"}];

//     const mockLogicSources = jest.fn(LogicAdminDashboard);
//     mockLogicSources.mockReturnValueOnce(DesignAdminDashboard({pendingData}));
//     let res = mockLogicSources();
//     let expected = DesignAdminDashboard({pendingData});
//     expect(res.toString()).toEqual(expected.toString());
//   });



//   test("OnClick triggers movePgtoPg function", () => {

//       const {container} = render(testSubmitComponent());

//       for(let i = 1; i <= 11; i++) {
//         let strIdx = i.toString();
//         fireEvent.click(getByTestId(container, 'submit-move-button-' + strIdx))

//       }
//     //   const button1 = getByTestId(container, 'submit-move-button-1');
//     //   const button2 = getByTestId(container, 'submit-move-button-2');
//     //   const button3 = getByTestId(container, 'submit-move-button-3');
//     //   const button4 = getByTestId(container, 'submit-move-button-4');
//     //   const button5 = getByTestId(container, 'submit-move-button-5');
//     //   const button6 = getByTestId(container, 'submit-move-button-6');
//     //   const button7 = getByTestId(container, 'submit-move-button-7');
//     //   const button8 = getByTestId(container, 'submit-move-button-8');
//     //   const button9 = getByTestId(container, 'submit-move-button-9');
//     //   const button10 = getByTestId(container, 'submit-move-button-10');
//     //   const button11 = getByTestId(container, 'submit-move-button-11');
//     //   fireEvent.click(button1);
//     //   fireEvent.click(button2);
//     //   fireEvent.click(button3);
//     //   fireEvent.click(button3);
//   });