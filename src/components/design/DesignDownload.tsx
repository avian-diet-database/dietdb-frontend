import React from "react";
import { CSVLink } from "react-csv";

interface DesignDownloadProps {
  csvData: any;
  fileName: string;
}

export const DesignDownload = (props: DesignDownloadProps) => {
  return (
    <div className="field">
      <button className="button is-primary is-inverted">
        <CSVLink
          style={{ textDecoration: "none" }}
          data={props.csvData}
          filename={"avianDietTable.csv"}
        >
          Download Data
        </CSVLink>
      </button>
    </div>
  );
};
