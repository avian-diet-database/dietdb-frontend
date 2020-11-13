import React from "react";
import { LogicStatistics } from "../logic/LogicStatistics";

interface DesignFooterProps {
  lastUpdated:string;
}

export const DesignFooter = (props:DesignFooterProps) => {
  return (
    <footer className="footer ">
      <section className="columns">
        <div className="column is-6 is-offset-1">
          <div className="content has-text-left">
            <p>
              The Avian Diet Database was created by <a className="has-text-info" href="http://labs.bio.unc.edu/hurlbert/">Dr. Allen Hurlbert</a>, 
              Professor of Biology at the University of North Carolina at Chapel Hill. 
              The database currently focuses on North American birds but 
              will eventually encompass data for all species globally. 
              The raw data along with a data paper describing the dataset can be found <a className="has-text-info" href="https://github.com/hurlbertlab/dietdatabase/blob/master/AvianDietDatabase.txt">here</a>.
            </p>
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
