
import { DesignHome } from "../design/DesignHome";
import { ItemTypeAction } from "../../App"

export interface LogicHomeProps {
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
    dispatchActiveItemType: React.Dispatch<ItemTypeAction>;
}

export const LogicHome = (props: LogicHomeProps) => {
    return DesignHome(props);
}