import React from "react";
import { DesignLargeGreenButton } from "./DesignLargeGreenButton";
  
export interface DesignAdminApprovalProps {
    // Key:Value pairs can be anything, but just has to be number:string type
    // Done to allow flexibility of props to include new questions
    study_related_info: {
        [key: number]: string,
    },
    analysis_info: {
        [key: number]: string,
    },
    diet_info: {
        [key: number]: string,
  };
  setIsAdminApprovalPage: (value: React.SetStateAction<boolean>) => void;
}

export const DesignAdminApproval = (props: DesignAdminApprovalProps) => {
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
    "1. Do you have a study with quantitative data on avian diet?",
    "2. What bird species are you entering diet data for?",
    "3. Was the data collected from within a single state, province, or country?",
    "4. What was the specific location name?",
    "5. Are lat-long coordinates provided for the study location?",
    "6. Is elevational information provided for this study?",
    "7. In what type of habitat was the study conducted?",
    "8. When was the diet data for this species in this study collected?",
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
    "8. Please describe where in the published study you obtained the information for this diet analysis.",
  ];

  const dietInfoQuestions = [
    "1. Prey Name",
    "2. Percent of the diet?",
    "3. Does the value entered above reflect the % of the diet for all members of this prey name (inclusive), or only those members of the prey name that weren’t identified more finely (not inclusive)?",
    "4. Does this prey entry refer to a particular life stage?",
    "5. Does this prey entry refer to a particular prey part?",
    "6. If you have any miscellaneous notes about this prey item you may describe them here.",
  ];

  const author = props.study_related_info[1].split(",")[0];
  const title = props.study_related_info[1].split(",")[1];
  const year = props.study_related_info[1].split(",")[2];
  const user = props.study_related_info[1].split(",")[3];

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
                Data for [ID]: {author},{" " + props.study_related_info[2]}
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
        <div style={styles.singleButton}>
          <DesignLargeGreenButton
            buttonText={"Approve"}
            className={"approve-button"}
          />
        </div>
        <div style={styles.singleButton}>
          <button className={"button deny-button"} style={styles.buttonStyle}>
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};
