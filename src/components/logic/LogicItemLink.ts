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

    // These two lines would theoretically swap items on click.
    // This breaks apollo client, I think because the whole
    // Query itself is changed when we update itemType.
    // Possible solution: trigger some deeper update, don't touch the apollo variables here too much.
    // Theory confirmed: uncommenting active item var works as expected.
    // It is only switching the type that breaks.
    //ActiveItemTypeVar(props.itemType);
    //ActiveItemVar(item);
    //document.getElementById("item")?.scrollIntoView();
  };

  return DesignItemLink({ itemName: props.itemName, onItemClick });
};
