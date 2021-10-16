import React from "react";
import { StringLiteralLike, Type } from "typescript";
import { GET_PENDING_DIET } from "../../gql/queries";
import { DesignLargeGreenButton } from "./DesignLargeGreenButton";

export interface DesignAdminDashboardProps {
    pendingData: {
        common_name: string,
        source: string,
        subspecies: string,
        taxonomy: string,
        location_region: string,
        location_specific: string,
        prey_kingdom: string,
        diet_type: string
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
        }
    
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
                            <div>{props.pendingData === undefined ? "No pending data to display" : props.pendingData.map(data => <div>{"Name:" + data.common_name+ "; Subspecies: " + data.subspecies + "; Taxonomy: " + data.taxonomy + "; Region: " + data.location_region + "; Location:" + data.location_specific + "; Prey Kingdom: " + data.prey_kingdom + "; Diet Type: " + data.diet_type}</div>)}</div>
                        </div>
                    </div>
                    {/* <div style={styles.singleButton} onClick={() => movePgToPg('1', '3')}>
                        <DesignLargeGreenButton 
                            buttonText={'Approval History'} 
                            className={'approval-history-button-pg-1'} />
                    </div> */}
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
                <div id="page3" style={styles.adminContainerPg3}>
                    <div>
                        <div style={{...styles.backgroundGreen, ...styles.tableHeader, ...styles.alignTextCenter}}>
                            <p style={styles.pendingTableTitle}><strong style={styles.white}>Approval History</strong></p>
                        </div>
                        <div style={styles.pendingTableContent}>
                            <p>table stuff here</p>
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
