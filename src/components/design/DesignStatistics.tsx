import React from "react";

export interface DesignStatisticsProps {
  speciesCount: string;
  studiesCount: string;
  recordsCount: string;
}

export const DesignStatistics = (props: DesignStatisticsProps) => {
  return (
    <div className="is-flex is-justify-content-space-between">
      <div className="is-size-3">
        <strong className="is-size-2 has-text-success">
          {props.recordsCount}
        </strong>
        {" Records"}
      </div>
      <div className="is-size-3">
        <strong className="is-size-2 has-text-success">
          {props.studiesCount}
        </strong>
        {" Studies"}
      </div>
      <div className="is-size-3">
        <strong className="is-size-2 has-text-success">
          {props.speciesCount}
        </strong>
        {" Species"}
      </div>
    </div>
  );
};

