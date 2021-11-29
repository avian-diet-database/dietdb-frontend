import React, { useState } from "react";
import { GET_PENDING_DIET } from "../../gql/queries";
import { DesignAdminApproval } from "./DesignAdminApproval";
import { DesignItem } from "./DesignItem";
import { DesignLargeGreenButton } from "./DesignLargeGreenButton";

export interface DesignAdminDashboardProps {
    pendingData: {
        unique_id: number
        common_name: string
        scientific_name: string
        subspecies: string
        family: string
        taxonomy: string
        longitude_dd: string
        latitude_dd: string
        altitude_min_m: string
        altitude_max_m: string
        altitude_mean_m: string
        location_region: string
        location_specific: string
        habitat_type: string
        observation_month_begin: number
        observation_month_end: number
        observation_year_begin: number
        observation_year_end: number
        observation_season: string
        analysis_number: string
        prey_kingdom: string
        prey_phylum: string
        prey_class: string
        prey_order: string
        prey_suborder: string
        prey_family: string
        prey_genus: string
        prey_scientific_name: string
        inclusive_prey_taxon: string
        prey_name_ITIS_ID: string
        prey_name_status: string
        prey_stage: string
        prey_part: string
        prey_common_name: string
        fraction_diet: string
        diet_type: string
        item_sample_size: number
        bird_sample_size: number
        sites: string
        study_type: string
        notes: string
        entered_by: string
        source: string
        table_fig_number: string
        title: string
        doi: string
        sex: string
        age_class: string
        within_study_data_source: string
        lastname_author: string
        year: number
        journal: string
        total_percent_diet: number
    }[],
    approvalData: {
        unique_id: number
        common_name: string
        scientific_name: string
        subspecies: string
        family: string
        taxonomy: string
        longitude_dd: string
        latitude_dd: string
        altitude_min_m: string
        altitude_max_m: string
        altitude_mean_m: string
        location_region: string
        location_specific: string
        habitat_type: string
        observation_month_begin: number
        observation_month_end: number
        observation_year_begin: number
        observation_year_end: number
        observation_season: string
        analysis_number: string
        prey_kingdom: string
        prey_phylum: string
        prey_class: string
        prey_order: string
        prey_suborder: string
        prey_family: string
        prey_genus: string
        prey_scientific_name: string
        inclusive_prey_taxon: string
        prey_name_ITIS_ID: string
        prey_name_status: string
        prey_stage: string
        prey_part: string
        prey_common_name: string
        fraction_diet: string
        diet_type: string
        item_sample_size: number
        bird_sample_size: number
        sites: string
        study_type: string
        notes: string
        entered_by: string
        source: string
        table_fig_number: string
        title: string
        doi: string
        sex: string
        age_class: string
        within_study_data_source: string
        lastname_author: string
        year: number
        journal: string
        total_percent_diet: number
        state: string
    }[],
}

