import React from "react";
import { GET_PENDING_DIET } from "../../gql/queries";
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
    }[];
}


export const DesignAdminDashboard = (props: DesignAdminDashboardProps) => {

    const styles = {
        adminContainerPg1: {
            display: 'block',
        },
        adminContainerPg2: {
            display: 'none',
        },
        adminContainerPg3: {
            display: 'none',
        },
        pendingTableTitle: {
            fontSize: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
        },
        pendingTableContent: {
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '4px',
        },
        tableHeader: {
            padding: '.6rem',
            borderRadius: '4px',
            marginTop: '3rem',
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
        green: {
            color: '#01B684',
        },
        white: {
            color: 'white',
        },
        backgroundGreen: {
            backgroundColor: '#01B684',
        },
        singleButton: {
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
        },
        doubleButton: {
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        noMarginBottom: {
            marginBottom: '0px',
        },
        editButton: {
            paddingRight: '1rem',
            paddingLeft: '1rem',
            marginTop: '.3rem',
            fontSize: '16px',
            backgroundColor: '#01B684',
            color: 'white',
        },
        pendingTableColNameContainer: {
            display: 'flex',
        },
        pendingTableColName: {
            color: '#363636',
            fontWeight: 700,
            fontSize: '18px',
        },
        pendingIDTitle: {
            width: '80px',
        }, 
        pendingAuthorTitle: {
            width: '170px',
        },
        pendingTitleTitle: {
            width: '320px',
        },
        pendingYearTitle: {
            width: '120px',
        },
        pendingUserTitle: {
            width: '120px',
        },
    
      };
    
    function movePgToPg(currentPage: string, targetPage: string) {
        document.getElementById('page' + currentPage).style.display = 'none';
        document.getElementById('page' + targetPage).style.display = 'block';
    }

    return (
            <div className="container">
                <div id="page1" style={styles.adminContainerPg1}>
                    <div>
                        <p className="title is-size-1" style={styles.alignTextCenter}>Admin Dashboard</p>
                    </div>
                    <div>
                        <div style={{...styles.backgroundGreen, ...styles.tableHeader, ...styles.alignTextCenter}} onClick={() => movePgToPg('1', '2')}>
                            <p style={styles.pendingTableTitle}><strong style={styles.white}>Pending Approval</strong></p>
                        </div>
                        <div style={styles.pendingTableContent}>
                            <div style={styles.pendingTableColNameContainer}>
                                <p style={{...styles.pendingTableColName, ...styles.pendingIDTitle}}>ID</p>
                                <p style={{...styles.pendingTableColName, ...styles.pendingAuthorTitle}}>Author</p>
                                <p style={{...styles.pendingTableColName, ...styles.pendingTitleTitle}}>Title</p>
                                <p style={{...styles.pendingTableColName, ...styles.pendingYearTitle}}>Year</p>
                                <p style={{...styles.pendingTableColName, ...styles.pendingUserTitle}}>User</p>
                            </div>
                            <div>
                            {props.pendingData === undefined ?
                                "No pending data to display"
                                : props.pendingData.map(data => 
                                <div>
                                    <div style={styles.pendingTableColNameContainer}>
                                    <p style={styles.pendingIDTitle}>{data.unique_id}</p>
                                        <p style={styles.pendingAuthorTitle}>{data.source.split(',')[0]}</p>
                                        <p style={styles.pendingTitleTitle}>{data.source.split(',')[1]}</p>
                                        <p style={styles.pendingYearTitle}>{data.source.split(',')[2]}</p>
                                        <p style={styles.pendingUserTitle}>{data.entered_by}</p>
                                        <p style={styles.green} >View</p>
                                        
                                        </div>
                                        <hr style={styles.backgroundGreen} />
                                        </div>
                                 )}
                                
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
                        <div style={{...styles.backgroundGreen, ...styles.tableHeader, ...styles.alignTextCenter}}>
                            <p style={styles.pendingTableTitle}><strong style={styles.white}>Approval History</strong></p>
                            
                        </div>
                        </div>
                        <div style={styles.pendingTableContent}>
                            <div style={styles.pendingTableColNameContainer}>
                                <p style={{...styles.pendingTableColName, ...styles.pendingIDTitle}}>ID</p>
                                <p style={{...styles.pendingTableColName, ...styles.pendingAuthorTitle}}>Author</p>
                                <p style={{...styles.pendingTableColName, ...styles.pendingTitleTitle}}>Title</p>
                                <p style={{...styles.pendingTableColName, ...styles.pendingYearTitle}}>Year</p>
                                <p style={{...styles.pendingTableColName, ...styles.pendingUserTitle}}>User</p>
                            </div>
                            <div>
                            {props.pendingData === undefined ?
                                "No approval history to display"
                                : props.pendingData.map(data => 
                                <div>
                                    <div style={styles.pendingTableColNameContainer}>
                                    <p style={styles.pendingIDTitle}>{data.unique_id}</p>
                                        <p style={styles.pendingAuthorTitle}>{data.source.split(',')[0]}</p>
                                        <p style={styles.pendingTitleTitle}>{data.source.split(',')[1]}</p>
                                        <p style={styles.pendingYearTitle}>{data.source.split(',')[2]}</p>
                                        <p style={styles.pendingUserTitle}>{data.entered_by}</p>
                                        <p style={styles.green} >View</p>
                                        
                                        </div>
                                        <hr style={styles.backgroundGreen} />
                                        </div>
                                 )}
                                
                            
                        </div>
                    </div>
                    <div style={styles.singleButton} onClick={() => movePgToPg('3','1')}>
                        <DesignLargeGreenButton 
                            buttonText={'Back to Dashboard'} 
                            className={'back-dashboard-button-pg-3'} />
                    </div>
                </div>
            </div>
    )
}
