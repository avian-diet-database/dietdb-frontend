import { DesignMap } from "../design/DesignMap";

interface LogicMapProps {
    activeItem:string;
}

export const LogicMap = (props: LogicMapProps) => {


    return DesignMap(props);
}