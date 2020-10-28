import { DesignHome } from "../design/DesignHome";
import { ItemType } from "../../App";

export interface LogicHomeProps {
  activeItem: string;
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
}

export const LogicHome = (props: LogicHomeProps) => {
  return DesignHome(props);
};

