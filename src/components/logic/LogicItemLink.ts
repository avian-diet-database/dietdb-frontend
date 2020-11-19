import { ItemType } from "../../cache";
import { DesignItemLink } from "../design/DesignItemLink";
import { ActiveItemTypeVar, ActiveItemVar } from "../../cache";

export interface LogicItemLinkProps {
  // In test cases, fruit/vegetable.
  itemType: ItemType;
  // The active item.
  itemName: string;
  resetTable: (itemType: ItemType) => void;
}

export const LogicItemLink = (props: LogicItemLinkProps) => {
  const onItemClick = () => {
    props.resetTable(props.itemType);
    ActiveItemTypeVar(props.itemType);
    ActiveItemVar(
      props.itemName
        .replace(/Unid./g, "")
        .replace(/larva/g, "")
        .replace(/adult/g, "")
        .replace(/pupa/g, "")
        .trim()
    );
    document.getElementById("item")?.scrollIntoView();
  };
  return DesignItemLink({ itemName: props.itemName, onItemClick });
};
