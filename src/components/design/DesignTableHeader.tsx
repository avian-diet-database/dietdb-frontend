import React from "react";
import { TableController } from "../../types/TableController";
import { ItemType } from "../../App";
import { TableSort } from "../logic/TableSorting";
import { DesignTableHeaderButton } from "./DesignTableHeaderButton";

interface DesignTableHeaderProps {
  sortedBy: TableSort;
  itemType: ItemType;
  controller: TableController;
}

export const DesignTableHeader = (props: DesignTableHeaderProps) => {
  let isPredator = props.itemType === ItemType.PREDATOR;
  const tableHeader = isPredator ? (
    <tr>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.TAXON ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleTaxonClick}
          buttonText="Taxon"
        />
      </th>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.ITEMS ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleItemsClick}
          buttonText="Items"
        />
      </th>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.WTVOL ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleWtVolClick}
          buttonText="Weight/Volume"
        />
      </th>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.OCCUR ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleOccurClick}
          buttonText="Occurrence"
        />
      </th>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.UNSPC ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleUnspcClick}
          buttonText="Unspecified"
        />
      </th>
    </tr>
  ) : (
    <tr>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.CMNNM ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleCommonNameClick}
          buttonText="Common Name"
        />
      </th>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.FAMLY ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleFamilyClick}
          buttonText="Family"
        />
      </th>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.DTTYP ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleMetricsClick}
          buttonText="Diet Type"
        />
      </th>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.FRADT ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleFractionDietClick}
          buttonText="Fraction Diet"
        />
      </th>
      <th className="is-sticky-header">
        <DesignTableHeaderButton
          classNameAddons={
            props.sortedBy === TableSort.NMSTD ? "is-light" : "is-inverted"
          }
          onClick={props.controller.handleNumberOfStudiesClick}
          buttonText="Number of Studies"
        />
      </th>
    </tr>
  );
  return tableHeader;
};
