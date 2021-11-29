import React from "react";
import { DesignLargeGreenButton } from "./DesignLargeGreenButton";
import { APPROVE_PENDING_DIET, DENY_PENDING_DIET } from "../../gql/mutations";
import { useMutation, useQuery } from "@apollo/client";
  
export interface DesignAdminApprovalProps {
    // Key:Value pairs can be anything, but just has to be number:any type
    // Done to allow flexibility of props to include new questions
    study_related_info: {
        [key: number]: any,
    },
    analysis_info: {
        [key: number]: any,
    },
    diet_info: {
        [key: number]: any,
    },
    data: {
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
    };
  setIsAdminApprovalPage: (value: React.SetStateAction<boolean>) => void;
}

export const DesignAdminApproval = (props: DesignAdminApprovalProps) => {
  const [denyData, { data: deny_data, loading: deny_loading, error: deny_error }] = useMutation(DENY_PENDING_DIET);
  const [approveData, { data: approve_data, loading: approve_loading, error: approve_error }] = useMutation(APPROVE_PENDING_DIET);

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
  };

  const studyRelatedInfoQuestions = [
    "1. Do you have a study with quantitative data on avian diet? (DOI)",
    "1. Do you have a study with quantitative data on avian diet? (Title)",
    "1. Do you have a study with quantitative data on avian diet? (Journal)",
    "1. Do you have a study with quantitative data on avian diet? (Year)",
    "1. Do you have a study with quantitative data on avian diet? (Last Name of First Author)",
    "2. What bird species are you entering diet data for? (Scientific Name)",
    "2. What bird species are you entering diet data for? (New Species - Common Name)",
    "2. What bird species are you entering diet data for? (New Species - Family)",
    "2. What bird species are you entering diet data for? (New Species - Taxonomy)",
    "3. Was the data collected from within a single state, province, or country?",
    "4. What was the specific location name?",
    "5. Are lat-long coordinates provided for the study location? (Latitude)",
    "5. Are lat-long coordinates provided for the study location? (Longitude)",
    "6. Is elevational information provided for this study? (Minimum Elevation)",
    "6. Is elevational information provided for this study? (Maximum Elevation)",
    "6. Is elevational information provided for this study? (Mean Elevation)",
    "7. In what type of habitat was the study conducted?",
    "8. When was the diet data for this species in this study collected? (Month - Beginning of Study)",
    "8. When was the diet data for this species in this study collected? (Year - Beginning of Study)",
    "8. When was the diet data for this species in this study collected? (Month - End of Study)",
    "8. When was the diet data for this species in this study collected? (Year - End of Study)",
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
    "8. Please describe where in the published study you obtained the information for this diet analysis. (Table/Fig Number)",

  ];

  const dietInfoQuestions = [
    "1. Prey Name",
    "1. Taxonomic Level",
    "1. Kingdom",
    "1. Phylum",
    "1. Class",
    "1. Order",
    "1. Suborder",
    "1. Family",
    "1. Genus",
    "1. Species",
    "2. Percent of the diet?",
    "3. Does the value entered above reflect the % of the diet for all members of this prey name (inclusive), or only those members of the prey name that weren’t identified more finely (not inclusive)?",
    "4. Does this prey entry refer to a particular life stage?",
    "5. Does this prey entry refer to a particular prey part?",
    "6. If you have any miscellaneous notes about this prey item you may describe them here.",
  ];

  // const author = props.study_related_info[1].split(",")[0];
  // const title = props.study_related_info[1].split(",")[1];
  // const year = props.study_related_info[1].split(",")[2];
  // const user = props.study_related_info[1].split(",")[3];

