
import { DesignHome } from "../design/DesignHome";

interface LogicHomeProps {
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

export const LogicHome = (props: LogicHomeProps) => {

    return DesignHome(props);
}