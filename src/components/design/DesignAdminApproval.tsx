import React from "react";
import { DesignLargeGreenButton } from "./DesignLargeGreenButton";
import { DesignGreenButton } from "./DesignGreenButton";
import { remove } from "./DesignSubmitData";
import { APPROVE_PENDING_DIET, DENY_PENDING_DIET } from "../../gql/mutations";
import { useMutation, useQuery } from "@apollo/client";

export interface DesignAdminApprovalProps {
  // Key:Value pairs can be anything, but just has to be number:any type
  // Done to allow flexibility of props to include new questions
  study_related_info: {
    [key: number]: string;
  };
  analysis_info: {
    [key: number]: any;
  };
  diet_info: {
    [key: number]: any;
  };
  data: {
    [key: string]: any;
    // unique_id: number;
    // common_name: string;
    // scientific_name: string;
    // subspecies: string;
    // family: string;
    // taxonomy: string;
    // longitude_dd: string;
    // latitude_dd: string;
    // altitude_min_m: string;
    // altitude_max_m: string;
    // altitude_mean_m: string;
    // location_region: string;
    // location_specific: string;
    // habitat_type: string;
    // observation_month_begin: number;
    // observation_month_end: number;
    // observation_year_begin: number;
    // observation_year_end: number;
    // observation_season: string;
    // analysis_number: string;
    // prey_kingdom: string;
    // prey_phylum: string;
    // prey_class: string;
    // prey_order: string;
    // prey_suborder: string;
    // prey_family: string;
    // prey_genus: string;
    // prey_scientific_name: string;
    // inclusive_prey_taxon: string;
    // prey_name_ITIS_ID: string;
    // prey_name_status: string;
    // prey_stage: string;
    // prey_part: string;
    // prey_common_name: string;
    // fraction_diet: string;
    // diet_type: string;
    // item_sample_size: number;
    // bird_sample_size: number;
    // sites: string;
    // study_type: string;
    // notes: string;
    // entered_by: string;
    // source: string;
    // table_fig_number: string;
    // title: string;
    // doi: string;
    // sex: string;
    // age_class: string;
    // within_study_data_source: string;
    // lastname_author: string;
    // year: number;
    // journal: string;
    // total_percent_diet: number;
  };
  setIsAdminApprovalPage: (value: React.SetStateAction<boolean>) => void;
}