function approve() {
  approveData({
    variables: {
      common_name: props.data.common_name,
      scientific_name: props.data.scientific_name,
      subspecies: props.data.subspecies,
      family: props.data.family,
      taxonomy: props.data.taxonomy,
      longitude_dd: props.data.longitude_dd,
      latitude_dd: props.data.latitude_dd,
      altitude_min_m: props.data.altitude_min_m,
      altitude_max_m: props.data.altitude_max_m,
      altitude_mean_m: props.data.altitude_mean_m,
      location_region: props.data.location_region,
      location_specific: props.data.location_specific,
      habitat_type: props.data.habitat_type,
      observation_month_begin: props.data.observation_month_begin,
      observation_month_end: props.data.observation_month_end,
      observation_year_begin: props.data.observation_year_begin,
      observation_year_end: props.data.observation_year_end,
      observation_season: props.data.observation_season,
      analysis_number: props.data.analysis_number,
      prey_kingdom: props.data.prey_kingdom,
      prey_phylum: props.data.prey_phylum,
      prey_class: props.data.prey_class,
      prey_order: props.data.prey_order,
      prey_suborder: props.data.prey_suborder,
      prey_family: props.data.prey_family,
      prey_genus: props.data.prey_genus,
      prey_scientific_name: props.data.prey_scientific_name,
      inclusive_prey_taxon: props.data.inclusive_prey_taxon,
      prey_name_ITIS_ID: props.data.prey_name_ITIS_ID,
      prey_name_status: props.data.prey_name_status,
      prey_stage: props.data.prey_stage,
      prey_part: props.data.prey_part,
      prey_common_name: props.data.prey_common_name,
      fraction_diet: props.data.fraction_diet,
      diet_type: props.data.diet_type,
      item_sample_size: props.data.item_sample_size,
      bird_sample_size: props.data.bird_sample_size,
      sites: props.data.sites,
      study_type: props.data.study_type,
      notes: props.data.notes,
      entered_by: props.data.entered_by,
      source: props.data.source,
      doi: props.data.doi,
      sex: props.data.sex,
      age_class: props.data.age_class,
      within_study_data_source: props.data.within_study_data_source,
      table_fig_number: props.data.table_fig_number,
      title: props.data.title,
      lastname_author: props.data.lastname_author,
      year: props.data.year,
      journal: props.data.journal,
      total_percent_diet: props.data.total_percent_diet,
      unique_id: props.data.unique_id,
    }
});

  //   approveData({
  //     variables: {
  //         common_name: formData.studyInfo.common_name, new_species: formData.studyInfo.new_species_yn, scientific_name: formData.studyInfo.scientific_name, subspecies: formData.studyInfo.subspecies, family: formData.studyInfo.family, source: formData.studyInfo.title + ", " + formData.studyInfo.journal + ", " + formData.studyInfo.year + ", " + formData.studyInfo.lastname_author,
  //         taxonomy: formData.studyInfo.taxonomy, longitude_dd: formData.studyInfo.longitude_dd, latitude_dd: formData.studyInfo.latitude_dd, altitude_max_m: formData.studyInfo.altitude_max_m, altitude_mean_m: formData.studyInfo.altitude_mean_m, altitude_min_m: formData.studyInfo.altitude_min_m,
  //         location_region: formData.studyInfo.location_region, location_specific: formData.studyInfo.location_specific, habitat_type: formData.studyInfo.habitat_type.toString(), observation_month_begin: Number(formData.studyInfo.observation_month_begin), observation_month_end: Number(formData.studyInfo.observation_month_begin),
  //         observation_year_begin: Number(formData.studyInfo.observation_year_begin), observation_year_end: Number(formData.studyInfo.observation_year_end), observation_season: formData.studyInfo.observation_season.toString(), analysis_number: formData.analysisInfo.analysis_number, prey_kingdom: preySubmissions[i].prey_kingdom, 
  //         prey_phylum: preySubmissions[i].prey_phylum, prey_order: preySubmissions[i].prey_order, prey_suborder: preySubmissions[i].prey_suborder, prey_family: preySubmissions[i].prey_family, prey_genus: preySubmissions[i].prey_genus, 
  //         prey_scientific_name: preySubmissions[i].prey_scientific_name, inclusive_prey_taxon: preySubmissions[i].inclusive_prey_taxon, prey_name_ITIS_ID: formData.dietInfo.prey_name_ITIS_ID, prey_name_status: formData.dietInfo.prey_name_status, 
  //         prey_stage: preySubmissions[i].prey_stage.toString(), prey_part: preySubmissions[i].prey_part.toString(), prey_common_name: preySubmissions[i].prey_common_name, fraction_diet: preySubmissions[i].fraction_diet, diet_type: formData.analysisInfo.diet_type,
  //         item_sample_size: Number(formData.analysisInfo.item_sample_size), bird_sample_size: Number(formData.analysisInfo.bird_sample_size), sites: formData.analysisInfo.sites, study_type: formData.analysisInfo.study_type, notes: formData.dietInfo.notes, 
  //         entered_by: formData.studyInfo.entered_by, doi: formData.studyInfo.doi, sex: formData.analysisInfo.sex, age_class: formData.analysisInfo.age_class, within_study_data_source: formData.analysisInfo.within_study_data_source,
  //         table_fig_number: formData.analysisInfo.table_fig_number, title: formData.studyInfo.title, lastname_author: formData.studyInfo.lastname_author, year: Number(formData.studyInfo.year), journal: formData.studyInfo.journal, total_percent_diet: formData.dietInfo.total_percent_diet
  //     }
  // });
  }
  
  function deny() {
    denyData({
      variables: {
        common_name: props.data.common_name,
        scientific_name: props.data.scientific_name,
        subspecies: props.data.subspecies,
        family: props.data.family,
        taxonomy: props.data.taxonomy,
        longitude_dd: props.data.longitude_dd,
        latitude_dd: props.data.latitude_dd,
        altitude_min_m: props.data.altitude_min_m,
        altitude_max_m: props.data.altitude_max_m,
        altitude_mean_m: props.data.altitude_mean_m,
        location_region: props.data.location_region,
        location_specific: props.data.location_specific,
        habitat_type: props.data.habitat_type,
        observation_month_begin: props.data.observation_month_begin,
        observation_month_end: props.data.observation_month_end,
        observation_year_begin: props.data.observation_year_begin,
        observation_year_end: props.data.observation_year_end,
        observation_season: props.data.observation_season,
        analysis_number: props.data.analysis_number,
        prey_kingdom: props.data.prey_kingdom,
        prey_phylum: props.data.prey_phylum,
        prey_class: props.data.prey_class,
        prey_order: props.data.prey_order,
        prey_suborder: props.data.prey_suborder,
        prey_family: props.data.prey_family,
        prey_genus: props.data.prey_genus,
        prey_scientific_name: props.data.prey_scientific_name,
        inclusive_prey_taxon: props.data.inclusive_prey_taxon,
        prey_name_ITIS_ID: props.data.prey_name_ITIS_ID,
        prey_name_status: props.data.prey_name_status,
        prey_stage: props.data.prey_stage,
        prey_part: props.data.prey_part,
        prey_common_name: props.data.prey_common_name,
        fraction_diet: props.data.fraction_diet,
        diet_type: props.data.diet_type,
        item_sample_size: props.data.item_sample_size,
        bird_sample_size: props.data.bird_sample_size,
        sites: props.data.sites,
        study_type: props.data.study_type,
        notes: props.data.notes,
        entered_by: props.data.entered_by,
        source: props.data.source,
        doi: props.data.doi,
        sex: props.data.sex,
        age_class: props.data.age_class,
        within_study_data_source: props.data.within_study_data_source,
        table_fig_number: props.data.table_fig_number,
        title: props.data.title,
        lastname_author: props.data.lastname_author,
        year: props.data.year,
        journal: props.data.journal,
        total_percent_diet: props.data.total_percent_diet,
        unique_id: props.data.unique_id,
      }
    });

  //   denyData({
  //     variables: {
  //         common_name: formData.studyInfo.common_name, new_species: formData.studyInfo.new_species_yn, scientific_name: formData.studyInfo.scientific_name, subspecies: formData.studyInfo.subspecies, family: formData.studyInfo.family, source: formData.studyInfo.title + ", " + formData.studyInfo.journal + ", " + formData.studyInfo.year + ", " + formData.studyInfo.lastname_author,
  //         taxonomy: formData.studyInfo.taxonomy, longitude_dd: formData.studyInfo.longitude_dd, latitude_dd: formData.studyInfo.latitude_dd, altitude_max_m: formData.studyInfo.altitude_max_m, altitude_mean_m: formData.studyInfo.altitude_mean_m, altitude_min_m: formData.studyInfo.altitude_min_m,
  //         location_region: formData.studyInfo.location_region, location_specific: formData.studyInfo.location_specific, habitat_type: formData.studyInfo.habitat_type.toString(), observation_month_begin: Number(formData.studyInfo.observation_month_begin), observation_month_end: Number(formData.studyInfo.observation_month_begin),
  //         observation_year_begin: Number(formData.studyInfo.observation_year_begin), observation_year_end: Number(formData.studyInfo.observation_year_end), observation_season: formData.studyInfo.observation_season.toString(), analysis_number: formData.analysisInfo.analysis_number, prey_kingdom: preySubmissions[i].prey_kingdom, 
  //         prey_phylum: preySubmissions[i].prey_phylum, prey_order: preySubmissions[i].prey_order, prey_suborder: preySubmissions[i].prey_suborder, prey_family: preySubmissions[i].prey_family, prey_genus: preySubmissions[i].prey_genus, 
  //         prey_scientific_name: preySubmissions[i].prey_scientific_name, inclusive_prey_taxon: preySubmissions[i].inclusive_prey_taxon, prey_name_ITIS_ID: formData.dietInfo.prey_name_ITIS_ID, prey_name_status: formData.dietInfo.prey_name_status, 
  //         prey_stage: preySubmissions[i].prey_stage.toString(), prey_part: preySubmissions[i].prey_part.toString(), prey_common_name: preySubmissions[i].prey_common_name, fraction_diet: preySubmissions[i].fraction_diet, diet_type: formData.analysisInfo.diet_type,
  //         item_sample_size: Number(formData.analysisInfo.item_sample_size), bird_sample_size: Number(formData.analysisInfo.bird_sample_size), sites: formData.analysisInfo.sites, study_type: formData.analysisInfo.study_type, notes: formData.dietInfo.notes, 
  //         entered_by: formData.studyInfo.entered_by, doi: formData.studyInfo.doi, sex: formData.analysisInfo.sex, age_class: formData.analysisInfo.age_class, within_study_data_source: formData.analysisInfo.within_study_data_source,
  //         table_fig_number: formData.analysisInfo.table_fig_number, title: formData.studyInfo.title, lastname_author: formData.studyInfo.lastname_author, year: Number(formData.studyInfo.year), journal: formData.studyInfo.journal, total_percent_diet: formData.dietInfo.total_percent_diet
  //     }
  // });
  }

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
                Data for {props.data.unique_id}: {props.data.lastname_author}, {props.data.scientific_name}
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
                        defaultValue={props.study_related_info[index+1]}
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
                        defaultValue={props.analysis_info[index+1]}
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
                        defaultValue={props.diet_info[index+1]}
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
    </div>
  );
};
