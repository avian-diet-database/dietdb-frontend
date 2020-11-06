import React from "react";
import { TableController } from "../../types/TableController";
import { ItemType } from "../../App";
import { TableSort } from "../logic/TableSorting";

interface DesignTableHeaderProps {
  sortedBy: TableSort;
  itemType: ItemType;
  controller: TableController;
}

export const DesignTableHeader = (props: DesignTableHeaderProps) => {
  let isPredator = props.itemType === ItemType.PREDATOR;
  const tableHeader = isPredator ? (
    <tr>
      <th>
        <button
          className={
            "button is-primary " +
            (props.sortedBy === TableSort.TAXON ? "" : "is-inverted")
          }
          onClick={props.controller.handleTaxonClick}
        >
          <span>Taxon</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
      <th>
        <button
          className={
            "button is-primary " +
            (props.sortedBy === TableSort.ITEMS ? "" : "is-inverted")
          }
          onClick={props.controller.handleItemsClick}
        >
          <span>Items</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
      <th>
        <button
          className={
            "button is-info " +
            (props.sortedBy === TableSort.WTVOL ? "" : "is-inverted")
          }
          onClick={props.controller.handleWtVolClick}
        >
          <span>Weight/Volume</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
      <th>
        <button
          className={
            "button is-info " +
            (props.sortedBy === TableSort.OCCUR ? "" : "is-inverted")
          }
          onClick={props.controller.handleOccurClick}
        >
          <span>Occurrence</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
      <th>
        <button
          className={
            "button is-info " +
            (props.sortedBy === TableSort.UNSPC ? "" : "is-inverted")
          }
          onClick={props.controller.handleUnspcClick}
        >
          <span>Unspecified</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
    </tr>
  ) : (
    <tr>
      <th>
        <button
          className={
            "button is-info " +
            (props.sortedBy === TableSort.CMNNM ? "" : "is-inverted")
          }
          onClick={props.controller.handleCommonNameClick}
        >
          <span>Common Name</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
      <th>
        <button
          className={
            "button is-info " +
            (props.sortedBy === TableSort.FAMLY ? "" : "is-inverted")
          }
          onClick={props.controller.handleFamilyClick}
        >
          <span>Family</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
      <th>
        <button
          className={
            "button is-info " +
            (props.sortedBy === TableSort.DTTYP ? "" : "is-inverted")
          }
          onClick={props.controller.handleMetricsClick}
        >
          <span>Diet Type</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
      <th>
        <button
          className={
            "button is-info " +
            (props.sortedBy === TableSort.FRADT ? "" : "is-inverted")
          }
          onClick={props.controller.handleFractionDietClick}
        >
          <span>Fraction Diet</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
      <th>
        <button
          className={
            "button is-info " +
            (props.sortedBy === TableSort.NMSTD ? "" : "is-inverted")
          }
          onClick={props.controller.handleNumberOfStudiesClick}
        >
          <span>Number of Studies</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </th>
    </tr>
  );
  return tableHeader;
};