export const DesignAdminApproval = (props: DesignAdminApprovalProps) => {
  const [
    denyData,
    { data: deny_data, loading: deny_loading, error: deny_error },
  ] = useMutation(DENY_PENDING_DIET);
  const [
    approveData,
    { data: approve_data, loading: approve_loading, error: approve_error },
  ] = useMutation(APPROVE_PENDING_DIET);

  const styles = {
    adminContainerPg1: {
      display: "block",
    },
    singleButton: {
      marginTop: "50px",
      display: "flex",
      justifyContent: "center",
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
    alignTextCenter: {
      textAlign: "center" as "center",
    },
    white: {
      color: "white",
    },
    backgroundGreen: {
      backgroundColor: "#01B684",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "3rem",
    },
    sectionMargin: {
      marginBottom: "3rem",
    },
    inputBoxSpacing: {
      marginTop: ".5rem",
      marginBottom: ".5rem",
    },
    inputBox: {
      backgroundColor: "white",
      "&:focusVisible": {
        borderColor: "#01B684",
      },
    },
    buttonStyle: {
      backgroundColor: "#DD6060",
      paddingRight: "80px",
      paddingLeft: "80px",
      color: "white",
      fontSize: "25px",
      fontWeight: "bold" as "bold",
    },
    buttons: {
      display: "flex",
      justifyContent: "space-between",
    },
    questionListMargin: {
      marginTop: "1rem",
    },
    formSuccessTitle: {
      fontSize: '30px',
      fontWeight: 900,
      margin: '3rem',
  },formContainerApproved: {
    display: 'none',
    backgroundColor: 'white',
    width: '70%',
    textAlign: 'center' as 'center',
    margin: '15%',
    position: 'absolute' as 'absolute',
    top: '15%',
    borderRadius: '4px',
    boxShadow: '2px 2px 2px 2px lightgrey'
},formContainerDenied: {
  display: 'none',
  backgroundColor: 'white',
  width: '70%',
  textAlign: 'center' as 'center',
  margin: '15%',
  position: 'absolute' as 'absolute',
  top: '15%',
  borderRadius: '4px',
  boxShadow: '2px 2px 2px 2px lightgrey'
},
  popupButton: {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
  },
  };

  const studyRelatedInfoQuestions = [
    "1. Do you have a study with quantitative data on avian diet? (DOI)",
    "(Title)",
    "(Journal)",
    "(Year)",
    "(Last Name of First Author)",
    "2. What bird species are you entering diet data for? (Scientific Name)",
    "(New Species - Common Name)",
    "(New Species - Family)",
    "(New Species - Taxonomy)",
    "3. Was the data collected from within a single state, province, or country?",
    "4. What was the specific location name?",
    "5. Are lat-long coordinates provided for the study location? (Latitude)",
    "(Longitude)",
    "6. Is elevational information provided for this study? (Minimum Elevation)",
    "(Maximum Elevation)",
    "(Mean Elevation)",
    "7. In what type of habitat was the study conducted?",
    "8. When was the diet data for this species in this study collected? (Month - Beginning of Study)",
    "(Year - Beginning of Study)",
    "(Month - End of Study)",
    "(Year - End of Study)",
    "9. What time of year were data collected relative to the avian life cycle in that location?",
  ];

  const analysisInfoQuestions = [
    "1. How was the diet data quantified?",
    "2. How was the diet data collected?",
    "3. What is the total number of diet items this analysis is based on? Leave blank if unknown.",
    "4. How many individual birds is this analysis based on? Leave blank if unknown.",
    "5. How many distinct sites or localities are represented in this analysis? Leave blank if unknown.",
    "6. Does this analysis refer to a particular sex?",
    "7. Does this analysis refer to a particular age class?",
    "8. Please describe where in the published study you obtained the information for this diet analysis. (Within Study Data Source)",
    "(Table/Fig Number)",
  ];

  const dietInfoQuestions = [
    "Prey Name",
    "Taxonomic Level",
    "Kingdom",
    "Phylum",
    "Class",
    "Order",
    "Suborder",
    "Family",
    "Genus",
    "Species",
    "2. Percent of the diet?",
    "3. Does the value entered above reflect the % of the diet for all members of this prey name (inclusive), or only those members of the prey name that weren’t identified more finely (not inclusive)?",
    "4. Does this prey entry refer to a particular life stage?",
    "5. Does this prey entry refer to a particular prey part?",
    "6. If you have any miscellaneous notes about this prey item you may describe them here.",
  ];

  function approve() {
    approveData({
      variables: {
        common_name: formState.common_name,
        scientific_name: formState.scientific_name,
        subspecies: formState.subspecies,
        family: formState.family,
        taxonomy: formState.taxonomy,
        longitude_dd: formState.longitude_dd,
        latitude_dd: formState.latitude_dd,
        altitude_min_m: formState.altitude_min_m,
        altitude_max_m: formState.altitude_max_m,
        altitude_mean_m: formState.altitude_mean_m,
        location_region: formState.location_region,
        location_specific: formState.location_specific,
        habitat_type: formState.habitat_type,
        observation_month_begin: parseInt(formState.observation_month_begin),
        observation_month_end: parseInt(formState.observation_month_end),
        observation_year_begin: parseInt(formState.observation_year_begin),
        observation_year_end: parseInt(formState.observation_year_end),
        observation_season: formState.observation_season,
        analysis_number: formState.analysis_number,
        prey_kingdom: formState.prey_kingdom,
        prey_phylum: formState.prey_phylum,
        prey_class: formState.prey_class,
        prey_order: formState.prey_order,
        prey_suborder: formState.prey_suborder,
        prey_family: formState.prey_family,
        prey_genus: formState.prey_genus,
        prey_scientific_name: formState.prey_scientific_name,
        inclusive_prey_taxon: formState.inclusive_prey_taxon,
        prey_name_ITIS_ID: formState.prey_name_ITIS_ID,
        prey_name_status: formState.prey_name_status,
        prey_stage: formState.prey_stage,
        prey_part: formState.prey_part,
        prey_common_name: formState.prey_common_name,
        fraction_diet: formState.fraction_diet,
        diet_type: formState.diet_type,
        item_sample_size: parseInt(formState.item_sample_size),
        bird_sample_size: parseInt(formState.bird_sample_size),
        sites: formState.sites,
        study_type: formState.study_type,
        notes: formState.notes,
        entered_by: formState.entered_by,
        source: formState.title + ", " + formState.journal + ", " + formState.year + ", " + formState.lastname_author,
        doi: formState.doi,
        sex: formState.sex,
        age_class: formState.age_class,
        within_study_data_source: formState.within_study_data_source,
        table_fig_number: formState.table_fig_number,
        title: formState.title,
        lastname_author: formState.lastname_author,
        year: parseInt(formState.year),
        journal: formState.journal,
        total_percent_diet: parseFloat(formState.total_percent_diet),
        unique_id: formState.unique_id,
      },
    });

    document.getElementById('approved_state').style.display = 'block'

  }

  function deny() {
    denyData({
      variables: {
        common_name: formState.common_name,
        scientific_name: formState.scientific_name,
        subspecies: formState.subspecies,
        family: formState.family,
        taxonomy: formState.taxonomy,
        longitude_dd: formState.longitude_dd,
        latitude_dd: formState.latitude_dd,
        altitude_min_m: formState.altitude_min_m,
        altitude_max_m: formState.altitude_max_m,
        altitude_mean_m: formState.altitude_mean_m,
        location_region: formState.location_region,
        location_specific: formState.location_specific,
        habitat_type: formState.habitat_type,
        observation_month_begin: parseInt(formState.observation_month_begin),
        observation_month_end: parseInt(formState.observation_month_end),
        observation_year_begin: parseInt(formState.observation_year_begin),
        observation_year_end: parseInt(formState.observation_year_end),
        observation_season: formState.observation_season,
        analysis_number: formState.analysis_number,
        prey_kingdom: formState.prey_kingdom,
        prey_phylum: formState.prey_phylum,
        prey_class: formState.prey_class,
        prey_order: formState.prey_order,
        prey_suborder: formState.prey_suborder,
        prey_family: formState.prey_family,
        prey_genus: formState.prey_genus,
        prey_scientific_name: formState.prey_scientific_name,
        inclusive_prey_taxon: formState.inclusive_prey_taxon,
        prey_name_ITIS_ID: formState.prey_name_ITIS_ID,
        prey_name_status: formState.prey_name_status,
        prey_stage: formState.prey_stage,
        prey_part: formState.prey_part,
        prey_common_name: formState.prey_common_name,
        fraction_diet: formState.fraction_diet,
        diet_type: formState.diet_type,
        item_sample_size: parseInt(formState.item_sample_size),
        bird_sample_size: parseInt(formState.bird_sample_size),
        sites: formState.sites,
        study_type: formState.study_type,
        notes: formState.notes,
        entered_by: formState.entered_by,
        source: formState.source,
        doi: formState.doi,
        sex: formState.sex,
        age_class: formState.age_class,
        within_study_data_source: formState.within_study_data_source,
        table_fig_number: formState.table_fig_number,
        title: formState.title,
        lastname_author: formState.lastname_author,
        year: parseInt(formState.year),
        journal: formState.journal,
        total_percent_diet: parseFloat(formState.total_percent_diet),
        unique_id: formState.unique_id,
      },
    });

    document.getElementById('denied_state').style.display = 'block'

  }

  const formState = JSON.parse(JSON.stringify(props.data));

  return (
    <div className="container">
      <div id="adminApproval" style={styles.adminContainerPg1}>
        <div>
          <div
            style={{
              ...styles.backgroundGreen,
              ...styles.tableHeader,
              ...styles.alignTextCenter,
            }}
          >
            <p style={styles.pendingTableTitle}>
              <strong style={styles.white}>
                Data for {props.data.unique_id}: {props.data.lastname_author},{" "}
                {props.data.scientific_name}
              </strong>
            </p>
          </div>
          <div style={styles.pendingTableContent}>
            <div className="study-related-info" style={styles.sectionMargin}>
              <strong style={styles.heading}>Study-Related Information</strong>
              <div style={styles.questionListMargin}>
                {studyRelatedInfoQuestions.map((question, index) => (
                  <div>
                    <p>{question}</p>
                    <div className="control" style={styles.inputBoxSpacing}>
                      <input
                        className="input"
                        style={styles.inputBox}
                        type="text"
                        defaultValue={props.data[props.study_related_info[index + 1]]}
                        onChange={(e) => (formState[props.study_related_info[index + 1]] = e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="analysis-info" style={styles.sectionMargin}>
              <strong style={styles.heading}>Analysis Information</strong>
              <div style={styles.questionListMargin}>
                {analysisInfoQuestions.map((question, index) => (
                  <div>
                    <p>{question}</p>
                    <div className="control" style={styles.inputBoxSpacing}>
                      <input
                        className="input"
                        style={styles.inputBox}
                        type="text"
                        defaultValue={props.data[props.analysis_info[index + 1]]}
                        onChange={(e) => (formState[props.analysis_info[index + 1]] = e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="diet-info" style={styles.sectionMargin}>
              <strong style={styles.heading}>Diet Information</strong>
              <div style={styles.questionListMargin}>
                {dietInfoQuestions.map((question, index) => (
                  <div>
                    <p>{question}</p>
                    <div className="control" style={styles.inputBoxSpacing}>
                      <input
                        className="input"
                        style={styles.inputBox}
                        type="text"
                        defaultValue={props.data[props.diet_info[index + 1]]}
                        onChange={(e) => (formState[props.diet_info[index + 1]] = e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.buttons}>
        <div
          style={styles.singleButton}
          onClick={() => props.setIsAdminApprovalPage(false)}
        >
          <DesignLargeGreenButton
            buttonText={"Back to Dashboard"}
            className={"back-dashboard-button-pg-2"}
          />
        </div>
        <div style={styles.singleButton} onClick={() => approve()}>
          <DesignLargeGreenButton
            buttonText={"Approve"}
            className={"approve-button"}
          />
        </div>
        <div style={styles.singleButton} onClick={() => deny()}>
          <button className={"button deny-button"} style={styles.buttonStyle}>
            Deny
          </button>
        </div>
      </div>
      <div id="approved_state" style={styles.formContainerApproved}>
            <p style={styles.formSuccessTitle}>Successfully Approved!</p>
                <div style={styles.popupButton} onClick={() => remove('approved_state')}>
                    <DesignGreenButton
                        buttonText={'Confirm'}
                        className={'confirm'}
                    />
                </div>
            </div>

            <div id="denied_state" style={styles.formContainerDenied}>
            <p style={styles.formSuccessTitle}>Successfully Denied!</p>
                <div style={styles.popupButton} onClick={() => remove('denied_state')}>
                    <DesignGreenButton
                        buttonText={'Confirm'}
                        className={'confirm'}
                    />
                </div>
            </div>
    </div>
  );
};
