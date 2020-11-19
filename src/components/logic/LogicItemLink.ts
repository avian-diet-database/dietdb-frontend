import { ItemType } from "../../cache";
import { DesignItemLink } from "../design/DesignItemLink";
import { ActiveItemTypeVar, ActiveItemVar } from "../../cache";

export interface LogicItemLinkProps {
  // In test cases, fruit/vegetable.
  itemType: ItemType;
  // The active item.
  itemName: string;
}

export const LogicItemLink = (props: LogicItemLinkProps) => {
  const onItemClick = () => {
    let item = props.itemName
      .replace(/Unid./g, "")
      .replace(/larva/g, "")
      .replace(/adult/g, "")
      .replace(/pupa/g, "")
      .trim();

    ActiveItemVar(item);
    ActiveItemTypeVar(props.itemType);
    document.getElementById("item")?.scrollIntoView();
  };

  return DesignItemLink({ itemName: props.itemName, onItemClick });
};
