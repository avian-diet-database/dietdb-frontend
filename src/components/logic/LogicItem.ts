import { DesignItem } from "../design/DesignItem";

interface LogicItemProps {
  activeItem: string;
  itemType: string;
}

export const LogicItem = (props: LogicItemProps) => {
  //Fetch the data for the active item.
  //Because this is where the fetching the actual data happens, this is where filtering needs to happen as well.
  //Pass the data to the design.

  return DesignItem({ prey: [], sources: [] });
};

