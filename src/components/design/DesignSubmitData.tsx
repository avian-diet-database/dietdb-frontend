import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import React, { ReactChild, ReactElement, useState } from "react";
import { DesignGreenButton } from "../design/DesignGreenButton";
import { DesignDots } from "../design/DesignDots";
import { DesignErrorPage } from "./DesignErrorPage";
import { formInputData } from "../data/formInputData";
import { truncate } from "fs";

interface DesignSubmitDataProps {
    addData: (options?: MutationFunctionOptions<any, Record<string, any>>) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
}

// removes specified HTMLElement
export function remove(id: string) {
    document.getElementById(id).style.display = 'none';
}

export const DesignSubmitData = (props: DesignSubmitDataProps) => {
    const studyInfoInitialState = {
        doi: '',
        title: '',
        journal: '',
        year: undefined as number,
        lastname_author: '',
        scientific_name: '',
        subspecies: '',
        new_species_yn: false,
        common_name: '',
        family: '',
        taxonomy: '',
        location_region: '',
        location_specific: '',
        lat_long_yn: '',
        latitude_dd: '',
        longitude_dd: '',
        elevation_yn: '',
        altitude_min_m: '',
        altitude_max_m: '',
        altitude_mean_m: '',
        observation_month_begin: undefined as number,
        observation_month_end: undefined as number,
        observation_year_begin: undefined as number,
        observation_year_end: undefined as number,
        observation_season: '',
        entered_by: ''


    }

    const analysisInfoInitialState = {
        analysis_number: '',
        diet_type: '',
        study_type: '',
        item_sample_size: undefined as number,
        bird_sample_size: undefined as number,
        sites: '',
        sex_yn: '',
        sex: '',
        age_class_yn: '',
        age_class: '',
        within_study_data_source: '',
        table_fig_number: '',

    }

    const dietInfoInitialState = {
        inclusive_prey_taxon: '',
        fraction_diet: '',
        all_prey_diet_yn: '',
        notes: '',
        prey_name_ITIS_ID: '',
        prey_name_status: '',
        total_percent_diet: undefined as number,
    }

    // const prey_name_arr: string[] = [];
    // const prey_diet_arr: string[] = [];
    // const prey_stage_arr: string[] = [];
    // // const prey_part_arr: string[] = [];

    // const [prey_name_arr, setPreyNameArr] = useState([]);
    // const [prey_diet_arr, setPreyDietArr] = useState([]);
    // const [prey_stage_arr, setPreyStageArr] = useState([]);
    // const [prey_part_arr, setPreyPartArr] = useState([]);

    // const preySubmissionsstudyInfoInitialState = {
    //     submissions: {

    //     }

    // }

    const [preySubmissions, setPreySubmissions] = useState([]);
    const [total_percent_diet, setTotalPercentDiet] = useState(0);
    const [habitat_type, setHabitatType] = useState([]);
    const [prey_part, setPreyPart] = useState([]);
    const [prey_stage, setPreyStage] = useState([]);
    const [observation_season, setObservationSeason] = useState([]);

    const taxonstudyInfoInitialState = {
        prey_common_name: '',
        prey_kingdom: '',
        prey_phylum: '',
        prey_class: '',
        prey_order: '',
        prey_suborder: '',
        prey_family: '',
        prey_genus: '',
        prey_scientific_name: '',
    }

    const [{ prey_common_name, prey_kingdom, prey_phylum, prey_class, prey_order, prey_suborder, prey_family, prey_genus, prey_scientific_name }, setTaxon] = useState(taxonstudyInfoInitialState)

    const setTaxonState = (e: any) => {
        const { name, value } = e.target;
        setTaxon(prevState => ({ ...prevState, [name]: value }));
    }
    // const [prey_common_name, setPreyCommonName] = useState([]);
    // const [prey_kingdom, setPreyKingdom] = useState('');
    // const [prey_phylum, setPreyPhylum] = useState('');
    // const [prey_class, setPreyClass] = useState('');
    // const [prey_order, setPreyOrder] = useState('');
    // const [prey_suborder, setPreySuborder] = useState('');
    // const [prey_family, setPreyFamily] = useState('');
    // const [prey_genus, setPreyGenus] = useState('');


    const [{ doi, title, journal, year, lastname_author, taxonomy,
        location_region, subspecies, location_specific, lat_long_yn,
        latitude_dd, longitude_dd, elevation_yn, altitude_min_m, altitude_max_m, altitude_mean_m, new_species_yn,
        observation_month_begin, observation_month_end, observation_year_begin, observation_year_end,
        scientific_name, common_name, entered_by,
        family },
        setStudyInfoState] = useState(studyInfoInitialState);

    const [{ analysis_number, study_type, item_sample_size, bird_sample_size, sites, sex_yn, sex, age_class_yn,
        age_class, within_study_data_source, table_fig_number, diet_type }, setAnalysisInfoState] = useState(analysisInfoInitialState)

    const [{ inclusive_prey_taxon, fraction_diet,
        all_prey_diet_yn, notes,
        prey_name_ITIS_ID,
        prey_name_status }, setDietInfoState] = useState(dietInfoInitialState);

    
        const setAnalysisInfoInputState = (e: any) => {
            const { name, value } = e.target;
            setAnalysisInfoState(prevState => ({ ...prevState, [name]: value }));
        }

        const setDietInfoInputState = (e: any) => {
            const { name, value } = e.target;
            setDietInfoState(prevState => ({ ...prevState, [name]: value }));
        }

    const setStudyInfoInputState = (e: any) => {
        const { name, value } = e.target;

        // change values to int, retrieved as string from form
        if (name === ("observation_month_begin" || "observation_month_end" || "observation_year_begin" || "observation_year_end" || "item_sample_size" || "bird_sample_size" || "year")) {
            // let val = Number(value)
            setStudyInfoState(prevState => ({ ...prevState, [name]: parseInt(value) }));
        } else {
            setStudyInfoState(prevState => ({ ...prevState, [name]: value }));
        }

        if (name === "new_species_yn" ) {
            if (value === "yes") {
                setStudyInfoState(prevState => ({ ...prevState, [name]: true }));
            } else {
                setStudyInfoState(prevState => ({ ...prevState, [name]: false }));
            }
        }
        // if (name === "inclusive_prey_taxon") {
        //     // if (value !== ("Kingdom" || "Phylum" || "Class")) {
        //     //     generateTextTaxonomyOptions(value);
        //     // }
        //     // } else if (value === "Kingdom") {
        //     //     generateKingdomOptions();
        //     // }
        // }

        // if (name === "prey_kingdom") {
        //     generatePhylumOptions();
        // }
        // if (name === "inclusive_prey_taxon") {
        //     switch (inclusive_prey_taxon) {
        //         case "Kingdom":
        //             document.getElementById("taxon-fields").innerHTML = "";
        //             generateKingdomOptions();
        //             break;
        //         case "Phylum":
        //             document.getElementById("taxon-fields").innerHTML = "";
        //             generateKingdomOptions();
        //             generatePhylumOptions(formInputData.animalia_phylums);
        //             break;
        //         case "Class":
        //             document.getElementById("taxon-fields").innerHTML = "";
        //             break;
        //         case "Order":
        //             document.getElementById("taxon-fields").innerHTML = "";
        //             generateOrderOptions();
        //             break;
        //         case "Suborder":
        //             document.getElementById("taxon-fields").innerHTML = "";
        //             break;
        //         case "Family":
        //             document.getElementById("taxon-fields").innerHTML = "";
        //             break;
        //         case "Genus":
        //             document.getElementById("taxon-fields").innerHTML = "";
        //             break;

        //     }
        // }

        // if (name === "prey_kingdom" && inclusive_prey_taxon != "Kingdom") {
        //     // prey_kingdom === "Animalia" ? generatePhylumOptions(formInputData.animalia_phylums) :
        //     //                     prey_kingdom === "Bacteria" ? generatePhylumOptions(formInputData.bacteria_phylums) :
        //     //                         prey_kingdom === "Chromista" ? generatePhylumOptions(formInputData.chromista_phylums) :
        //     //                             prey_kingdom === "Fungi" ? generatePhylumOptions(formInputData.fungi_phylums) :
        //     //                                 prey_kingdom === "Plantae" ? generatePhylumOptions(formInputData.plantae_phylums) :
        //     //                                     prey_kingdom === "Protozoa" ? generatePhylumOptions(formInputData.protozoa_phylums) : null}
        //     if (value === "Animalia") {
        //         document.getElementById("phylum-inputs").replaceWith(generatePhylumOptions(formInputData.animalia_phylums).toString());

        //     }
        // }
    }

    let formData = {
        studyInfo: {
            doi: doi,
            title: title,
            journal: journal,
            year: year,
            lastname_author: lastname_author,
            scientific_name: scientific_name,
            new_species_yn: new_species_yn,
            subspecies: subspecies,
            common_name: common_name,
            family: family,
            taxonomy: taxonomy,
            location_region: location_region,
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
            observation_season: observation_season,
            entered_by: entered_by,
        },
        analysisInfo: {
            analysis_number: analysis_number,
            diet_type: diet_type,
            study_type: study_type,
            item_sample_size: item_sample_size,
            bird_sample_size: bird_sample_size,
            sites: sites,
            sex_yn: sex_yn,
            sex: sex,
            age_class_yn: age_class_yn,
            age_class: age_class,
            within_study_data_source: within_study_data_source,
            table_fig_number: table_fig_number,
        },
        dietInfo: {
            prey_common_name: prey_common_name,
            inclusive_prey_taxon: inclusive_prey_taxon,
            fraction_diet: fraction_diet,
            all_prey_diet_yn: all_prey_diet_yn,
            notes: notes,
            prey_stage: prey_stage,
            prey_part: prey_part,
            prey_kingdom: prey_kingdom,
            prey_phylum: prey_phylum,
            prey_class: prey_class,
            prey_order: prey_order,
            prey_suborder: prey_suborder,
            prey_family: prey_family,
            prey_genus: prey_genus,
            prey_scientific_name: prey_scientific_name, 
            prey_name_ITIS_ID: prey_name_ITIS_ID,
            prey_name_status: prey_name_status,
            prey_submissions: preySubmissions,
            total_percent_diet: total_percent_diet,
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
            width: '300px'
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
        },
        tableTitles: {
            display: 'flex',
        },
        preyTableTitle: {
            fontWeight: 700,
            fontSize: '18px',
            color: '#363636',
            width: '130px',
        },
        dietTableTitle: {
            fontWeight: 700,
            fontSize: '18px',
            color: '#363636',
            width: '100px',
        },
        lifeStageTableTitle: {
            fontWeight: 700,
            fontSize: '18px',
            color: '#363636',
            width: '275px',
        },
        preyPartTableTitle: {
            fontWeight: 700,
            fontSize: '18px',
            color: '#363636',
            width: '320px',
        },
        taxonomicSpacing: {
            marginTop: '0',
            marginBottom: '0.5rem',
        }

    };



    function movePgToPg(currentPage: string, targetPage: string, command?: string) {
        if (currentPage == '6') {
            document.getElementById('page5').style.display = 'none';
        }

        switch (command) {
            case 'reset':
                setStudyInfoState({ ...studyInfoInitialState });
                break;
            case 'sameAnalysis':
            // use setState to revert other sections of form back to initial state
        }

        document.getElementById('page' + currentPage).style.display = 'none';
        document.getElementById('page' + targetPage).style.display = 'block';
    }

    // get checked values and set them
    function getCheckedBoxes(id: string, setVarState: any) {
        let checkboxes = document.getElementsByName(id)
        let checkboxesChecked = [];
        // loop over them all
        for (let i = 0; i < checkboxes.length; i++) {
            // And stick the checked ones onto an array...
            let box = checkboxes[i] as HTMLInputElement;
            if (box.checked) {
                checkboxesChecked.push(box.value);
            }
        }

        // set values
        setVarState(checkboxesChecked);
    }

    // function setHabitatStates(length: number) {
    //     let i;
    //     let habitats;
    //     for (i = 1; i <= length; i++) {
    //         let element = document.getElementById('habitat' + i) as HTMLInputElement;
    //         console.log(element)
    //         if (element.checked === true) {
    //             habitats = habitats + ' ' + document.getElementById('habitat' + i).nodeValue
    //         }
    //         //document.getElementById('habitat' + i).ariaChecked === 'true' ? habitats = habitats + ' ' + document.getElementById('habitat' + i).nodeValue : null
    //     }

    //     setHabitatType(habitats)
    //     console.log(habitats)
    //     console.log(habitat_type)
    // }

    function removeInnerHTML(id: string) {
        document.getElementById(id).innerHTML = "";
    }

    function addPreyEntry() {
        //add validation part here
        // if(prey_common_name === "" || prey_part === "") { -> add this part when setstate for preypart is implemented
        if (prey_common_name === "") {
            //return error here 
        } else {
            let total = total_percent_diet + parseFloat(fraction_diet);

            setTotalPercentDiet(total);

            const submission = {
                prey_common_name: prey_common_name,
                inclusive_prey_taxon: inclusive_prey_taxon,
                prey_kingdom: prey_kingdom,
                prey_phylum: prey_phylum,
                prey_class: prey_class,
                prey_order: prey_order,
                prey_suborder: prey_suborder,
                prey_family: prey_family,
                prey_genus: prey_genus,
                prey_scientific_name: prey_scientific_name,
                fraction_diet: fraction_diet,
                prey_stage: prey_stage,
                prey_part: prey_part,
                all_prey_diet_yn: all_prey_diet_yn,
                notes: notes,
            }

            preySubmissions.push(submission)
            setPreySubmissions(preySubmissions);

            console.log(preySubmissions)
            // console.log(preySubmissions[0].submission.prey_kingdom)
            const table = document.getElementById('prey-table');
            let diet_submission =
                `<div style='display: flex; padding: .75rem 0'>
                <p style='width: 130px; overflow-wrap: break-word'>${prey_common_name}</p>
                <p style='width: 100px; overflow-wrap: break-word'>${fraction_diet}</p>
                <p style='width: 275px; overflow-wrap: break-word'>${prey_stage}</p>
                <p style='width: 320px; overflow-wrap: break-word'>${prey_part}</p>
             </div>
             <hr style="background-color: #01B684; margin: 0" />`
            let diet_container = document.createElement('div');
            diet_container.innerHTML = diet_submission;

            table.append(diet_container);

            // reset taxons
            setTaxon({ ...taxonstudyInfoInitialState });


            // prey_name_arr[prey_name_arr.length] = prey_common_name;
            // prey_diet_arr.push(fraction_diet);
            // prey_stage_arr.push(prey_stage);
            // prey_part_arr.push(prey_part);

            // setPreySubmissions({ submissions: { name: prey_name_arr, diet: prey_diet_arr, stage: prey_stage_arr, part: prey_part_arr } });
            // console.log(formData.studyInfo.prey_submissions);
            //setStudyInfoState({prey_common_name: ''})
        }
    }

    // adding event listeners to select options to trigger new input boxes on change
    // const select = document.getElementById('inclusive-prey-taxon') as HTMLInputElement;
    // select.addEventListener('change', function(e) {
    //     select.value === "Order" ? console.log("i have been clicked") : "poo"
    // })

    function resetTaxons() {
        let taxons = document.getElementsByClassName('taxon') as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < taxons.length; i++) {
            taxons[i].style.display = "none";
        }
    }

    function generateKingdomOptions() {
        // document.getElementById('additional-taxon-fields').innerHTML = ''
        // let kingdom = document.getElementById('kingdom-inputs');
        // kingdom.style.display = 'block';

        if (document.getElementsByClassName('taxon').length > 1) {
            resetTaxons();
        }

        return <div id="kingdom-inputs" className="field taxon" style={styles.noMargin}>
            <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
                <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={prey_kingdom} name="prey_kingdom" onChange={setTaxonState}>
                    <option>Select a Kingdom</option>
                    {formInputData.kingdoms.map(kingdom => <option>{kingdom}</option>)}
                </select>
            </div>
        </div>
    }

    function generatePhylumOptions(phylum_data: string[], no_phylum?: boolean) {

        if (document.getElementsByClassName('taxon').length > 2) {
            resetTaxons();
        }

        if (no_phylum === true) {
            return <div id="kingdom-inputs" className="field taxon" style={{ ...styles.noMargin, ...styles.noMarginBottom }}>
                <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
                    <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={prey_kingdom} name="prey_kingdom" onChange={setTaxonState}>
                        <option>Select a Kingdom</option>
                        {formInputData.kingdoms.map(kingdom => <option>{kingdom}</option>)}
                    </select>
                </div>
            </div>
        } else {
            return <div><div id="kingdom-inputs" className="field taxon" style={{ ...styles.noMargin, ...styles.noMarginBottom }}>
                <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
                    <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={prey_kingdom} name="prey_kingdom" onChange={setTaxonState}>
                        <option>Select a Kingdom</option>
                        {formInputData.kingdoms.map(kingdom => <option>{kingdom}</option>)}
                    </select>
                </div>
            </div><div id="phylum-inputs" className="field taxon" style={styles.noMargin}>
                    <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                        <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={prey_phylum} name="prey_phylum" onChange={setTaxonState}>
                            <option>Select a Phylum</option>
                            {phylum_data.map(phylum => <option>{phylum}</option>)}
                        </select>
                    </div>
                </div></div>
        }
    }

    function generateClassOptions(class_data: string[]) {
        return <div id="phylum-inputs" className="field" style={styles.noMargin}>
            <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.taxonomicSpacing }}>
                <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={prey_class} name="prey_class" onChange={setTaxonState}>
                    <option>Select a Class</option>
                    {class_data.map(class_ => <option>{class_}</option>)}
                </select>
            </div>
        </div>
        //     return <div><div id="kingdom-inputs" className="field taxon" style={styles.noMargin}>
        //     <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
        //         <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={prey_kingdom} name="prey_kingdom" onChange={setStudyInfoInputState}>
        //             <option>Select a Kingdom</option>
        //             {formInputData.kingdoms.map(kingdom => <option>{kingdom}</option>)}
        //         </select>
        //     </div>
        // </div><div id="phylum-inputs" className="field taxon" style={styles.noMargin}>
        //         <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
        //             <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={prey_phylum} name="prey_phylum" onChange={setStudyInfoInputState}>
        //                 <option>Select a Phylum</option>
        //                 {phylum_data.map(phylum => <option>{phylum}</option>)}
        //             </select>
        //         </div>
        // </div><div id="phylum-inputs" className="field" style={styles.noMargin}>
        //     <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.taxonomicSpacing }}>
        //         <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={prey_class} name="prey_class" onChange={setStudyInfoInputState}>
        //             <option>Select a Class</option>
        //             {class_data.map(class_ => <option>{class_}</option>)}
        //         </select>
        //     </div>
        // </div></div>
    }

    function generateOrderOptions() {
        return <div className="control" style={{ ...styles.inputBoxSpacing, ...styles.taxonomicSpacing }}>
            <input className="input" style={styles.inputBox} type="text" placeholder="Enter Order" value={prey_order} name="prey_order" onChange={setTaxonState} />
        </div>
    }

    function generateSuborderOptions() {
        return <div className="control" style={{ ...styles.inputBoxSpacing, ...styles.taxonomicSpacing }}>
            <input className="input" style={styles.inputBox} type="text" placeholder="Enter Suborder" value={prey_suborder} name="prey_suborder" onChange={setTaxonState} />
        </div>
    }

    function generateFamilyOptions() {
        return <div className="control" style={{ ...styles.inputBoxSpacing, ...styles.taxonomicSpacing }}>
            <input className="input" style={styles.inputBox} type="text" placeholder="Enter Family" value={prey_family} name="prey_family" onChange={setTaxonState} />
        </div>
    }

    function generateGenusOptions() {
        return <div className="control" style={{ ...styles.inputBoxSpacing, ...styles.taxonomicSpacing }}>
            <input className="input" style={styles.inputBox} type="text" placeholder="Enter Genus" value={prey_genus} name="prey_genus" onChange={setTaxonState} />
        </div>
    }

    function generateSpeciesOptions() {
        return <div className="control" style={{ ...styles.inputBoxSpacing, ...styles.taxonomicSpacing }}>
            <input className="input" style={styles.inputBox} type="text" placeholder="Enter Scientific Name" value={prey_scientific_name} name="prey_scientific_name" onChange={setTaxonState} />
        </div>
    }

    function generateCanadaOptions() {
        return <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
        <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={location_region} name="location_region" onChange={setStudyInfoInputState}>
            <option>Select State/Province</option>
            {formInputData.state_province_canada.map(canada => <option>{canada}</option>)}
        </select>
    </div>
    }

    function generateAustraliaOptions() {
        return <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
        <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={location_region} name="location_region" onChange={setStudyInfoInputState}>
            <option>Select State/Province</option>
            {formInputData.state_province_australia.map(australia => <option>{australia}</option>)}
        </select>
    </div>
    }

    function generateMexicoOptions() {
        return <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
        <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={location_region} name="location_region" onChange={setStudyInfoInputState}>
            <option>Select State/Province</option>
            {formInputData.state_province_mexico.map(mexico => <option>{mexico}</option>)}
        </select>
    </div>
    }

    function generateUSOptions() {
        return <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
        <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={location_region} name="location_region" onChange={setStudyInfoInputState}>
            <option>Select State/Province</option>
            {formInputData.state_province_us.map(us => <option>{us}</option>)}
        </select>
    </div>
    }
    // function generateTextTaxonomyOptions(taxonomy: string) {

    //     const containerStyle = 'margin-top: .5rem; margin-bottom: .5rem;';
    //     const inputTextBoxStyle = 'background-color: white; width: 100%;';
    //     const inputSelectStyle = 'width: 100vw; background-color: white; border-color: #dbdbdb;';
    //     // const kingdom_phylum_class = document.getElementById('kingdom-phylum-class-inputs');

    //     const mainDiv = document.getElementById('additional-taxon-fields');

    //     let orderInput =
    //         `<div class="control" style="${containerStyle}">
    //             <input id="prey_order" class="input" style="${inputTextBoxStyle}" type="text" placeholder="Enter Order" value="${prey_order}" name="prey_order" />
    //         </div>`

    //     let orderDiv = document.createElement('div');
    //     orderDiv.innerHTML = orderInput;

    //     let suborderInput =
    //         `<div class="control" style="${containerStyle}">
    //             <input class="input" style="${inputTextBoxStyle}" type="text" placeholder="Enter Suborder" value="${prey_suborder}" name="prey_suborder" />
    //         </div>`

    //     let suborderDiv = document.createElement('div');
    //     suborderDiv.innerHTML = suborderInput;

    //     let familyInput =
    //         `<div class="control" style="${containerStyle}">
    //             <input class="input" style="${inputTextBoxStyle}" type="text" placeholder="Enter Family" value="${prey_family}" name="prey_family" />
    //         </div>`

    //     let familyDiv = document.createElement('div');
    //     familyDiv.innerHTML = familyInput;

    //     let genusInput =
    //         `<div class="control" style="${containerStyle}">
    //             <input class="input" style="${inputTextBoxStyle}" type="text" placeholder="Enter Genus" value="${prey_genus}" name="prey_genus" />
    //         </div>`

    //     let genusDiv = document.createElement('div');
    //     genusDiv.innerHTML = genusInput;

    //     let speciesInput =
    //         `<div class="control" style="${containerStyle}">
    //             <input class="input" style="${inputTextBoxStyle}" type="text" placeholder="Enter Scientific Name" value="${prey_scientific_name}" name="prey_scientific_name" />
    //         </div>`

    //     let speciesDiv = document.createElement('div');
    //     speciesDiv.innerHTML = speciesInput;

    //     switch (taxonomy) {
    //         case 'Order':
    //             mainDiv.innerHTML = '';
    //             mainDiv.append(orderDiv)
    //             mainDiv.append(suborderDiv);
    //             mainDiv.append(familyDiv);
    //             mainDiv.append(genusDiv);
    //             mainDiv.append(speciesDiv);
    //             break;
    //         case 'Suborder':
    //             mainDiv.innerHTML = '';
    //             mainDiv.append(suborderDiv);
    //             mainDiv.append(familyDiv);
    //             mainDiv.append(genusDiv);
    //             mainDiv.append(speciesDiv);
    //             break;
    //         case 'Family':
    //             mainDiv.innerHTML = '';
    //             mainDiv.append(familyDiv);
    //             mainDiv.append(genusDiv);
    //             mainDiv.append(speciesDiv);
    //             break;
    //         case 'Genus':
    //             mainDiv.innerHTML = '';
    //             mainDiv.append(genusDiv);
    //             mainDiv.append(speciesDiv);
    //             break;
    //         case 'Species':
    //             mainDiv.innerHTML = '';
    //             mainDiv.append(speciesDiv);
    //             break;

    //     }
    // }

    // function setDietInfo() {
    //     let order = document.getElementById('prey_order') as HTMLInputElement;
    //     let suborder = document.getElementById('prey_suborder') as HTMLInputElement;
    //     let family = document.getElementById('prey_family') as HTMLInputElement;
    //     let genus = document.getElementById('prey_genus') as HTMLInputElement;
    //     let scientific_name = document.getElementById('prey_scientific_name') as HTMLInputElement;
    //     setPreyOrder(order.value);
    //     // set(suborder.value);
    //     // setPreyOrder(family.value);
    //     // setPreyOrder(genus.value);
    //     // setPreyOrder(scientific_name.value);
    // }

    function phylum(taxon: string) {
        return (inclusive_prey_taxon === taxon && (prey_kingdom === "" || prey_kingdom === "Unknown" || prey_kingdom === "Non-biological" || prey_kingdom === "Select a Kingdom") ? generatePhylumOptions(formInputData.phylums, true) :
            inclusive_prey_taxon === taxon && prey_kingdom === "Animalia" ? generatePhylumOptions(formInputData.animalia_phylums) :
                inclusive_prey_taxon === taxon && prey_kingdom === "Bacteria" ? generatePhylumOptions(formInputData.bacteria_phylums) :
                    inclusive_prey_taxon === taxon && prey_kingdom === "Chromista" ? generatePhylumOptions(formInputData.chromista_phylums) :
                        inclusive_prey_taxon === taxon && prey_kingdom === "Fungi" ? generatePhylumOptions(formInputData.fungi_phylums) :
                            inclusive_prey_taxon === taxon && prey_kingdom === "Plantae" ? generatePhylumOptions(formInputData.plantae_phylums) :
                                inclusive_prey_taxon === taxon && prey_kingdom === "Protozoa" ? generatePhylumOptions(formInputData.protozoa_phylums) : null)
    }

    function classes(taxon: string) {
        return (inclusive_prey_taxon === taxon && prey_phylum === "Annelida" ? generateClassOptions(formInputData.annelida_classes) :
            inclusive_prey_taxon === taxon && prey_phylum === "Arthropoda" ? generateClassOptions(formInputData.arthropoda_classes) :
                inclusive_prey_taxon === taxon && prey_phylum === "Bryozoa" ? generateClassOptions(formInputData.bryozoa_classes) :
                    inclusive_prey_taxon === taxon && prey_phylum === "Chordata" ? generateClassOptions(formInputData.chordata_classes) :
                        inclusive_prey_taxon === taxon && prey_phylum === "Cnidaria" ? generateClassOptions(formInputData.cnidaria_classes) :
                            inclusive_prey_taxon === taxon && prey_phylum === "Echinodermata" ? generateClassOptions(formInputData.echinodermata_classes) :
                                inclusive_prey_taxon === taxon && prey_phylum === "Mollusca" ? generateClassOptions(formInputData.mollusca_classes) :
                                    inclusive_prey_taxon === taxon && prey_phylum === "Nematoda" ? generateClassOptions(formInputData.nematoda_classes) :
                                        inclusive_prey_taxon === taxon && prey_phylum === "Nemertea" ? generateClassOptions(formInputData.nemertea_classes) :
                                            inclusive_prey_taxon === taxon && prey_phylum === "Platyhelminthes" ? generateClassOptions(formInputData.platyhelminthes_classes) :
                                                inclusive_prey_taxon === taxon && prey_phylum === "Porifera" ? generateClassOptions(formInputData.porifera_classes) :
                                                    inclusive_prey_taxon === taxon && prey_phylum === "Cyanobacteria" ? generateClassOptions(formInputData.cyanobacteria_classes) :
                                                        inclusive_prey_taxon === taxon && prey_phylum === "Heterokontophyta" ? generateClassOptions(formInputData.heterokontophyta_classes) :
                                                            inclusive_prey_taxon === taxon && prey_phylum === "Ochrophyta" ? generateClassOptions(formInputData.ochrophyta_classes) :
                                                                inclusive_prey_taxon === taxon && prey_phylum === "Phaeophyta" ? generateClassOptions(formInputData.phaeophyta_classes) :
                                                                    inclusive_prey_taxon === taxon && prey_phylum === "Xanthophyta" ? generateClassOptions(formInputData.xanthophyta_classes) :
                                                                        inclusive_prey_taxon === taxon && prey_phylum === "Ascomycota" ? generateClassOptions(formInputData.ascomycota_classes) :
                                                                            inclusive_prey_taxon === taxon && prey_phylum === "Basidiomycota" ? generateClassOptions(formInputData.basidiomycota_classes) :
                                                                                inclusive_prey_taxon === taxon && prey_phylum === "Bryophyta" ? generateClassOptions(formInputData.bryophyta_classes) :
                                                                                    inclusive_prey_taxon === taxon && prey_phylum === "Charophyta" ? generateClassOptions(formInputData.charophyta_classes) :
                                                                                        inclusive_prey_taxon === taxon && prey_phylum === "Chlorophyta" ? generateClassOptions(formInputData.chlorophyta_classes) :
                                                                                            inclusive_prey_taxon === taxon && prey_phylum === "Rhodophyta" ? generateClassOptions(formInputData.rhodophyta_classes) :
                                                                                                inclusive_prey_taxon === taxon && prey_phylum === "Phaeophyta" ? generateClassOptions(formInputData.phaeophyta_classes) :
                                                                                                    inclusive_prey_taxon === taxon && prey_phylum === "Tracheophyta" ? generateClassOptions(formInputData.tracheophyta_classes) :
                                                                                                        inclusive_prey_taxon === taxon && prey_phylum === "Ciliophora" ? generateClassOptions(formInputData.ciliophora_classes) :
                                                                                                            inclusive_prey_taxon === taxon && prey_phylum === "Protozoa" ? generateClassOptions(formInputData.protozoa_classes) :
                                                                                                                inclusive_prey_taxon === taxon && prey_phylum === "Cyanobacteria" ? generateClassOptions(formInputData.cyanobacteria_classes) : null)
    }

    // displays specified HTMLElement
    function display(id: string, displayType?: string) {
        displayType !== undefined ?
            document.getElementById(id).style.display = displayType :
            document.getElementById(id).style.display = 'block';
    }

    // submits form
    function submitForm(targetPage: string) {
        document.getElementById('page' + targetPage).style.display = 'block';

        if (preySubmissions.length > 0) {
            for (let i = 0; i < preySubmissions.length; i++) {
                props.addData({
                    variables: {
                        common_name: formData.studyInfo.common_name, new_species: formData.studyInfo.new_species_yn, scientific_name: formData.studyInfo.scientific_name, subspecies: formData.studyInfo.subspecies, family: formData.studyInfo.family, source: formData.studyInfo.title + ", " + formData.studyInfo.journal + ", " + formData.studyInfo.year + ", " + formData.studyInfo.lastname_author,
                        taxonomy: formData.studyInfo.taxonomy, longitude_dd: formData.studyInfo.longitude_dd, latitude_dd: formData.studyInfo.latitude_dd, altitude_max_m: formData.studyInfo.altitude_max_m, altitude_mean_m: formData.studyInfo.altitude_mean_m, altitude_min_m: formData.studyInfo.altitude_min_m,
                        location_region: formData.studyInfo.location_region, location_specific: formData.studyInfo.location_specific, habitat_type: formData.studyInfo.habitat_type.toString(), observation_month_begin: Number(formData.studyInfo.observation_month_begin), observation_month_end: Number(formData.studyInfo.observation_month_begin),
                        observation_year_begin: Number(formData.studyInfo.observation_year_begin), observation_year_end: Number(formData.studyInfo.observation_year_end), observation_season: formData.studyInfo.observation_season.toString(), analysis_number: formData.analysisInfo.analysis_number, prey_kingdom: preySubmissions[i].prey_kingdom, 
                        prey_phylum: preySubmissions[i].prey_phylum, prey_order: preySubmissions[i].prey_order, prey_suborder: preySubmissions[i].prey_suborder, prey_family: preySubmissions[i].prey_family, prey_genus: preySubmissions[i].prey_genus, 
                        prey_scientific_name: preySubmissions[i].prey_scientific_name, inclusive_prey_taxon: preySubmissions[i].inclusive_prey_taxon, prey_name_ITIS_ID: formData.dietInfo.prey_name_ITIS_ID, prey_name_status: formData.dietInfo.prey_name_status, 
                        prey_stage: preySubmissions[i].prey_stage.toString(), prey_part: preySubmissions[i].prey_part.toString(), prey_common_name: preySubmissions[i].prey_common_name, fraction_diet: preySubmissions[i].fraction_diet, diet_type: formData.analysisInfo.diet_type,
                        item_sample_size: formData.analysisInfo.item_sample_size, bird_sample_size: formData.analysisInfo.bird_sample_size, sites: formData.analysisInfo.sites, study_type: formData.analysisInfo.study_type, notes: formData.dietInfo.notes, 
                        entered_by: formData.studyInfo.entered_by, doi: formData.studyInfo.doi, sex: formData.analysisInfo.sex, age_class: formData.analysisInfo.age_class, within_study_data_source: formData.analysisInfo.within_study_data_source,
                        table_fig_number: formData.analysisInfo.table_fig_number, title: formData.studyInfo.title, lastname_author: formData.studyInfo.lastname_author, year: Number(formData.studyInfo.year), journal: formData.studyInfo.journal, total_percent_diet: formData.dietInfo.total_percent_diet
                    }
                });
            }
        } else {
            props.addData({
                variables: {
                    common_name: formData.studyInfo.common_name, new_species: formData.studyInfo.new_species_yn, scientific_name: formData.studyInfo.scientific_name, subspecies: formData.studyInfo.subspecies, family: formData.studyInfo.family, source: formData.studyInfo.title + ", " + formData.studyInfo.journal + ", " + formData.studyInfo.year + ", " + formData.studyInfo.lastname_author,
                    taxonomy: formData.studyInfo.taxonomy, longitude_dd: formData.studyInfo.longitude_dd, latitude_dd: formData.studyInfo.latitude_dd, altitude_max_m: formData.studyInfo.altitude_max_m, altitude_mean_m: formData.studyInfo.altitude_mean_m, altitude_min_m: formData.studyInfo.altitude_min_m,
                    location_region: formData.studyInfo.location_region, location_specific: formData.studyInfo.location_specific, habitat_type: formData.studyInfo.habitat_type.toString(), observation_month_begin: Number(formData.studyInfo.observation_month_begin), observation_month_end: Number(formData.studyInfo.observation_month_begin),
                    observation_year_begin: Number(formData.studyInfo.observation_year_begin), observation_year_end: Number(formData.studyInfo.observation_year_end), observation_season: formData.studyInfo.observation_season.toString(), analysis_number: formData.analysisInfo.analysis_number, prey_kingdom: formData.dietInfo.prey_kingdom, 
                    prey_phylum: formData.dietInfo.prey_phylum, prey_order: formData.dietInfo.prey_order, prey_suborder: formData.dietInfo.prey_suborder, prey_family: formData.dietInfo.prey_family, prey_genus: formData.dietInfo.prey_genus, 
                    prey_scientific_name: formData.dietInfo.prey_scientific_name, inclusive_prey_taxon: formData.dietInfo.inclusive_prey_taxon, prey_name_ITIS_ID: formData.dietInfo.prey_name_ITIS_ID, prey_name_status: formData.dietInfo.prey_name_status, 
                    prey_stage: formData.dietInfo.prey_stage.toString(), prey_part: formData.dietInfo.prey_part.toString(), prey_common_name: formData.dietInfo.prey_common_name, fraction_diet: formData.dietInfo.fraction_diet, diet_type: formData.analysisInfo.diet_type,
                    item_sample_size: formData.analysisInfo.item_sample_size, bird_sample_size: formData.analysisInfo.bird_sample_size, sites: formData.analysisInfo.sites, study_type: formData.analysisInfo.study_type, notes: formData.dietInfo.notes, 
                    entered_by: formData.studyInfo.entered_by, doi: formData.studyInfo.doi, sex: formData.analysisInfo.sex, age_class: formData.analysisInfo.age_class, within_study_data_source: formData.analysisInfo.within_study_data_source,
                    table_fig_number: formData.analysisInfo.table_fig_number, title: formData.studyInfo.title, lastname_author: formData.studyInfo.lastname_author, year: Number(formData.studyInfo.year), journal: formData.studyInfo.journal, total_percent_diet: formData.dietInfo.total_percent_diet
                }
            });
        }
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
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Last Name" value={lastname_author} name="lastname_author" onChange={setStudyInfoInputState} />
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
                        <div style={{ ...styles.noMarginBottom }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Please enter the scientific name.</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox }} type="text" placeholder="Enter Scientific Name" value={scientific_name} name="scientific_name" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                        </div>
                        <span id="required" style={{ ...styles.questionTextSize }}>New species? Enter it in manually.</span>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="radio" style={styles.radioButtonSpacing}>
                                <input type="radio" value="yes" name="new_species_yn" onChange={setStudyInfoInputState} onClick={() => display('new-species-question', 'flex')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="new_species_yn" onChange={setStudyInfoInputState} onClick={() => remove('new-species-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No</span>
                            </label>
                        </div>
                        <div id="new-species-question" style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom, ...styles.displayNone }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Enter Scientific Name</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Scientific Name" value={scientific_name} name="scientific_name" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Enter Common Name</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Common Name" value={common_name} name="common_name" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Enter Family</label>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox4Sections }} type="text" placeholder="Enter Family" value={family} name="family" onChange={setStudyInfoInputState} />
                                </div>
                            </div>
                            <div className="field" style={{ ...styles.noMarginBottom }}>
                                <label className="label" style={styles.questionTextSize}>Taxonomy</label>
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
                                    <select style={{ ...styles.inputBox, ...styles.inputBox4Sections, ...styles.selectBox }} value={taxonomy} name="taxonomy" onChange={setStudyInfoInputState}>
                                        <option>Select Taxonomy</option>
                                        {formInputData.taxonomies.map(taxonomy => <option>{taxonomy}</option>)}
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
                                    <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={location_region} name="location_region" onChange={setStudyInfoInputState}>
                                        <option>Select Country</option>
                                        {formInputData.countries.map(country => <option>{country}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Specify State/Province</label>
                                {location_region === "Canada" ? generateCanadaOptions() : location_region === "Mexico" ? generateMexicoOptions() :
                                location_region === "Australia" ? generateAustraliaOptions() : location_region === "USA" ? generateUSOptions() : <div className="control" style={styles.inputBoxSpacing}>
                                <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Specify Area" value={location_region} name="location_region" onChange={setStudyInfoInputState} />
                            </div>}
                            </div>
                        </div>
                        <p style={styles.questionTextSize}>If <span style={styles.green}>no</span>, select a region.</p>
                        <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Region</label>
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing, ...styles.noMargin }}>
                                    <select style={{ ...styles.inputBox, ...styles.inputBox2Sections, ...styles.selectBox }} value={location_region} name="location_region" onChange={setStudyInfoInputState}>
                                        <option>Select Region</option>
                                        {formInputData.regions.map(region => <option>{region}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <label className="label" style={styles.questionTextSize}>Other (if other regions not applicable)</label>
                                {location_region === "" ? <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Specify Area" value={location_region} name="location_region" onChange={setStudyInfoInputState} />
                                </div> : <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Specify Area" name="location_region" />
                                </div>}
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
                            {formInputData.habitats.map((habitat, index) =>
                                <label className="checkbox" style={{ ...styles.checkboxSpacing }}>
                                    <input name="habitat" value={habitat} type="checkbox" />
                                    <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>{habitat}</span>
                                </label>
                            )}

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
                                <input id="observation-season" value="breeding-season" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Breeding Season</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input id="observation-season" value="non-breeding-season" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Non-Breeding Season</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input id="observation-season" value="pre-breeding-migration" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Pre-Breeding Migration</span>
                            </label>
                            <label className="checkbox" style={styles.checkboxSpacing}>
                                <input id="observation-season" value="post-breeding-migration" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Post-Breeding Migration</span>
                            </label>
                            <label className="checkbox">
                                <input id="observation-season" value="unspecified" type="checkbox" />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Unspecified</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div style={styles.doubleButton}>
                    <div onClick={() => {
                        movePgToPg('2', '1');
                        getCheckedBoxes('observation-season', setObservationSeason)
                    }}>
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
                    <div onClick={() => {
                        movePgToPg('2', '3');
                        getCheckedBoxes("habitat", setHabitatType);
                    }}>
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
                                <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={diet_type} name="diet_type" onChange={setAnalysisInfoInputState}>
                                    <option>Select Quantification</option>
                                    {formInputData.quantifications.map(quantification => <option>{quantification}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="analysis-question2">
                        <p id="required" style={{ ...styles.questionTextSize }}>2. How was the diet data collected? <span style={styles.green}>*</span></p>
                        <div className="field">
                            <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={study_type} name="study_type" onChange={setAnalysisInfoInputState}>
                                    <option>Select Method</option>
                                    {formInputData.methods.map(method => <option>{method}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                        <div id="analysis-question3">
                            <p style={{ ...styles.questionTextSize }}>3. What is the total number of diet items this analysis is based on? Leave blank if unknown.</p>
                            <div className="control" style={{ ...styles.inputBoxSpacing, ...styles.inputBoxSpacing }}>
                                <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Value" value={item_sample_size} name="item_sample_size" onChange={setAnalysisInfoInputState} />
                            </div>
                        </div>
                        <div id="analysis-question4">
                            <p style={{ ...styles.questionTextSize }}>4. How many individual birds is this analysis based on? Leave blank if unknown.</p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Value" value={bird_sample_size} name="bird_sample_size" onChange={setAnalysisInfoInputState} />
                            </div>
                        </div>
                    </div>
                    <div id="analysis-question5">
                        <p style={{ ...styles.questionTextSize }}>5. How many distinct sites or localities are represented in this analysis? Leave blank if unknown.</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={styles.inputBox} type="text" placeholder="Enter Value" value={sites} name="sites" onChange={setAnalysisInfoInputState} />
                        </div>
                    </div>
                    <div id="analysis-question6">
                        <p style={{ ...styles.questionTextSize }}>6. Does this analysis refer to a particular sex?</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="radio" style={styles.radioButtonSpacing}>
                                <input type="radio" value="yes" name="sex_yn" onChange={setAnalysisInfoInputState} onClick={() => display('sex-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="sex_yn" onChange={setAnalysisInfoInputState} onClick={() => remove('sex-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No</span>
                            </label>
                        </div>
                        <div id="sex-question" style={{ ...styles.noMarginBottom, ...styles.displayNone }}>
                            <div className="field">
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                    <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={sex} name="sex" onChange={setAnalysisInfoInputState}>
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
                                <input type="radio" value="yes" name="age_class_yn" onChange={setAnalysisInfoInputState} onClick={() => display('age-class-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="age_class_yn" onChange={setAnalysisInfoInputState} onClick={() => remove('age-class-question')} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No</span>
                            </label>
                        </div>
                        <div id="age-class-question" style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom, ...styles.displayNone }}>
                            <div className="field">
                                <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                    <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth }} value={age_class} name="age_class" onChange={setAnalysisInfoInputState}>
                                        <option>Select Age Class</option>
                                        {formInputData.age_classes.map(age_class => <option>{age_class}</option>)}
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
                                    <select style={{ ...styles.inputBox, ...styles.selectBox, ...styles.inputBox2Sections }} value={within_study_data_source
                                    } name="within_study_data_source
                    " onChange={setAnalysisInfoInputState}>
                                        <option>Select Location</option>
                                        {formInputData.published_locations.map(published_location => <option>{published_location}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="field" style={styles.noMarginBottom}>
                                <div className="control" style={styles.inputBoxSpacing}>
                                    <input className="input" style={{ ...styles.inputBox, ...styles.inputBox2Sections }} type="text" placeholder="Enter Table or Figure Number" value={table_fig_number} name="table_fig_number" onChange={setAnalysisInfoInputState} />
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
                            <input className="input" style={{ ...styles.inputBox }} type="text" placeholder="Prey Name" value={prey_common_name} name="prey_common_name" onChange={setTaxonState} />
                        </div>
                        <p style={styles.questionTextSize}>Please clarify the taxonomic classification of this name.</p>
                        <p style={styles.questionTextSize}>First, what is the taxonomic level of this name?</p>
                        <div className="field" style={styles.noMargin}>
                            <div className="select is-success" style={{ ...styles.inputBoxSpacing }}>
                                <select id="inclusive-prey-taxon" style={{ ...styles.inputBox, ...styles.selectBox, ...styles.fullWidth, ...styles.taxonomicSpacing }} value={inclusive_prey_taxon} name="inclusive_prey_taxon" onChange={setDietInfoInputState}>
                                    <option>Select Taxonomic Level</option>
                                    {formInputData.taxonomy_levels.map(taxonomy_level => <option>{taxonomy_level}</option>)}
                                </select>
                            </div>
                        </div>
                        <div id="taxon-fields">
                        </div>
                        {inclusive_prey_taxon === "Kingdom" ? generateKingdomOptions() : null}
                        {phylum("Phylum")}
                        {phylum("Class")}
                        {classes("Class")}
                        {inclusive_prey_taxon === "Order" ? phylum("Order") : null}
                        {inclusive_prey_taxon === "Order" ? classes("Order") : null}
                        {inclusive_prey_taxon === "Order" ? generateOrderOptions() : null}
                        {inclusive_prey_taxon === "Suborder" ? phylum("Suborder") : null}
                        {inclusive_prey_taxon === "Suborder" ? classes("Suborder") : null}
                        {inclusive_prey_taxon === "Suborder" ? generateOrderOptions() : null}
                        {inclusive_prey_taxon === "Suborder" ? generateSuborderOptions() : null}
                        {inclusive_prey_taxon === "Family" ? phylum("Family") : null}
                        {inclusive_prey_taxon === "Family" ? classes("Family") : null}
                        {inclusive_prey_taxon === "Family" ? generateOrderOptions() : null}
                        {inclusive_prey_taxon === "Family" ? generateSuborderOptions() : null}
                        {inclusive_prey_taxon === "Family" ? generateFamilyOptions() : null}
                        {inclusive_prey_taxon === "Genus" ? phylum("Genus") : null}
                        {inclusive_prey_taxon === "Genus" ? classes("Genus") : null}
                        {inclusive_prey_taxon === "Genus" ? generateOrderOptions() : null}
                        {inclusive_prey_taxon === "Genus" ? generateSuborderOptions() : null}
                        {inclusive_prey_taxon === "Genus" ? generateFamilyOptions() : null}
                        {inclusive_prey_taxon === "Genus" ? generateGenusOptions() : null}
                        {inclusive_prey_taxon === "Species" ? phylum("Species") : null}
                        {inclusive_prey_taxon === "Species" ? classes("Species") : null}
                        {inclusive_prey_taxon === "Species" ? generateOrderOptions() : null}
                        {inclusive_prey_taxon === "Species" ? generateSuborderOptions() : null}
                        {inclusive_prey_taxon === "Species" ? generateFamilyOptions() : null}
                        {inclusive_prey_taxon === "Species" ? generateGenusOptions() : null}
                        {inclusive_prey_taxon === "Species" ? generateSpeciesOptions() : null}

                        {/* {inclusive_prey_taxon === "Phylum" && (prey_kingdom === "" || prey_kingdom === "Unknown" || prey_kingdom === "Non-biological" || prey_kingdom === "Select a Kingdom") ? generatePhylumOptions(formInputData.phylums, true) :
                            inclusive_prey_taxon === "Phylum" && prey_kingdom === "Animalia" ? generatePhylumOptions(formInputData.animalia_phylums) :
                                inclusive_prey_taxon === "Phylum" && prey_kingdom === "Bacteria" ? generatePhylumOptions(formInputData.bacteria_phylums) :
                                    inclusive_prey_taxon === "Phylum" && prey_kingdom === "Chromista" ? generatePhylumOptions(formInputData.chromista_phylums) :
                                        inclusive_prey_taxon === "Phylum" && prey_kingdom === "Fungi" ? generatePhylumOptions(formInputData.fungi_phylums) :
                                            inclusive_prey_taxon === "Phylum" && prey_kingdom === "Plantae" ? generatePhylumOptions(formInputData.plantae_phylums) :
                                                inclusive_prey_taxon === "Phylum" && prey_kingdom === "Protozoa" ? generatePhylumOptions(formInputData.protozoa_phylums) : null} */}

                        {/* {inclusive_prey_taxon === "Class" && (prey_kingdom === "" || prey_kingdom === "Unknown" || prey_kingdom === "Non-biological" || prey_kingdom === "Select a Kingdom") ? generatePhylumOptions(formInputData.phylums, true) :
                            inclusive_prey_taxon === "Class" && prey_kingdom === "Animalia" ? generatePhylumOptions(formInputData.animalia_phylums) :
                                inclusive_prey_taxon === "Class" && prey_kingdom === "Bacteria" ? generatePhylumOptions(formInputData.bacteria_phylums) :
                                    inclusive_prey_taxon === "Class" && prey_kingdom === "Chromista" ? generatePhylumOptions(formInputData.chromista_phylums) :
                                        inclusive_prey_taxon === "Class" && prey_kingdom === "Fungi" ? generatePhylumOptions(formInputData.fungi_phylums) :
                                            inclusive_prey_taxon === "Class" && prey_kingdom === "Plantae" ? generatePhylumOptions(formInputData.plantae_phylums) :
                                                inclusive_prey_taxon === "Class" && prey_kingdom === "Protozoa" ? generatePhylumOptions(formInputData.protozoa_phylums) : null} */}
                        {/* {inclusive_prey_taxon === "Class" && prey_phylum === "Annelida" ? generateClassOptions(formInputData.annelida_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Arthropoda" ? generateClassOptions(formInputData.arthropoda_classes) :
                                inclusive_prey_taxon === "Class" && prey_phylum === "Bryozoa" ? generateClassOptions(formInputData.bryozoa_classes) : 
                                inclusive_prey_taxon === "Class" && prey_phylum === "Chordata" ? generateClassOptions(formInputData.chordata_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Cnidaria" ? generateClassOptions(formInputData.cnidaria_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Echinodermata" ? generateClassOptions(formInputData.echinodermata_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Mollusca" ? generateClassOptions(formInputData.mollusca_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Nematoda" ? generateClassOptions(formInputData.nematoda_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Nemertea" ? generateClassOptions(formInputData.nemertea_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Platyhelminthes" ? generateClassOptions(formInputData.platyhelminthes_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Porifera" ? generateClassOptions(formInputData.porifera_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Cyanobacteria" ? generateClassOptions(formInputData.cyanobacteria_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Heterokontophyta" ? generateClassOptions(formInputData.heterokontophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Ochrophyta" ? generateClassOptions(formInputData.ochrophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Phaeophyta" ? generateClassOptions(formInputData.phaeophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Xanthophyta" ? generateClassOptions(formInputData.xanthophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Ascomycota" ? generateClassOptions(formInputData.ascomycota_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Basidiomycota" ? generateClassOptions(formInputData.basidiomycota_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Bryophyta" ? generateClassOptions(formInputData.bryophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Charophyta" ? generateClassOptions(formInputData.charophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Chlorophyta" ? generateClassOptions(formInputData.chlorophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Rhodophyta" ? generateClassOptions(formInputData.rhodophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Phaeophyta" ? generateClassOptions(formInputData.phaeophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Tracheophyta" ? generateClassOptions(formInputData.tracheophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Ciliophora" ? generateClassOptions(formInputData.ciliophora_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Protozoa" ? generateClassOptions(formInputData.protozoa_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Cyanobacteria" ? generateClassOptions(formInputData.cyanobacteria_classes) : null} */}

                        {/* {inclusive_prey_taxon === "Class" && prey_kingdom === "" && prey_phylum === "" ? generateClassOptions(formInputData.classes, formInputData.phylums) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Annelida" ? generateClassOptions(formInputData.annelida_classes, formInputData.animalia_phylums) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Arthropoda" ? generateClassOptions(formInputData.arthropoda_classes, formInputData.animalia_phylums) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Bryozoa" ? generateClassOptions(formInputData.bryozoa_classes, formInputData.animalia_phylums) : null} */}
                        {/* inclusive_prey_taxon === "Class" && prey_phylum === "Chordata" ? generateClassOptions(formInputData.chordata_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Cnidaria" ? generateClassOptions(formInputData.cnidaria_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Echinodermata" ? generateClassOptions(formInputData.echinodermata_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Mollusca" ? generateClassOptions(formInputData.mollusca_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Nematoda" ? generateClassOptions(formInputData.nematoda_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Nemertea" ? generateClassOptions(formInputData.nemertea_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Platyhelminthes" ? generateClassOptions(formInputData.platyhelminthes_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Porifera" ? generateClassOptions(formInputData.porifera_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Cyanobacteria" ? generateClassOptions(formInputData.cyanobacteria_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Heterokontophyta" ? generateClassOptions(formInputData.heterokontophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Ochrophyta" ? generateClassOptions(formInputData.ochrophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Phaeophyta" ? generateClassOptions(formInputData.phaeophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Xanthophyta" ? generateClassOptions(formInputData.xanthophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Ascomycota" ? generateClassOptions(formInputData.ascomycota_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Basidiomycota" ? generateClassOptions(formInputData.basidiomycota_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Bryophyta" ? generateClassOptions(formInputData.bryophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Charophyta" ? generateClassOptions(formInputData.charophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Chlorophyta" ? generateClassOptions(formInputData.chlorophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Rhodophyta" ? generateClassOptions(formInputData.rhodophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Phaeophyta" ? generateClassOptions(formInputData.phaeophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Tracheophyta" ? generateClassOptions(formInputData.tracheophyta_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Ciliophora" ? generateClassOptions(formInputData.ciliophora_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Protozoa" ? generateClassOptions(formInputData.protozoa_classes) :
                            inclusive_prey_taxon === "Class" && prey_phylum === "Cyanobacteria" ? generateClassOptions(formInputData.cyanobacteria_classes) : null} */}
                        {/* {inclusive_prey_taxon === "Order" ? generateOrderOptions() : prey_class != "" ? generateOrderOptions() : null}
                        {inclusive_prey_taxon === "Suborder" ? generateSuborderOptions() : prey_order != "" ? generateSuborderOptions() : null}
                        {inclusive_prey_taxon === "Family" ? generateFamilyOptions() : prey_suborder != "" ? generateFamilyOptions() : null}
                        {inclusive_prey_taxon === "Genus" ? generateGenusOptions() : prey_family != "" ? generateGenusOptions() : null}
                        {inclusive_prey_taxon === "Species" ? generateSpeciesOptions() : prey_genus != "" ? generateSpeciesOptions() : null} */}

                    </div>
                    <div id="diet-question2">
                        <p id="required" style={{ ...styles.questionTextSize }}>2. Percent of the diet?</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={{ ...styles.inputBox }} type="text" placeholder="Enter Value" value={fraction_diet} name="fraction_diet" onChange={setDietInfoInputState} />
                        </div>
                    </div>
                    <div id="diet-question3">
                        <p style={{ ...styles.questionTextSize }}>3. Does the value entered above reflect the % of the diet for all members of this prey name (inclusive), or only those members of the prey name that weren’t identified more finely (not inclusive)? Hover over info button for examples.</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <label className="radio" style={styles.radioButtonSpacing}>
                                <input type="radio" value="yes" name="all_prey_diet_yn" onChange={setDietInfoInputState} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>Yes (inclusive)</span>
                            </label>
                            <label className="radio">
                                <input type="radio" value="no" name="all_prey_diet_yn" onChange={setDietInfoInputState} />
                                <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>No (not inclusive)</span>
                            </label>
                        </div>
                    </div>
                    <div style={{ ...styles.inputBoxMultipleSectionContainer, ...styles.noMarginBottom }}>
                        <div id="diet-question4">
                            <p style={{ ...styles.questionTextSize }}>4. Does this prey entry refer to a particular life stage?</p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                {formInputData.prey_stage.map(prey_stage =>
                                    <label className="checkbox" style={styles.checkboxSpacing}>
                                        <input name="prey-stage" id={prey_stage} value={prey_stage} type="checkbox" onChange={() => getCheckedBoxes("prey-stage", setPreyStage)} />
                                        <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>{prey_stage}</span>
                                    </label>
                                )}
                            </div>
                            {/* <div className="control" style={styles.inputBoxSpacing}>
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
                            </div> */}
                        </div>
                        <div id="diet-question5">
                            <p style={{ ...styles.questionTextSize }}>5. Does this prey entry refer to a particular prey part? <span style={styles.green}>*</span></p>
                            <div className="control" style={styles.inputBoxSpacing}>
                                {formInputData.prey_parts.map(prey_part =>
                                    <label className="checkbox" style={styles.checkboxSpacing}>
                                        <input name="prey-part" id={prey_part} value={prey_part} type="checkbox" onChange={() => getCheckedBoxes("prey-part", setPreyPart)} />
                                        <span style={{ ...styles.radioButtonTextSpacing, ...styles.questionTextSize }}>{prey_part}</span>
                                    </label>
                                )}

                                {/* <label className="checkbox" style={styles.checkboxSpacing}>
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
                                </label> */}
                            </div>
                        </div>
                    </div>
                    <div id="diet-question6">
                        <p style={{ ...styles.questionTextSize }}>6. If you have any miscellaneous notes about this prey item you may describe them here.</p>
                        <div className="control" style={styles.inputBoxSpacing}>
                            <input className="input" style={{ ...styles.inputBox }} type="text" placeholder="Enter Notes" value={notes} name="notes" onChange={setDietInfoInputState} />
                        </div>
                    </div>
                </div>
                <div style={styles.addPreyButtonContainer} onClick={() => {
                    addPreyEntry()
                }}>
                    <DesignGreenButton
                        buttonText={'Add another prey?'}
                        className={'add-prey-pg-4'}
                    />
                </div>
                <div>
                    <div style={styles.tableHeader}>
                        <p style={styles.tableTitle}>Current Prey Submissions</p>
                    </div>
                    <div id="prey-table" style={styles.tableContent}>
                        <div style={styles.tableTitles}>
                            <p style={styles.preyTableTitle}>Prey Name</p>
                            <p style={styles.dietTableTitle}>Diet %</p>
                            <p style={styles.lifeStageTableTitle}>Life Stage</p>
                            <p style={styles.preyPartTableTitle}>Prey Part</p>
                        </div>
                    </div>
                </div>
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
                    <div onClick={() => {
                        movePgToPg('4', '5');
                        getCheckedBoxes("prey-part", setPreyPart);
                        getCheckedBoxes("prey-stage", setPreyStage);
                        //setDietInfo();
                    }}>
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
                        <p>{new_species_yn === true ? 'Scientific Name: ' + scientific_name + '; Common Name: ' + common_name + '; Family: ' + family + '; Taxonomy: ' + taxonomy : 'Scientific Name: ' + scientific_name}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>3. Was the data collected from within a single state, province, or country? <span style={styles.green}>*</span></p>
                        <p>{'Location: ' + location_region + '; Specific Location: ' + location_specific}</p>
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
                        <p>{'Quantification: ' + diet_type}</p>
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
                        <p>{'Location: ' + within_study_data_source
                            + '; Table/Figure Number: ' + table_fig_number}</p>
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
                        <p>{preySubmissions.length > 0 ? 'Prey Name: ' + preySubmissions.map(submission => submission.prey_common_name) + '; Taxonomic Level: ' + preySubmissions.map(submission => submission.inclusive_prey_taxon) : 'Prey Name: ' + prey_common_name + '; Taxonomic Level: ' + inclusive_prey_taxon}</p>
                        <p>{preySubmissions.length > 0 ? "Kingdom: " + preySubmissions.map(submission => (submission.prey_kingdom === "" ? "Does not apply" : submission.prey_kingdom)) : prey_kingdom === "" ? "Kingdom: Does not apply" : "Kingdom: " + prey_kingdom}</p>
                        <p>{preySubmissions.length > 0 ? "Phylum: " + preySubmissions.map(submission => (submission.prey_phylum === "" ? "Does not apply" : submission.prey_phylum)) : prey_phylum === "" ? "Phylum: Does not apply" : "Phylum: " + prey_phylum}</p>
                        <p>{preySubmissions.length > 0 ? "Order: " + preySubmissions.map(submission => (submission.prey_order === "" ? "Does not apply" : submission.prey_order)) : prey_order === "" ? "Order: Does not apply" : "Order: " + prey_order}</p>
                        <p>{preySubmissions.length > 0 ? "Suborder: " + preySubmissions.map(submission => (submission.prey_suborder === "" ? "Does not apply" : submission.prey_suborder)) : prey_suborder === "" ? "Suborder: Does not apply" : "Suborder: " + prey_suborder}</p>
                        <p>{preySubmissions.length > 0 ? "Family: " + preySubmissions.map(submission => (submission.prey_family === "" ? "Does not apply" : submission.prey_family)) : prey_family === "" ? "Family: Does not apply" : "Family: " + prey_family}</p>
                        <p>{preySubmissions.length > 0 ? "Genus: " + preySubmissions.map(submission => (submission.prey_genus === "" ? "Does not apply" : submission.prey_genus)) : prey_genus === "" ? "Genus: Does not apply" : "Genus: " + prey_genus}</p>
                        <p>{preySubmissions.length > 0 ? "Species: " + preySubmissions.map(submission => (submission.prey_scientific_name === "" ? "Does not apply" : submission.prey_scientific_name)) : prey_scientific_name === "" ? "Species: Does not apply" : "Species: " + prey_scientific_name}</p>

                        <p style={{ ...styles.questionTextSize }}>2. Percent of the diet?</p>
                        <p>{preySubmissions.length > 0 ? "% diet: " + preySubmissions.map(submission => submission.fraction_diet) : "% diet: " + fraction_diet}</p>
                        <p style={{ ...styles.questionTextSize }}>3. Does the value entered above reflect the % of the diet for all members of this prey name (inclusive), or only those members of the prey name that weren’t identified more finely (not inclusive)?</p>
                        <p>{preySubmissions.length > 0 ? preySubmissions.map(submission => submission.all_prey_diet_yn) : all_prey_diet_yn}</p>
                        <p style={{ ...styles.questionTextSize }}>4. Does this prey entry refer to a particular life stage?</p>
                        <p>{preySubmissions.length > 0 ? "Life Stage(s): " + preySubmissions.map(submission => submission.prey_stage) : "Life Stage(s): " + prey_stage}</p>
                        <p id="required" style={{ ...styles.questionTextSize }}>5. Does this prey entry refer to a particular prey part?<span style={styles.green}>*</span></p>
                        <p>{preySubmissions.length > 0 ? "Prey Part(s): " + preySubmissions.map(submission => submission.prey_part) : "Prey Part(s): " + prey_part}</p>
                        <p style={{ ...styles.questionTextSize }}>6. If you have any miscellaneous notes about this prey item you may describe them here.</p>
                        <p>{preySubmissions.length > 0 ? "Notes: " + preySubmissions.map(submission => submission.notes) : "Notes: " + notes}</p>
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
