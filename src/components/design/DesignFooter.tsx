import React from "react";
import { LogicStatistics } from "../logic/LogicStatistics";

interface DesignFooterProps {
  lastUpdated:string;
}

export const DesignFooter = (props:DesignFooterProps) => {
  return (
    <footer className="footer">
      <section className="columns">
        <div className="column is-6 is-offset-1">
          <div className="content has-text-left">
            <p>
              The Avian Diet Database was created by <a className="has-text-info" href="http://labs.bio.unc.edu/hurlbert/">Dr. Allen Hurlbert</a>, 
              Professor of Biology at the University of North Carolina at Chapel Hill. 
              The database currently focuses on North American birds but 
              will eventually encompass data for all species globally. 
              A data paper describing the dataset can be found <a className="has-text-info" href="https://www.nature.com/articles/s41597-021-01049-9.epdf">here</a>, and the raw data are available via <a className="has-text-info" href="https://github.com/ahhurlbert/aviandietdb">this R package</a>.
            </p>
            <div>
              <strong>Citation:</strong> Hurlbert, AH, AM Olsen, MM Sawyer, and PM Winner. 2021. The Avian Diet Database as a source of quantitative information on avian diets. <italic>Scientific Data</italic> 8:260. https://doi.org/10.1038/s41597-021-01049-9
            </div>
            <div>
              Database last updated on {props.lastUpdated}.
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="content">
            <p className="has-text-right">hurlbert@bio.unc.edu</p>
            <p className="has-text-right">University of North Carolina</p>
            <p className="has-text-right">(919) 843-9930 (office)</p>
          </div>
        </div>
      </section>
    </footer>
  );
};
