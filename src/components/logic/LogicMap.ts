import { DesignMap } from "../design/DesignMap";
import { GET_MAP_DATA } from "../../gql/queries";
import { useQuery } from "@apollo/client";
import { DesignLoadingPage } from "../design/DesignLoadingPage";
import { LogicErrorPage } from "./LogicErrorPage";

let Rainbow = require("rainbowvis.js");
let colorScale = new Rainbow();
colorScale.setSpectrum("#CED5D3", "#b15900");

let stateNames = new Map();

stateNames.set("Alabama", "AL");
stateNames.set("Alaska", "AK");
stateNames.set("Arizona", "AZ");
stateNames.set("Arkansas", "AR");
stateNames.set("California", "CA");
stateNames.set("Colorado", "CO");
stateNames.set("Connecticut", "CT");
stateNames.set("Delaware", "DE");
stateNames.set("Florida", "FL");
stateNames.set("Georgia", "GA");
stateNames.set("Hawaii", "HI");
stateNames.set("Idaho", "ID");
stateNames.set("Illinois", "IL");
stateNames.set("Indiana", "IN");
stateNames.set("Iowa", "IA");
stateNames.set("Kansas", "KS");
stateNames.set("Kentucky", "KY");
stateNames.set("Louisiana", "LA");
stateNames.set("Maine", "ME");
stateNames.set("Maryland", "MD");
stateNames.set("Massachusetts", "MA");
stateNames.set("Michigan", "MI");
stateNames.set("Minnesota", "MN");
stateNames.set("Mississippi", "MS");
stateNames.set("Missouri", "MO");
stateNames.set("Montana", "MT");
stateNames.set("Nebraska", "NE");
stateNames.set("Nevada", "NV");
stateNames.set("New Hampshire", "NH");
stateNames.set("New Jersey", "NJ");
stateNames.set("New Mexico", "NM");
stateNames.set("New York", "NY");
stateNames.set("North Carolina", "NC");
stateNames.set("North Dakota", "ND");
stateNames.set("Ohio", "OH");
stateNames.set("Oklahoma", "OK");
stateNames.set("Oregon", "OR");
stateNames.set("Pennsylvania", "PA");
stateNames.set("Rhode Island", "RI");
stateNames.set("South Carolina", "SC");
stateNames.set("South Dakota", "SD");
stateNames.set("Tennessee", "TN");
stateNames.set("Texas", "TX");
stateNames.set("Utah", "UT");
stateNames.set("Vermont", "VT");
stateNames.set("Virginia", "VA");
stateNames.set("Washington", "WA");
stateNames.set("West Virginia", "WV");
stateNames.set("Wisconsin", "WI");
stateNames.set("Wyoming", "WY");

const numToColor = (count: number) => {
  return "#" + colorScale.colourAt(count) + "";
};

let customFill: { [k: string]: any } = {};

interface LogicMapProps {
  activeItem: string;
}
export const LogicMap = (props: LogicMapProps) => {
  const query = GET_MAP_DATA;

  const skip = props.activeItem.length < 1;
  const { loading, error, data } = useQuery(query, { skip });
  if (loading) return DesignLoadingPage();
  if (error)
    return LogicErrorPage({
      errorMessage:
        "Uh no, an error has occurred :( please return to homepage!" +
        error.message,
    });
  const arr = data ? data.getMapData : [];
  return createMap(arr);
};

const includeAllStates = () => {
  stateNames.forEach(addState);
};

function addState(value: string, key: string) {
  customFill[value] = { fill: "#CED5D3" };
}

const createMap = (data: any[]) => {
  let maxCount = 0;
  customFill = {};
  includeAllStates();
  let region = "";
  let regionColor = "";
  for (let entry of data) {
    region = entry.region;
    if (!stateNames.has(region)) {
      continue;
    }
    maxCount = Math.max(maxCount, entry.count);
  }
  colorScale.setNumberRange(0, maxCount + 1);
  for (let entry of data) {
    region = entry.region;
    if (!stateNames.has(region)) {
      continue;
    }
    region = stateNames.get(region);
    regionColor = numToColor(entry.count);
    customFill[region] = { fill: regionColor };
  }
  let customConfig = () => {
    return customFill;
  };

  return DesignMap({ customFill: customConfig(), maxRecords: maxCount });
};

export {
  numToColor, createMap
}