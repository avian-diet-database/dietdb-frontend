import React from "react";
import { DesignLargeGreenButton } from "./DesignLargeGreenButton";

const styles = {
    adminContainerPg1: {
        display: 'block',
    },
    formContainerPg2: {
        display: 'none',
    },
    formContainerPg3: {
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

// function movePgToPg(currentPage: string, targetPage: string) {
//     document.getElementById('page' + currentPage).style.display = 'none';
//     document.getElementById('page' + targetPage).style.display = 'block';
// }

function submitForm() {
    console.log("form submitted")
}

export const DesignAdminDashboard = () => {
    return (
            <div className="container">
                <div id="page1" style={styles.adminContainerPg1}>
                    <div>
                        <p className="title is-size-1" style={styles.alignTextCenter}>Admin Dashboard</p>
                    </div>
                    <div>
                        <div style={{...styles.backgroundGreen, ...styles.tableHeader, ...styles.alignTextCenter}}>
                            <p style={styles.pendingTableTitle}><strong style={styles.white}>Pending Approval</strong></p>
                        </div>
                        <div style={styles.pendingTableContent}>
                            <p>table stuff here</p>
                        </div>
                    </div>
                    <div style={styles.singleButton}>
                        <DesignLargeGreenButton 
                            buttonText={'Approval History'} 
                            className={'approval-history-button-pg-1'} />
                    </div>
                </div>
            </div>
    )
}