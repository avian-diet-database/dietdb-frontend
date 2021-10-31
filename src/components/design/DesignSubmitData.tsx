import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import { autoType } from "d3-dsv";
import internal from "events";
import React, { useState } from "react";
import { DesignGreenButton } from "../design/DesignGreenButton";
import { DesignDots } from "../design/DesignDots";
import { isWhiteSpaceLike } from "typescript";

interface DesignSubmitDataProps {
    addData: (options?: MutationFunctionOptions<any, Record<string, any>>) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
}

export const DesignSubmitData = (props: DesignSubmitDataProps) => {
    const initialState = {
        doi: '',
        title: '',
        journal: '',
        year: '',
        lastname_author: '',
        species: '',
        subspecies: '',
        new_species: '',
        taxonomy: '',
        country: '',
        state_province: '',
        location_region: '',
        location_other: '',
        location_specific: '',
        lat_long_yn: '',
        latitude_dd: '',
        longitude_dd: '',
        elevation_yn: '',
        altitude_min_m: '',
        altitude_max_m: '',
        altitude_mean_m: '',
        habitat_type: '',
        observation_month_begin: '',
        observation_month_end: '',
        observation_year_begin: '',
        observation_year_end: '',
        analysis_number: '',
        study_type: '',
        item_sample_size: '',
        bird_sample_size: '',
        sites: '',
        sex_yn: '',
        sex: '',
        age_class_yn: '',
        age_class: '',
        study_location: '',
        table_fig_number: '',
        prey_common_name: '',
        inclusive_prey_taxon: '',
        fraction_diet: '',
        all_prey_diet_yn: '',
        notes: '',
        observation_season: '',
        prey_stage: '',
        prey_part: '',
    }

    const [{ doi, title, journal, year, lastname_author, species, subspecies, new_species, taxonomy,
        country, state_province, location_region, location_other, location_specific, lat_long_yn,
        latitude_dd, longitude_dd, elevation_yn, altitude_min_m, altitude_max_m, altitude_mean_m,
        observation_month_begin, observation_month_end, observation_year_begin, observation_year_end,
        analysis_number, study_type, item_sample_size, bird_sample_size, sites, sex_yn, sex, age_class_yn,
        age_class, study_location, table_fig_number, prey_common_name, inclusive_prey_taxon, fraction_diet,
        all_prey_diet_yn, notes, observation_season, prey_stage, prey_part },
        setStudyInfoState] = useState(initialState);

    const [habitat_type, setHabitatType] = useState('');

    const setStudyInfoInputState = (e: any) => {
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
            lastname_author: lastname_author,
            species: species,
            subspecies: subspecies,
            new_species: new_species,
            taxonomy: taxonomy,
            country: country,
            state_province: state_province,
            location_region: location_region,
            location_other: location_other,
            location_specific: location_specific,
            lat_long_yn: lat_long_yn,
            latitude_dd: latitude_dd,
            longitude_dd: longitude_dd,
            elevation_yn: elevation_yn,
            altitude_min_m: altitude_min_m,
            altitude_max_m: altitude_max_m,
            altitude_mean_m: altitude_mean_m,
            habitat_type: habitat_type,
            observation_month_begin: observation_month_begin,
            observation_month_end: observation_month_end,
            observation_year_begin: observation_year_begin,
            observation_year_end: observation_year_end,
            analysis_number: analysis_number,
            study_type: study_type,
            item_sample_size: item_sample_size,
            bird_sample_size: bird_sample_size,
            sites: sites,
            sex_yn: sex_yn,
            sex: sex,
            age_class_yn: age_class_yn,
            age_class: age_class,
            study_location: study_location,
            table_fig_number: table_fig_number,
            prey_common_name: prey_common_name,
            inclusive_prey_taxon: inclusive_prey_taxon,
            fraction_diet: fraction_diet,
            all_prey_diet_yn: all_prey_diet_yn,
            notes: notes,
            observation_season: observation_season,
            prey_stage: prey_stage,
            prey_part: prey_part
        }
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
            display: 'none'
        },
        formContainerPg5: {
            display: 'none',
        },
        formContainerPg6: {
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
        fullWidth: {
            width: '100vw',
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
        inputBox3Sections: {
            width: '300px'
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
        noMargin: {
            margin: '0px',
        },
        noMarginBottom: {
            marginBottom: '0px',
        },
        noMarginTop: {
            marginTop: '0px',
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
        },
        selectBox: {
            borderColor: '#dbdbdb',
        },
        radioButtonSpacing: {
            paddingRight: '8rem',
        },
        radioButtonTextSpacing: {
            paddingLeft: '.25rem',
        },
        displayNone: {
            display: 'none',
        },
        checkboxSpacing: {
            paddingRight: '8rem'
        },
        addPreyButtonContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem'
        },
        tableHeader: {
            padding: '.6rem',
            borderRadius: '4px',
            marginTop: '3rem',
            textAlign: 'center' as 'center',
            backgroundColor: '#01B684',
        },
        tableContent: {
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '4px',
        },
        tableTitle: {
            fontWeight: 700,
            color: 'white',
            fontSize: '20px'
        }

    };

    function movePgToPg(currentPage: string, targetPage: string, command?: string) {
        if (currentPage == '6') {
            document.getElementById('page5').style.display = 'none';
        }

        switch (command) {
            case 'reset':
                setStudyInfoState({ ...initialState });
                break;
            case 'sameAnalysis':
            // use setState to revert other sections of form back to initial state
        }

        document.getElementById('page' + currentPage).style.display = 'none';
        document.getElementById('page' + targetPage).style.display = 'block';
    }

    function setHabitatStates(length: number) {
        let i;
        let habitats;
        for (i = 1; i <= length; i++) {
            let element = document.getElementById('habitat' + i) as HTMLInputElement;
            console.log(element)
            if (element.checked === true) {
                habitats = habitats + ' ' + document.getElementById('habitat' + i).nodeValue
            }
            //document.getElementById('habitat' + i).ariaChecked === 'true' ? habitats = habitats + ' ' + document.getElementById('habitat' + i).nodeValue : null
        }

        setHabitatType(habitats)
        console.log(habitats)
        console.log(habitat_type)
    }

    function addPreyEntry() {

    }

    function setObservationSeason(id: string) {
        let element = document.getElementById(id) as HTMLInputElement;

        //element.checked === true 
    }

    function display(id: string, displayType?: string) {
        displayType !== undefined ?
            document.getElementById(id).style.display = displayType :
            document.getElementById(id).style.display = 'block';
    }

    function remove(id: string) {
        document.getElementById(id).style.display = 'none';
    }

    function submitForm(targetPage: string) {
        document.getElementById('page' + targetPage).style.display = 'block';
        console.log(formData);

        props.addData({
            variables: {
                common_name: "common_name_to_be_implemented", source: formData.studyInfo.title + ", " + formData.studyInfo.journal + ", " + formData.studyInfo.year + ", " + formData.studyInfo.lastname_author,
                subspecies: formData.studyInfo.subspecies, taxonomy: formData.studyInfo.taxonomy,
                location_region: formData.studyInfo.location_region, location_specific: formData.studyInfo.location_specific,
                prey_kingdom: "prey_kingdom_to_be_implemented", diet_type: "diet_type_to_be_implemented"
            }
        });
    }

    return (
        <div className="container">
            <div id="page1" style={styles.formContainerPg1}>
                <div>
                    <p className="title is-size-1-" style={styles.alignTextCenter}>Submit Avian Data</p>
                    <p className="title is-size-3" style={{ ...styles.alignTextCenter, ...styles.studyInfoTitle }}>Study-Related Information</p>
                    <p style={{ ...styles.requiredQuestion, ...styles.alignTextCenter }}>Questions marked with <span style={styles.green}>*</span> are required</p>
                </div>
                <div style={styles.form}>
                    <div id="question1">
                        <p id="required" style={{ ...styles.questionTextSize }}>1. Do you have a study with <strong>quantitative</strong> data on avian diet? <span style={styles.green}>*</span></p>
                        <p style={styles.questionTextSize}>If <span style={styles.green}>yes</span>, do you know the study’s DOI?</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={styles.inputBox} type="text" placeholder="Enter DOI" value={doi} name="doi" onChange={setStudyInfoInputState} />
                        </div>
                        <p style={styles.questionTextSize}>If <span style={styles.green}>no</span>, please fill out relevant information below.</p>
                        <div style={styles.inputBoxMultipleSectionContainer}>
                            <div className="field">
                                <label className="label" style={styles.questionTextSize}>Title</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Title" value={title} name="title" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" style={styles.questionTextSize}>Journal</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Journal" value={journal} name="journal" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" style={styles.questionTextSize}>Year</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Year" value={year} name="year" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" style={styles.questionTextSize}>Last Name of First Author</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Last Name" value={lastname_author} name="lastnameAuthor" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.singleButton} onClick={() => movePgToPg('1', '2')}>
                    <DesignDots
                        page='1'
                        marginRight='32%'
                    />
                    <DesignGreenButton
                        buttonText={'Next'}
                        className={'next-pg-1'}
                    />
                </div>
            </div>
            <div id="page2" style={styles.formContainerPg2}>
                <div>
                    <p className="title is-size-1-" style={styles.alignTextCenter}>Submit Avian Data</p>
                    <p className="title is-size-3" style={{ ...styles.alignTextCenter, ...styles.studyInfoTitle }}>Study-Related Information</p>
                    <p style={{ ...styles.requiredQuestion, ...styles.alignTextCenter }}>Questions marked with <span style={styles.green}>*</span> are required</p>
                </div>
                <div style={styles.form}>
                    <div id="question2">
                        <p id="required" style={{ ...styles.questionTextSize }}>2. What bird species are you entering diet data for? <span style={styles.green}>*</span></p>
                        <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Check your species against our database!</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Species" value={species} name="species" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Subspecies</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Subspecies" value={subspecies} name="subspecies" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                        <span id="required" style={{ ...styles.questionTextSize }}>New species? Enter it in manually</span>
                        <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Enter Species</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Species" value={new_species} name="new_species" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={{ ...styles.noMarginBottom }}>
                                <label className="label" style={styles.questionTextSize}>Taxonomy</label>
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
                                    <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={taxonomy} name="taxonomy" onChange={setStudyInfoInputState}>
                                        <option>Select Taxonomy</option>
                                        <option>taxonomy1</option>
                                        <option>taxonomy2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="question3">
                        <p id="required" style={{ ...styles.questionTextSize }}>3. Was the data collected from within a single state, province, or country? <span style={styles.green}>*</span></p>
                        <p style={styles.questionTextSize}>If <span style={styles.green}>yes</span>, select a country.</p>
                        <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Country</label>
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
                                    <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={country} name="country" onChange={setStudyInfoInputState}>
                                        <option>Select Country</option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Specify State/Province</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Specify Area" value={state_province} name="state_province" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                        <p style={styles.questionTextSize}>If <span style={styles.green}>no</span>, select a region.</p>
                        <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Region</label>
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
                                    <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={location_region} name="location_region" onChange={setStudyInfoInputState}>
                                        <option>Select Region</option>
                                        <option>Midwest</option>
                                        <option>Southeast</option>
                                        <option>Northeast</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Other</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Specify Area" value={location_other} name="location_other" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="question4">
                        <p id="required" style={{ ...styles.questionTextSize }}>4. What was the specific location name? <span style={styles.green}>*</span></p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={styles.inputBox} type="text" placeholder="Enter Location" value={location_specific} name="location_specific" onChange={setStudyInfoInputState} />
                        </div>
                    </div>
                    <div id="question5">
                        <p id="required" style={{ ...styles.questionTextSize }}>5. Are lat-long coordinates provided for the study location? <span style={styles.green}>*</span></p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="radio" style={styles.radioButtonSpacing}>
                                <input type="radio" value="yes" name="lat_long_yn" onChange={setStudyInfoInputState} onClick={() => display('lat-long-question', 'flex')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="lat_long_yn" onChange={setStudyInfoInputState} onClick={() => remove('lat-long-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No</span>
                            </label>
                        </div>
                        <div id="lat-long-question" style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom, ...styles.displayNone }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Latitude (in decimal degrees)" value={latitude_dd} name="latitude_dd" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Longitutde (in decimal degrees)" value={longitude_dd} name="longitude_dd" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="question6">
                        <p id="required" style={{ ...styles.questionTextSize }}>6. Is elevational information provided for this study? <span style={styles.green}>*</span></p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="radio" style={styles.radioButtonSpacing}>
                                <input type="radio" value="yes" name="elevation_yn" onChange={setStudyInfoInputState} onClick={() => display('elevation-question', 'flex')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="elevation_yn" onChange={setStudyInfoInputState} onClick={() => remove('elevation-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No</span>
                            </label>
                        </div>
                        <div id="elevation-question" style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom, ...styles.displayNone }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox3Sections }} type="text" placeholder="Enter Minimum Elevation" value={altitude_min_m} name="altitude_min_m" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox3Sections }} type="text" placeholder="Enter Maximum Elevation" value={altitude_max_m} name="altitude_max_m" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox3Sections }} type="text" placeholder="Enter Mean Elevation" value={altitude_mean_m} name="altitude_mean_m" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="question7">
                        <p id="required" style={{ ...styles.questionTextSize }}>7. In what type of habitat was the study conducted? <span style={styles.green}>*</span></p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="checkbox" style={{ ...styles.checkboxSpacing }}>
                                <input value="Habitat 1" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Mountain</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input value="Habitat 2" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Lake</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input value="Habitat 3" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Deciduous Forest</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input id="habitat4" value="Habitat 4" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Tropical Forest</span>
                            </label>
                            <label className="checkbox">
                                <input id="habitat5" value="Habitat 5" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Wetlands</span>
                            </label>
                            {/* {setHabitatStates(4)} */}
                        </div>
                    </div>
                    <div id="question8">
                        <p id="required" style={{ ...styles.questionTextSize }}>8. When was the diet data for this species in this study collected? <span style={styles.green}>*</span></p>
                        <div style={styles.inputBoxMultipleSectionContainer}>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Month (Beginning of Study)</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Month" value={observation_month_begin} name="observation_month_begin" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Year (Beginning of Study)</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Year" value={observation_year_begin} name="observation_year_begin" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Month (End of Study)</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Month" value={observation_month_end} name="observation_month_end" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div id="required" className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Year (End of Study) <span style={styles.green}>*</span></label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Year" value={observation_year_end} name="observation_year_end" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="question9">
                        <p id="required" style={{ ...styles.questionTextSize }}>9. What time of year were data collected relative to the avian life cycle in that location? <span style={styles.green}>*</span></p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input id="breeding-season" value="breeding-season" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Breeding Season</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input id="non-breeding-season" value="non-breeding-season" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Non-Breeding Season</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input id="pre-breeding-migration" value="pre-breeding-migration" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Pre-Breeding Migration</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input id="post-breeding-migration" value="post-breeding-migration" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Post-Breeding Migration</span>
                            </label>
                            <label className="checkbox">
                                <input id="unspecified" value="unspecified" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Unspecified</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div style={styles.doubleButton}>
                    <div onClick={() => movePgToPg('2', '1')}>
                        <DesignGreenButton
                            buttonText={'Back'}
                            className={'back-pg-2'}
                        />
                    </div>
                    <div>
                        <DesignDots
                            page='2'
                        />
                    </div>
                    <div onClick={() => movePgToPg('2', '3')}>
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
                    <p className="title is-size-3" style={{ ...styles.alignTextCenter, ...styles.studyInfoTitle }}>Analysis Information</p>
                    <p style={{ ...styles.requiredQuestion, ...styles.alignTextCenter }}>Questions marked with <span style={styles.green}>*</span> are required</p>
                </div>
                <div style={styles.form}>
                    <div id="analysis-question1">
                        <p id="required" style={{ ...styles.questionTextSize }}>1. How was the diet data quantified? <span style={styles.green}>*</span></p>
                        <div className="field">
                            <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={analysis_number} name="analysis_number" onChange={setStudyInfoInputState}>
                                    <option>Select Quantification</option>
                                    <option>Physical Measurements</option>
                                    <option>Approximations</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="analysis-question2">
                        <p id="required" style={{ ...styles.questionTextSize }}>2. How was the diet data collected? <span style={styles.green}>*</span></p>
                        <div className="field">
                            <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={study_type} name="study_type" onChange={setStudyInfoInputState}>
                                    <option>Select Method</option>
                                    <option>In the field</option>
                                    <option>Compilation of other analyses</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                        <div id="analysis-question3">
                            <p style={{ ...styles.questionTextSize }}>3. What is the total number of diet items this analysis is based on? Leave blank if unknown.</p>
                            <div className="control" style={{ ...styles.inputBoxSpacing, ...styles.inputBoxSpacing }}>
                                <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Value" value={item_sample_size} name="item_sample_size" onChange={setStudyInfoInputState} />
                            </div>
                        </div>
                        <div id="analysis-question4">
                            <p style={{ ...styles.questionTextSize }}>4. How many individual birds is this analysis based on? Leave blank if unknown.</p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Value" value={bird_sample_size} name="bird_sample_size" onChange={setStudyInfoInputState} />
                            </div>
                        </div>
                    </div>
                    <div id="analysis-question5">
                        <p style={{ ...styles.questionTextSize }}>5. How many distinct sites or localities are represented in this analysis? Leave blank if unknown.</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={styles.inputBox} type="text" placeholder="Enter Value" value={sites} name="sites" onChange={setStudyInfoInputState} />
                        </div>
                    </div>
                    <div id="analysis-question6">
                        <p style={{ ...styles.questionTextSize }}>6. Does this analysis refer to a particular sex?</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="radio" style={styles.radioButtonSpacing}>
                                <input type="radio" value="yes" name="sex_yn" onChange={setStudyInfoInputState} onClick={() => display('sex-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="sex_yn" onChange={setStudyInfoInputState} onClick={() => remove('sex-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No</span>
                            </label>
                        </div>
                        <div id="sex-question" style={{ ...styles.noMarginBottom, ...styles.displayNone }}>
                            <div className="field">
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                    <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={sex} name="sex" onChange={setStudyInfoInputState}>
                                        <option>Select Sex</option>
                                        <option>Female</option>
                                        <option>Male</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="analysis-question7">
                        <p style={{ ...styles.questionTextSize }}>7. Does this analysis refer to a particular age class?</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="radio" style={styles.radioButtonSpacing}>
                                <input type="radio" value="yes" name="age_class_yn" onChange={setStudyInfoInputState} onClick={() => display('age-class-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="age_class_yn" onChange={setStudyInfoInputState} onClick={() => remove('age-class-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No</span>
                            </label>
                        </div>
                        <div id="age-class-question" style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom, ...styles.displayNone }}>
                            <div className="field">
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                    <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={age_class} name="age_class" onChange={setStudyInfoInputState}>
                                        <option>Select Age Class</option>
                                        <option>age class 1</option>
                                        <option>age class 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="analysis-question8">
                        <p style={{ ...styles.questionTextSize }}>8. Please describe where in the published study you obtained the information for this diet analysis.</p>
                        <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                            <div className="field">
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                    <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.inputBox2Sections }} value={study_location} name="study_location" onChange={setStudyInfoInputState}>
                                        <option>Select Location</option>
                                        <option>location1</option>
                                        <option>location2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Table or Figure Number" value={table_fig_number} name="table_fig_number" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.doubleButton}>
                    <div onClick={() => movePgToPg('3', '2')}>
                        <DesignGreenButton
                            buttonText={'Back'}
                            className={'back-pg-3'}
                        />
                    </div>
                    <div>
                        <DesignDots
                            page='3'
                        />
                    </div>
                    <div onClick={() => movePgToPg('3', '4')}>
                        <DesignGreenButton
                            buttonText={'Next'}
                            className={'next-pg-3'}
                        />
                    </div>
                </div>
            </div>
            <div id="page4" style={styles.formContainerPg4}>
                <div>
                    <p className="title is-size-1-" style={styles.alignTextCenter}>Submit Avian Data</p>
                    <p className="title is-size-3" style={{ ...styles.alignTextCenter, ...styles.studyInfoTitle }}>Diet Information</p>
                    <p style={{ ...styles.requiredQuestion, ...styles.alignTextCenter }}>Questions marked with <span style={styles.green}>*</span> are required</p>
                </div>
                <div style={styles.form}>
                    <div id="diet-question1">
                        <p id="required" style={{ ...styles.questionTextSize }}>1. Prey Name <span style={styles.green}>*</span></p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={{ ...styles.inputBox }} type="text" placeholder="Search Prey Name" value={prey_common_name} name="prey_common_name" onChange={setStudyInfoInputState} />
                        </div>
                        <p style={styles.questionTextSize}>Please clarify the taxonomic classification of this name.</p>
                        <p style={styles.questionTextSize}>First, what is the taxonomic level of this name?</p>
                        <div className="field">
                            <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={inclusive_prey_taxon} name="inclusive_prey_taxon" onChange={setStudyInfoInputState}>
                                    <option>Select Taxonomic Level</option>
                                    <option>Kingdom</option>
                                    <option>Phylum</option>
                                    <option>Class</option>
                                    <option>Order</option>
                                    <option>Suborder</option>
                                    <option>Family</option>
                                    <option>Genus</option>
                                    <option>Species</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="diet-question2">
                        <p id="required" style={{ ...styles.questionTextSize }}>2. Percent of the diet?</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={{ ...styles.inputBox }} type="text" placeholder="Enter Value" value={fraction_diet} name="fraction_diet" onChange={setStudyInfoInputState} />
                        </div>
                    </div>
                    <div id="diet-question3">
                        <p style={{ ...styles.questionTextSize }}>3. Does the value entered above reflect the % of the diet for all members of this prey name (inclusive), or only those members of the prey name that weren’t identified more finely (not inclusive)? Hover over info button for examples.</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="radio" style={styles.radioButtonSpacing}>
                                <input type="radio" value="yes" name="all_prey_diet_yn" onChange={setStudyInfoInputState} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes (inclusive)</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="all_prey_diet_yn" onChange={setStudyInfoInputState} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No (not inclusive)</span>
                            </label>
                        </div>
                    </div>
                    <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                        <div id="diet-question4">
                            <p style={{ ...styles.questionTextSize }}>4. Does this prey entry refer to a particular life stage?</p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="adult" value="adult" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>adult</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="nypmh" value="nypmh" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>nypmh</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="egg" value="egg" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>egg</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="juvenile" value="juvenile" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>juvenile</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="larva" value="larva" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>larva</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="pupa" value="pupa" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>pupa</span>
                                </label>
                                <label className="checkbox">
                                    <input id="teneral" value="teneral" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>teneral</span>
                                </label>
                            </div>
                        </div>
                        <div id="diet-question5">
                            <p style={{ ...styles.questionTextSize }}>5. Does this prey entry refer to a particular prey part? <span style={styles.green}>*</span></p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="bark" value="bark" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>bark</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="fruit" value="fruit" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>fruit</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="root" value="root" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>root</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="statoblasts" value="statoblasts" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>statoblasts</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="bud" value="bud" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>bud</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="gall" value="gall" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>gall</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="sap" value="sap" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>sap</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="vegetation" value="vegetation" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>vegetation</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="feces" value="feces" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>feces</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="oogonium" value="oogonium" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>oogonium</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="seed" value="seed" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>seed</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="flower" value="flower" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>flower</span>
                                </label>
                                <label className="checkbox" style={styles.checkboxSpacing}>
                                    <input id="pollen" value="pollen" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>pollen</span>
                                </label>
                                <label className="checkbox">
                                    <input id="spore" value="spore" type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>spore</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id="diet-question6">
                        <p style={{ ...styles.questionTextSize }}>6. If you have any miscellaneous notes about this prey item you may describe them here.</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={{ ...styles.inputBox }} type="text" placeholder="Enter Notes" value={notes} name="notes" onChange={setStudyInfoInputState} />
                        </div>
                    </div>
                </div>
                {/* <div style={styles.addPreyButtonContainer} onClick={() => addPreyEntry()}>
                    <DesignGreenButton 
                        buttonText={'Add another prey?'}
                        className={'add-prey-pg-4'}
                    />
                </div>
                <div>
                    <div style={styles.tableHeader}>
                        <p style={styles.tableTitle}>Current Prey Submissions</p>
                    </div>
                    <div style={styles.tableContent}>
                        table stuff
                    </div>
                </div> */}
                <div style={styles.doubleButton}>
                    <div onClick={() => movePgToPg('4', '3')}>
                        <DesignGreenButton
                            buttonText={'Back'}
                            className={'back-pg-4'}
                        />
                    </div>
                    <div>
                        <DesignDots
                            page='4'
                        />
                    </div>
                    <div onClick={() => movePgToPg('4', '5')}>
                        <DesignGreenButton
                            buttonText={'Next'}
                            className={'next-pg-4'}
                        />
                    </div>
                </div>
            </div>
            <div id="page5" style={styles.formContainerPg5}>
                <div>
                    <p className="title is-size-1-" style={styles.alignTextCenter}>Submit Avian Data</p>
                    <p className="title is-size-3" style={{ ...styles.alignTextCenter, ...styles.studyInfoTitle }}>Review Information</p>
                </div>
                <div style={styles.reviewInfoContainer}>
                    <div style={styles.reviewInfoTitleContainer}>
                        <p className="title is-size-3" style={{ ...styles.alignTextCenter, ...styles.studyInfoTitle }}>Study-Related Information</p>
                        <div onClick={() => movePgToPg('5', '1')}>
                            <button className="button edit-study-info-pg-5" style={styles.editButton}>Edit</button>
                        </div>
                    </div>
                    <div>
                        <p id="required" style={{ ...styles.questionTextSize }}>1. Do you have a study with <strong>quantitative</strong> data on avian diet? <span style={styles.green}>*</span></p>
                        <p>{doi === '' ? 'Title: ' + title + '; Journal: ' + journal + '; Year: ' + year + '; Last Name of First Author: ' + lastname_author : 'DOI: ' + doi}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>2. What bird species are you entering diet data for? <span style={styles.green}>*</span></p>
                        <p>{species === '' ? 'Species: ' + new_species + '; Taxonomy: ' + taxonomy : 'Species: ' + species + '; Subspecies: ' + subspecies}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>3. Was the data collected from within a single state, province, or country? <span style={styles.green}>*</span></p>
                        <p>{country === '' ? 'Region: ' + location_region + '; Other: ' + location_other : 'Country: ' + country + '; State/Province: ' + state_province}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>4. What was the specific location name? <span style={styles.green}>*</span></p>
                        <p>{'Location name: ' + location_specific}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>5. Are lat-long coordinates provided for the study location? <span style={styles.green}>*</span></p>
                        <p>{lat_long_yn === 'no' ? 'No lat-long coordinates provided' : 'Latitude: ' + latitude_dd + '; Longitude: ' + longitude_dd}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>6. Is elevational information provided for this study? <span style={styles.green}>*</span></p>
                        <p>{elevation_yn === 'no' ? 'No elevational information provided' : 'Minimum Elevation: ' + altitude_min_m + '; Maximum Elevation: ' + altitude_max_m + '; Mean Elevation: ' + altitude_mean_m}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>7. In what type of habitat was the study conducted? <span style={styles.green}>*</span></p>
                        <p>{'Habitat type: ' + habitat_type}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>8. When was the diet data for this species in this study collected? <span style={styles.green}>*</span></p>
                        <p>{'Month (Beginning of Study): ' + observation_month_begin + '; Year (Beginning of Study): ' + observation_year_begin + '; Month (End of Study): ' + observation_month_end + '; Year (End of Study): ' + observation_year_end}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>9. What time of year were data collected relative to the avian life cycle in that location? <span style={styles.green}>*</span></p>
                        <p>{'Time of Year: ' + observation_season}</p>
                    </div>
                </div>
                <hr style={styles.backgroundGreen} />
                <div style={styles.reviewInfoContainer}>
                    <div style={styles.reviewInfoTitleContainer}>
                        <p className="title is-size-3" style={{ ...styles.alignTextCenter, ...styles.studyInfoTitle }}>Analysis Information</p>
                        <div onClick={() => movePgToPg('5', '3')}>
                            <button className="button edit-analysis-info-pg-5" style={styles.editButton}>Edit</button>
                        </div>
                    </div>
                    <div>
                        <p id="required" style={{ ...styles.questionTextSize }}>1. How was the diet data quantified? <span style={styles.green}>*</span></p>
                        <p>{'Quantification: ' + analysis_number}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>2. How was the diet data collected? <span style={styles.green}>*</span></p>
                        <p>{'Method: ' + study_type}</p>
                        <p style={{ ...styles.questionTextSize }}>3. What is the total number of diet items this analysis is based on? Leave blank if unknown.</p>
                        <p>{'# diet items: ' + item_sample_size}</p>
                        <p style={{ ...styles.questionTextSize }}>4. How many individual birds is this analysis based on? Leave blank if unknown.</p>
                        <p>{'# birds: ' + bird_sample_size}</p>
                        <p style={{ ...styles.questionTextSize }}>5. How many distinct sites or localities are represented in this analysis? Leave blank if unknown.</p>
                        <p>{'# distinct sites/localities: ' + sites}</p>
                        <p style={{ ...styles.questionTextSize }}>6. Does this analysis refer to a particular sex?</p>
                        <p>{sex_yn === 'yes' ? 'Sex: ' + sex : 'Analysis does not refer to a particular sex'}</p>
                        <p style={{ ...styles.questionTextSize }}>7. Does this analysis refer to a particular age class?</p>
                        <p>{age_class_yn === 'yes' ? 'Age Class: ' + age_class : 'Analysis does not refer to a particular age class'}</p>
                        <p style={{ ...styles.questionTextSize }}>8. Please describe where in the published study you obtained the information for this diet analysis.</p>
                        <p>{'Location: ' + study_location + '; Table/Figure Number: ' + table_fig_number}</p>
                    </div>
                </div>
                <hr style={styles.backgroundGreen} />
                <div style={styles.reviewInfoContainer}>
                    <div style={styles.reviewInfoTitleContainer}>
                        <p className="title is-size-3" style={{ ...styles.alignTextCenter, ...styles.studyInfoTitle }}>Diet Information</p>
                        <div onClick={() => movePgToPg('5', '4')}>
                            <button className="button edit-diet-info-pg-5" style={styles.editButton}>Edit</button>
                        </div>
                    </div>
                    <div>
                        <p id="required" style={{ ...styles.questionTextSize }}>1. Prey Name and Taxonomic Level <span style={styles.green}>*</span></p>
                        <p>{'Prey Name: ' + prey_common_name + '; Taxonomic Level: ' + inclusive_prey_taxon}</p>
                        <p style={{ ...styles.questionTextSize }}>2. Percent of the diet?</p>
                        <p>{'% diet: ' + fraction_diet}</p>
                        <p style={{ ...styles.questionTextSize }}>3. Does the value entered above reflect the % of the diet for all members of this prey name (inclusive), or only those members of the prey name that weren’t identified more finely (not inclusive)?</p>
                        <p>{all_prey_diet_yn}</p>
                        <p style={{ ...styles.questionTextSize }}>4. Does this prey entry refer to a particular life stage?</p>
                        <p>{'Life Stage(s): ' + prey_stage}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>5. Does this prey entry refer to a particular prey part?<span style={styles.green}>*</span></p>
                        <p>{'Prey Part(s): ' + prey_part}</p>
                        <p style={{ ...styles.questionTextSize }}>6. If you have any miscellaneous notes about this prey item you may describe them here.</p>
                        <p>{notes}</p>
                    </div>
                </div>
                <hr style={styles.backgroundGreen} />
                <div style={styles.doubleButton}>
                    <div onClick={() => movePgToPg('5', '4')}>
                        <DesignGreenButton
                            buttonText={'Back'}
                            className={'back-pg-5'}
                        />
                    </div>
                    <div>
                        <DesignDots
                            page='5'
                        />
                    </div>
                    <div onClick={() => submitForm('6')}>
                        <DesignGreenButton
                            buttonText={'Submit'}
                            className={'submit-pg-5'}
                        />
                    </div>

                </div>
            </div>
            <div id="page6" style={styles.formContainerPg6}>
                <div style={styles.checkmark}>[put checkmark here]</div>
                <p style={styles.formSuccessTitle}>Form Successfully Submitted!</p>
                <div style={styles.popupButton} onClick={() => movePgToPg('6', '1', 'sameAnalysis')}>
                    <DesignGreenButton
                        buttonText={'Add another analysis'}
                        className={'add-analysis-pg-6'}
                    />
                </div>
                <div style={styles.popupButton} onClick={() => movePgToPg('6', '1', 'reset')}>
                    <DesignGreenButton
                        buttonText={'Done'}
                        className={'done-pg-6'}
                    />
                </div>
            </div>
        </div>
    )
}
