import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import { autoType } from "d3-dsv";
import internal from "events";
import React, { useState } from "react";
import { DesignGreenButton } from "../design/DesignGreenButton";

interface DesignSubmitDataProps {
    addData:(options?: MutationFunctionOptions<any, Record<string, any>>) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
}

export const DesignSubmitData = (props:DesignSubmitDataProps) => {
    const initialState = {
        doi: '',
        title: '',
        journal: '',
        year: '',
        lastnameAuthor: '',
        species: '',
        subspecies: '',
        newSpecies: '',
        taxonomy: '',
        country: '',
        stateOrProvince: '',
        region: '',
        locationOther: '',
        location: '',
    }

    const[{doi, title, journal, year, lastnameAuthor, species, subspecies, newSpecies, taxonomy, country, stateOrProvince, region, locationOther, location}, setStudyInfoState] = useState(initialState);

    const setStudyInfoInputState = (e:any) => {
        const { name, value } = e.target;
        setStudyInfoState(prevState => ({ ...prevState, [name]: value }));
    }

    // const [doi, setDoi] = useState('');
    // const [title, setTitle] = useState('');
    // const [journal, setJournal] = useState('');
    // const [year, setYear] = useState('');
    // const [lastnameAuthor, setLastnameAuthor] = useState('');
    // const [species, setSpecies] = useState('');
    // const [subspecies, setSubspecies] = useState('');
    // const [newSpecies, setNewSpecies] = useState('');
    // const [taxonomy, setTaxonomy] = useState('');
    // const [country, setCountry] = useState('');
    // const [stateOrProvince, setStateOrProvince] = useState('');
    // const [region, setRegion] = useState('');
    // const [locationOther, setLocationOther] = useState('');
    // const [location, setLocation] = useState('');
    // const [setState] = useState(initialState);

    let formData = {
        studyInfo: {
            doi: doi,
            title: title,
            journal: journal,
            year: year,
            lastnameAuthor: lastnameAuthor,
            species: species,
            subspecies: subspecies,
            newSpecies: newSpecies,
            taxonomy: taxonomy,
            country: country,
            stateOrProvince: stateOrProvince,
            region: region,
            locationOther: locationOther,
            location: location,        }
    }

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
        formContainerPg4: {
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
        },
        formSuccessTitle: {
            fontSize: '30px',
            fontWeight: 900,
            margin: '3rem',
        },
        popupButton: {
            padding: '2rem',
            display: 'flex',
            justifyContent: 'center',
        },
        checkmark: {
            paddingTop: '2rem'
        }
    
      };
    
    function movePgToPg(currentPage: string, targetPage: string, command?: string) {
        if(currentPage == '4') {
            document.getElementById('page3').style.display = 'none';
        }

        switch(command){
            case 'reset':
                setStudyInfoState({ ...initialState });
                break;
            case 'sameAnalysis':
                // use setState to revert other sections of form back to initial state
        }

        document.getElementById('page' + currentPage).style.display = 'none';
        document.getElementById('page' + targetPage).style.display = 'block';
    }
    
    function submitForm(targetPage: string) {
        document.getElementById('page' + targetPage).style.display = 'block';
        console.log(formData);

        // just hardcoded in for now to get this addData to work
        // also console logging for now just to make sure it works.. remove later
        console.log("does it work? " + props.addData({ 
            variables: { common_name: "common_name_to_be_implemented", source: formData.studyInfo.journal,
            subspecies:formData.studyInfo.subspecies, taxonomy: formData.studyInfo.taxonomy,
            location_region: formData.studyInfo.region, location_specific: formData.studyInfo.location, 
            prey_kingdom: "prey_kingdom_to_be_implemented", diet_type: "diet_type_to_be_implemented" } 
        }));
    }

    //const [studyInfoFormData, setStudyInfoFormData] = useState({doi:"", title:""});

    // let handleStudyInfoFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setStudyInfoFormData({...studyInfoFormData, [e.target.name]: e.target.value})
    // }


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
                                <input className="input" style={styles.inputBox} type="text" placeholder="Enter DOI" value={doi} name="doi" onChange={setStudyInfoInputState}/>
                            </div>
                            <p style={styles.questionTextSize}>If <span style={styles.green}>no</span>, please fill out relevant information below.</p>
                            <div style={styles.inputBoxMultipleSectionContainer}>
                                <div className="field">
                                    <label className="label" style={styles.questionTextSize}>Title</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox4Sections}} type="text" placeholder="Enter Title" value={title} name="title" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" style={styles.questionTextSize}>Journal</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox4Sections}} type="text" placeholder="Enter Journal" value={journal} name="journal" onChange={setStudyInfoInputState} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" style={styles.questionTextSize}>Year</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox4Sections}} type="text" placeholder="Enter Year" value={year} name="year" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" style={styles.questionTextSize}>Last Name of First Author</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox4Sections}} type="text" placeholder="Enter Last Name" value={lastnameAuthor} name="lastnameAuthor" onChange={setStudyInfoInputState}/>
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
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Species" value={species} name="species" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Subspecies</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Subspecies" value={subspecies} name="subspecies" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                            </div>
                            <span id="required" style={{...styles.questionTextSize}}>New species? Enter it in manually</span>
                            <div style={{...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom}}>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Enter Species</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Species" value={newSpecies} name="newSpecies" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Taxonomy</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Taxonomy" value={taxonomy} name="taxonomy" onChange={setStudyInfoInputState}/>
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
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Country" value={country} name="country" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Specify State/Province</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Specify Area" value={stateOrProvince} name="stateOrProvince" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                            </div>
                            <p style={styles.questionTextSize}>If <span style={styles.green}>no</span>, select a region.</p>
                            <div style={{...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom}}>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Region</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Enter Region" value={region} name="region" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                                <div className="field" style={styles.noMarginBottom}>
                                    <label className="label" style={styles.questionTextSize}>Other</label>
                                    <div className="control" style={styles.inputBoxSpacing}>
                                        <input className="input" style={{...styles.inputBox, ...styles.inputBox2Sections}} type="text" placeholder="Specify Area" value={locationOther} name="locationOther" onChange={setStudyInfoInputState}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="question4">
                            <p id="required" style={{...styles.questionTextSize}}>4. What was the specific location name? <span style={styles.green}>*</span></p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                <input className="input" style={styles.inputBox} type="text" placeholder="Enter Location" value={location} name="location" onChange={setStudyInfoInputState}/>
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
                            <p>{doi === '' ? 'Title: ' + title +'; Journal: ' + journal + '; Year: ' + year + '; Last Name of First Author: ' + lastnameAuthor : 'DOI: ' + doi}</p>
                            <p id="required" style={{...styles.questionTextSize}}>2. What bird species are you entering diet data for? <span style={styles.green}>*</span></p>
                            <p>{species === '' ? 'Species: ' + newSpecies + '; Taxonomy: ' + taxonomy : 'Species: ' + species + '; Subspecies: ' + subspecies}</p>
                            <p id="required" style={{...styles.questionTextSize}}>3. Was the data collected from within a single state, province, or country? <span style={styles.green}>*</span></p>
                            <p>{country === '' ? 'Region: ' + region + '; Other: ' + locationOther : 'Country: ' + country + '; State/Province: ' + stateOrProvince}</p>
                            <p id="required" style={{...styles.questionTextSize}}>4. What was the specific location name? <span style={styles.green}>*</span></p>
                            <p>{'Location name: ' + location}</p>
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
                        
                        <div onClick={() => submitForm('4')}>
                            <DesignGreenButton
                                buttonText={'Submit'}
                                className={'submit-pg-3'}
                            />
                        </div>
                        
                    </div>
                </div>
                <div id="page4" style={styles.formContainerPg4}>
                    <div style={styles.checkmark}>[put checkmark here]</div>
                    <p style={styles.formSuccessTitle}>Form Successfully Submitted!</p>
                    <div style={styles.popupButton} onClick={() => movePgToPg('4', '1', 'sameAnalysis')}>
                        <DesignGreenButton
                            buttonText={'Add another analysis'}
                            className={'add-analysis-pg-4'}
                        />
                    </div>
                    <div style={styles.popupButton} onClick={() => movePgToPg('4', '1', 'reset')}>
                        <DesignGreenButton
                            buttonText={'Done'}
                            className={'done-pg-4'}
                        />
                    </div>
                </div>
            </div>
    )
}
