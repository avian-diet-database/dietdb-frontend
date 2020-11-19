import React from "react";
import { LogicCriteria } from "../logic/LogicCriteria";
import { LogicTable } from "../logic/LogicTable";
import { LogicGraph, LogicGraphTypes } from "../logic/LogicGraph";
import { LogicSources } from "../logic/LogicSources";
import { ItemType } from "../../cache";
import { LogicMap } from "../logic/LogicMap";
import { useReactiveVar } from "@apollo/client";

import { ActiveItemVar, ActiveItemTypeVar } from "../../cache";

export interface DesignItemProps {
  activeItem: string;
  activeItemType: ItemType;
  numStudies: number;
  numRecords: number;
  startYears: string[];
  endYears: string[];
  regions: string[];
}

export const DesignItem = (props: DesignItemProps) => {
  let isPredator = props.activeItemType == ItemType.PREDATOR;

  return (
    <div className="hero is-light" id="item">
      <div className="hero-body">
        <div className="notification is-light is-size-4">
          {isPredator ? "Here is what the " : "Birds known to eat "}
          <strong className="is-size-2">
            <a
              style={{ textDecoration: "none" }}
              onClick={() => document.body.scrollIntoView()}
              className="has-text-info"
            >
              {props.activeItem}
            </a>
          </strong>
          {isPredator ? " eats based on" : " based on"}
          <strong className="is-size-2"> {props.numRecords} </strong>
          records and
          <strong className="is-size-2"> {props.numStudies} </strong>
          studies.
        </div>
        <div className="columns">
          <div className="column is-6">
            <LogicCriteria />
            <LogicTable
              numStudies={props.numStudies}
              numRecords={props.numRecords}
            />
          </div>
          <div className="column is-6">
            {isPredator ? (
              <div className="content">
                <LogicGraph graphType={LogicGraphTypes.RECORDS_PER_SEASON} />
                <LogicGraph graphType={LogicGraphTypes.RECORDS_PER_DECADE} />
                <LogicGraph graphType={LogicGraphTypes.RECORDS_PER_DIET_TYPE} />
                <LogicMap />
              </div>
            ) : null}
          </div>
        </div>
        {isPredator ? (
          <div>
            <LogicSources />
          </div>
        ) : null}
      </div>
    </div>
  );
};
