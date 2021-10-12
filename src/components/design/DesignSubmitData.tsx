import internal from "events";
import React from "react";
import { DesignGreenButton } from "../design/DesignGreenButton";

const styles = {
    formContainerPg1: {
        display: 'block',
    },
    formContainerPg2: {
        display: 'none',
    },
    formContainerPg3: {
        display: 'none',
    },
    displayFlex: {
        display: 'flex',
    },
    justifyFlexStart: {
        justifyContent: 'flex-start',
    },
    justifyFlexEnd: {
        justifyContent: 'flex-end',
    },
    alignTextCenter: {
        textAlign: 'center' as 'center',
    },
    studyInfoTitle: {
        marginBottom: '0px',
    },
    green: {
        color: '#01B684',
    },
    backgroundGreen: {
        backgroundColor: '#01B684',
    },
    requiredQuestion: {
        fontSize: '16px',
    },
    questionTextSize: {
        fontSize: '18px',
        fontWeight: 100
    },
    form: {
        paddingTop: '6rem',
    },
    inputBoxSpacing: {
        marginTop: '.5rem',
        marginBottom: '.5rem',
    },
    inputBox: {
        backgroundColor: 'white',
        '&:focusVisible': {
            borderColor: '#01B684',
        }
    },
    inputBoxMultipleSectionContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    inputBox4Sections: {
        width: '230px'
    },
    inputBox2Sections: {
        width: '473px'
    },
    singleButton: {
        marginTop: '200px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    doubleButton: {
        marginTop: '200px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    noMarginBottom: {
        marginBottom: '0px',
    },
    reviewInfoContainer: {
        marginTop: '3rem',
    },
    reviewInfoTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    editButton: {
        paddingRight: '1rem',
        paddingLeft: '1rem',
        marginTop: '.3rem',
        fontSize: '16px',
        backgroundColor: '#01B684',
        color: 'white',
    }

  };

function movePgToPg(currentPage: string, targetPage: string) {
    document.getElementById('page' + currentPage).style.display = 'none';
    document.getElementById('page' + targetPage).style.display = 'block';
}

function submitForm() {
    console.log("form submitted")
}

