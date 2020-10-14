import React from 'react'
import { CSVLink } from 'react-csv'

interface DesignDownloadProps {
    csvData: any;
    fileName: string;
}

export const DesignDownload = (props: DesignDownloadProps) => {
    return (
        <div className="field">
            <button className="button">
                <CSVLink className="has-text-primary"data={props.csvData} filename={"avianDietTable.csv"}>Download Query Table</CSVLink>
            </button>
        </div>
    )
}