export const DesignAdminDashboard = (props: DesignAdminDashboardProps) => {
    const styles = {
        adminContainerPg1: {
            display: "block",
        },
        adminContainerPg2: {
            display: "none",
        },
        adminContainerPg3: {
            display: "none",
        },
        pendingTableTitle: {
            fontSize: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
        },
        pendingTableContent: {
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "4px",
        },
        tableHeader: {
            padding: ".6rem",
            borderRadius: "4px",
            marginTop: "3rem",
        },
        displayFlex: {
            display: "flex",
        },
        justifyFlexStart: {
            justifyContent: "flex-start",
        },
        justifyFlexEnd: {
            justifyContent: "flex-end",
        },
        alignTextCenter: {
            textAlign: "center" as "center",
        },
        green: {
            color: "#01B684",
        },
        white: {
            color: "white",
        },
        backgroundGreen: {
            backgroundColor: "#01B684",
        },
        singleButton: {
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
        },
        doubleButton: {
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
        },
        noMarginBottom: {
            marginBottom: "0px",
        },
        editButton: {
            paddingRight: "1rem",
            paddingLeft: "1rem",
            marginTop: ".3rem",
            fontSize: "16px",
            backgroundColor: "#01B684",
            color: "white",
        },
        pendingTableColNameContainer: {
            display: "flex",
        },
        pendingTableColName: {
            color: "#363636",
            fontWeight: 700,
            fontSize: "18px",
        },
        pendingIDTitle: {
            width: "80px",
        },
        pendingAuthorTitle: {
            width: "170px",
        },
        pendingTitleTitle: {
            width: "320px",
        },
        pendingYearTitle: {
            width: "120px",
        },
        pendingUserTitle: {
            width: "120px",
        },
        approvalIDTitle: {
            minWidth: "80px",
        },
        approvalAuthorTitle: {
            minWidth: "170px",
        },
        approvalTitleTitle: {
            minWidth: "320px",
        },
        approvalYearTitle: {
            minWidth: "120px",
        },
    };

    function movePgToPg(currentPage: string, targetPage: string) {
        document.getElementById("page" + currentPage).style.display = "none";
        document.getElementById("page" + targetPage).style.display = "block";
    }

    let study_related_info_inital = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: '',
        16: '',
        17: '',
        18: '',
        19: '',
        20: '',
        21: '',
        22: '',
    };

    let analysis_info_inital = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
    };

    let diet_info_initial = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: '',
    };

    function renderDesignAdminApproval(data: any) {

        let study_related_info = {
            1: data.doi,
            2: data.title,
            3: data.journal,
            4: data.year,
            5: data.lastname_author,
            6: data.scientific_name,
            7: data.common_name,
            8: data.family,
            9: data.taxonomy,
            10: data.location_region,
            11: data.location_specific,
            12: data.latitude_dd,
            13: data.longitude_dd,
            14: data.altitude_min_m,
            15: data.altitude_max_m,
            16: data.altitude_mean_m,
            17: data.habitat_type,
            18: data.observation_month_begin,
            19: data.observation_year_begin,
            20: data.observation_month_end,
            21: data.observation_year_end,
            22: data.observation_season
        };

        let analysis_info = {
            1: data.diet_type,
            2: data.study_type,
            3: data.item_sample_size,
            4: data.bird_sample_size,
            5: data.sites,
            6: data.sex,
            7: data.age_class,
            8: data.within_study_data_source,
            9: data.table_fig_number,
        };

        let diet_info = {
            1: data.prey_common_name,
            2: data.inclusive_prey_taxon,
            3: data.prey_kingdom,
            4: data.prey_phylum,
            5: data.prey_class,
            6: data.prey_order,
            7: data.prey_suborder,
            8: data.prey_family,
            9: data.prey_genus,
            10: data.prey_scientific_name,
            11: data.fraction_diet,
            12: data.all_prey_diet_yn,
            13: data.prey_stage,
            14: data.prey_part,
            15: data.notes,
        };


        setStudyData(study_related_info)
        setAnalyisData(analysis_info)
        setDietData(diet_info)
        setViewData(data);
        console.log(data);
        // console.log("this data:" + approval_data.doi);
        setIsAdminApprovalPage(true);
    }

    const [isAdminApprovalPage, setIsAdminApprovalPage] = useState(false);
    const [viewData, setViewData] = useState(null); // viewData = data array element for which the user clicked "View"
    const [studyData, setStudyData] = useState(study_related_info_inital)
    const [analysisData, setAnalyisData] = useState(analysis_info_inital)
    const [dietData, setDietData] = useState(diet_info_initial)



    return !isAdminApprovalPage ? (
        <div className="container">
            <div id="page1" style={styles.adminContainerPg1}>
                <div>
                    <p className="title is-size-1" style={styles.alignTextCenter}>
                        Admin Dashboard
                    </p>
                </div>
                <div>
                    <div
                        style={{
                            ...styles.backgroundGreen,
                            ...styles.tableHeader,
                            ...styles.alignTextCenter,
                        }}
                        onClick={() => movePgToPg("1", "2")}
                    >
                        <p style={styles.pendingTableTitle}>
                            <strong style={styles.white}>Pending Approval</strong>
                        </p>
                    </div>
                    <div style={styles.pendingTableContent}>
                        <div style={styles.pendingTableColNameContainer}>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingIDTitle,
                                }}
                            >
                                ID
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingAuthorTitle,
                                }}
                            >
                                Author
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingTitleTitle,
                                }}
                            >
                                Title
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingYearTitle,
                                }}
                            >
                                Year
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingUserTitle,
                                }}
                            >
                                User
                            </p>
                        </div>
                        <div>
                            {props.pendingData === undefined
                                ? "No pending data to display"
                                : props.pendingData.map(data => (
                                    <div>
                                        <div style={styles.pendingTableColNameContainer}>
                                            <p style={styles.pendingIDTitle}>{data.unique_id}</p>
                                            <p style={styles.pendingAuthorTitle}>
                                                {data.source.split(",")[0]}
                                            </p>
                                            <p style={styles.pendingTitleTitle}>
                                                {data.source.split(",")[1]}
                                            </p>
                                            <p style={styles.pendingYearTitle}>
                                                {data.source.split(",")[2]}
                                            </p>
                                            <p style={styles.pendingUserTitle}>
                                                {data.entered_by}
                                            </p>
                                            <p
                                                style={styles.green}
                                                onClick={() => renderDesignAdminApproval(data)}
                                            >
                                                View
                                            </p>
                                        </div>
                                        <hr style={styles.backgroundGreen} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div style={styles.singleButton} onClick={() => movePgToPg('1', '3')}>
                    <DesignLargeGreenButton
                        buttonText={'Approval History'}
                        className={'approval-history-button-pg-1'} />
                </div>
            </div>
            <div id="page2" style={styles.adminContainerPg2}>
                <div>
                    <div
                        style={{
                            ...styles.backgroundGreen,
                            ...styles.tableHeader,
                            ...styles.alignTextCenter,
                        }}
                    >
                        <p style={styles.pendingTableTitle}>
                            <strong style={styles.white}>Pending Approval</strong>
                        </p>
                    </div>
                    <div style={styles.pendingTableContent}>
                        <div style={styles.pendingTableColNameContainer}>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingIDTitle,
                                }}
                            >
                                ID
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingAuthorTitle,
                                }}
                            >
                                Author
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingTitleTitle,
                                }}
                            >
                                Title
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingYearTitle,
                                }}
                            >
                                Year
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingUserTitle,
                                }}
                            >
                                User
                            </p>
                        </div>
                        <div>
                            {props.pendingData === undefined
                                ? "No pending history to display"
                                : props.pendingData.map(data => (
                                    <div>
                                        <div style={styles.pendingTableColNameContainer}>
                                            <p style={styles.pendingIDTitle}>{data.unique_id}</p>
                                            <p style={styles.pendingAuthorTitle}>
                                                {data.source.split(",")[0]}
                                            </p>
                                            <p style={styles.pendingTitleTitle}>
                                                {data.source.split(",")[1]}
                                            </p>
                                            <p style={styles.pendingYearTitle}>
                                                {data.source.split(",")[2]}
                                            </p>
                                            <p style={styles.pendingUserTitle}>
                                                {data.entered_by}
                                            </p>
                                            <p
                                                style={styles.green}
                                                onClick={() => renderDesignAdminApproval(data)}
                                            >
                                                View
                                            </p>
                                        </div>
                                        <hr style={styles.backgroundGreen} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div style={styles.singleButton} onClick={() => movePgToPg("2", "1")}>
                    <DesignLargeGreenButton
                        buttonText={"Back to Dashboard"}
                        className={"back-dashboard-button-pg-2"}
                    />
                </div>
            </div>
            {/* <div id="page2" style={styles.adminContainerPg2}>
                    <div>
                        <div style={{...styles.backgroundGreen, ...styles.tableHeader, ...styles.alignTextCenter}}>
                            <p style={styles.pendingTableTitle}><strong style={styles.white}>Pending Approval</strong></p>
                        </div>
                        <div style={styles.pendingTableContent}>
                            <p>table stuff here</p>
                        </div>
                    </div>
                    <div style={styles.singleButton} onClick={() => movePgToPg('2', '1')}>
                        <DesignLargeGreenButton 
                            buttonText={'Back to Dashboard'} 
                            className={'back-dashboard-button-pg-2'} />
                    </div>
                </div> */}
            <div id="page3" style={styles.adminContainerPg3}>
                <div>
                    <div
                        style={{
                            ...styles.backgroundGreen,
                            ...styles.tableHeader,
                            ...styles.alignTextCenter,
                        }}
                    >
                        <p style={styles.pendingTableTitle}>
                            <strong style={styles.white}>Approval History</strong>
                        </p>
                    </div>
                    <div style={styles.pendingTableContent}>
                        <div style={styles.pendingTableColNameContainer}>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingIDTitle,
                                }}
                            >
                                ID
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingAuthorTitle,
                                }}
                            >
                                Author
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingTitleTitle,
                                }}
                            >
                                Title
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingYearTitle,
                                }}
                            >
                                Year
                            </p>
                            <p
                                style={{
                                    ...styles.pendingTableColName,
                                    ...styles.pendingUserTitle,
                                }}
                            >
                                User
                            </p>
                        </div>
                        <div>
                            {props.approvalData === undefined
                                ? "No approval history to display"
                                :
                                props.approvalData.map(data => (
                                    <div>
                                        <div style={styles.pendingTableColNameContainer}>
                                            <p style={styles.approvalIDTitle}>{data.unique_id}</p>
                                            <p style={styles.approvalAuthorTitle}>
                                                {data.source.split(",")[0]}
                                            </p>
                                            <p style={styles.approvalTitleTitle}>
                                                {data.source.split(",")[1]}
                                            </p>
                                            <p style={styles.approvalYearTitle}>
                                                {data.source.split(",")[2]}
                                            </p>
                                            <p style={styles.pendingUserTitle}>
                                                {data.entered_by}
                                            </p>
                                            <p style={styles.green}>
                                                {data.state}
                                            </p>
                                        </div>
                                        <hr style={styles.backgroundGreen} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div style={styles.singleButton} onClick={() => movePgToPg("3", "1")}>
                    <DesignLargeGreenButton
                        buttonText={"Back to Dashboard"}
                        className={"back-dashboard-button-pg-3"}
                    />
                </div>
            </div>
        </div>
    ) : (
        // ADMIN APPROVAL PAGE CODE
        <DesignAdminApproval
            study_related_info={studyData}
            analysis_info={analysisData}
            diet_info={dietData}
            data={viewData}
            setIsAdminApprovalPage={setIsAdminApprovalPage}
        ></DesignAdminApproval>
    );
};

// Example of input data to DesignAdminApproval...
// Just shows the data pulled for each question from the submit data page
const mock_study_related_info = {
    1: "Author,JournalTitle,2000,LastName",
    2: "Doggy",
    3: "study_related_info answer 3",
    4: "study_related_info answer 4",
    5: "study_related_info answer 5",
    6: "study_related_info answer 6",
    7: "study_related_info answer 7",
    8: "study_related_info answer 8",
    9: "study_related_info answer 9",
};

const mock_analysis_info = {
    1: "analysis_info answer 1",
    2: "analysis_info answer 2",
    3: "analysis_info answer 3",
    4: "analysis_sdfsdfpopopo answer 4",
    5: "analysis_info answer 5",
    6: "analysis_info answer 6",
    7: "analysis_info answer 7",
    8: "analysis_info answer 8",
};

const mock_diet_info = {
    1: "diet_info answer 1",
    2: "diet_info answer 2",
    3: "diet_info answer 3",
    4: "diet_info answer 4",
    5: "diet_info answer 5",
    6: "diet_info answer 6",
};