export const DesignSubmitData = () => {
    return (
            <div className="container">
                <div id="page1" style={styles.formContainerPg1}>
                    <div>
                        <p className="title is-size-1-" style={styles.alignTextCenter}>Submit Avian Data</p> 
                        <p className="title is-size-3" style={{...styles.alignTextCenter, ...styles.studyInfoTitle}}>Study-Related Information</p> 
                        <p style={{...styles.requiredQuestion, ...styles.alignTextCenter}}>Questions marked with <span style={styles.green}>*</span> are required</p>
                    </div>
                    <div style={styles.form}>
                        <div id="question1">
                            <p id="required" style={{...styles.questionTextSize}}>1. Do you have a study with <strong>quantitative</strong> data on avian diet? <span style={styles.green}>*</span></p>
                            <p style={styles.questionTextSize}>If <span style={styles.green}>yes</span>, do you know the study’s DOI?</p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                <input className="input" style={styles.inputBox} type="text" placeholder="Enter DOI" />
                            </div>
                            <p style={styles.questionTextSize}>If <span style={styles.green}>no</span>, please fill out relevant information below.</p>
                            <div style={styles.inputBoxMultipleSectionContainer}>
                                <div className="field">
                                    <label className="label" style={styles.questionTextSize}>Title</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox4Sections}} type="text" placeholder="Enter Title" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" style={styles.questionTextSize}>Journal</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox4Sections}} type="text" placeholder="Enter Journal" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" style={styles.questionTextSize}>Year</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox4Sections}} type="text" placeholder="Enter Year" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" style={styles.questionTextSize}>Last Name of First Author</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox4Sections}} type="text" placeholder="Enter Last Name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.singleButton} onClick={() => movePgToPg('1','2')}>
                        <DesignGreenButton
                            buttonText={'Next'}
                            className={'next-pg-1'}
                        />
                    </div>
                </div>
                <div id="page2" style={styles.formContainerPg2}>
                    <div>
                        <p className="title is-size-1-" style={styles.alignTextCenter}>Submit Avian Data</p> 
                        <p className="title is-size-3" style={{...styles.alignTextCenter, ...styles.studyInfoTitle}}>Study-Related Information</p> 
                        <p style={{...styles.requiredQuestion, ...styles.alignTextCenter}}>Questions marked with <span style={styles.green}>*</span> are required</p>
                    </div>
                    <div style={styles.form}>
                        <div id="question2">
                            <p id="required" style={{...styles.questionTextSize}}>2. What bird species are you entering diet data for? <span style={styles.green}>*</span></p>
                            <div style={{...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom}}>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Check your species against our database!</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Species" />
                                    </div>
                                </div>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Subspecies</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Subspecies" />
                                    </div>
                                </div>
                            </div>
                            <span id="required" style={{...styles.questionTextSize}}>New species? Enter it in manually</span>
                            <div style={{...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom}}>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Enter Species</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Species" />
                                    </div>
                                </div>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Taxonomy</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Taxonomy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="question3">
                            <p id="required" style={{...styles.questionTextSize}}>3. Was the data collected from within a single state, province, or country? <span style={styles.green}>*</span></p>
                            <p style={styles.questionTextSize}>If <span style={styles.green}>yes</span>, select a country.</p>
                            <div style={{...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom}}>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Country</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Country" />
                                    </div>
                                </div>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Specify State/Province</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Specify Area" />
                                    </div>
                                </div>
                            </div>
                            <p style={styles.questionTextSize}>If <span style={styles.green}>no</span>, select a region.</p>
                            <div style={{...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom}}>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Region</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Region" />
                                    </div>
                                </div>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Other</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Specify Area" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="question4">
                            <p id="required" style={{...styles.questionTextSize}}>4. What was the specific location name? <span style={styles.green}>*</span></p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                <input className="input" style={styles.inputBox} type="text" placeholder="Enter Location" />
                            </div>
                        </div>
                    </div>
                    <div style={styles.doubleButton}>
                        <div onClick={() => movePgToPg('2','1')}>
                            <DesignGreenButton
                                buttonText={'Back'}
                                className={'back-pg-2'}
                            />
                        </div>
                        <div onClick={() => movePgToPg('2','3')}>
                            <DesignGreenButton
                                buttonText={'Next'}
                                className={'next-pg-2'}
                            />
                        </div>
                    </div>
                </div>
                <div id="page3" style={styles.formContainerPg3}>
                    <div>
                        <p className="title is-size-1-" style={styles.alignTextCenter}>Submit Avian Data</p> 
                        <p className="title is-size-3" style={{...styles.alignTextCenter, ...styles.studyInfoTitle}}>Review Information</p>
                    </div>
                    <div style={styles.reviewInfoContainer}>
                        <div style={styles.reviewInfoTitleContainer}>
                            <p className="title is-size-3" style={{...styles.alignTextCenter, ...styles.studyInfoTitle}}>Study-Related Information</p>
                            <div onClick={() => movePgToPg('3', '1')}>
                                <button className="button edit-study-info-pg-3" style={styles.editButton}>Edit</button>
                            </div>
                        </div>
                        <div>
                            <p id="required" style={{...styles.questionTextSize}}>1. Do you have a study with <strong>quantitative</strong> data on avian diet? <span style={styles.green}>*</span></p>
                            <p id="required" style={{...styles.questionTextSize}}>2. What bird species are you entering diet data for? <span style={styles.green}>*</span></p>
                            <p id="required" style={{...styles.questionTextSize}}>3. Was the data collected from within a single state, province, or country? <span style={styles.green}>*</span></p>
                            <p id="required" style={{...styles.questionTextSize}}>4. What was the specific location name? <span style={styles.green}>*</span></p>
                        </div>
                    </div>
                    <hr style={styles.backgroundGreen}/>
                    <div style={styles.doubleButton}>
                        <div onClick={() => movePgToPg('3','2')}>
                            <DesignGreenButton
                                buttonText={'Back'}
                                className={'back-pg-3'}
                            />
                        </div>
                        <div onClick={() => submitForm()}>
                            <DesignGreenButton
                                buttonText={'Submit'}
                                className={'submit-pg-3'}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
