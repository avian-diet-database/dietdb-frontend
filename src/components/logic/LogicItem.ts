import { DesignItem } from "../design/DesignItem";

interface LogicItemProps {
  activeItem: string;
  itemType: string;
}

export const LogicItem = (props: LogicItemProps) => {
  //Fetch the data for the active item.
  //Pass the data to the design.
  return DesignItem({ prey: [], sources: [] });
};

