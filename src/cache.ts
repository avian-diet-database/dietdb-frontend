import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { Prey } from "./types/Prey";
import { Predator } from "./types/Predator";
import { CriteriaOptions } from "./types/CriteriaController";
import {
  mapRegion,
  mapSeason,
  mapStage,
  mapLevel,
} from "./components/logic/CiteriaHooks";

export enum ItemType {
  PREY,
  PREDATOR,
  NA,
  ABOUT,
  SUBMIT,
  LOGIN,
  LOGOUT,
  ADMIN
}

export const PreyVar: ReactiveVar<Prey[]> = makeVar<Prey[]>([]);
export const PredVar: ReactiveVar<Predator[]> = makeVar<Predator[]>([]);
export const ActiveItemTypeVar: ReactiveVar<ItemType> = makeVar<ItemType>(
  ItemType.NA
);

export const ActiveItemVar: ReactiveVar<string> = makeVar<string>("");
export const StartYearVar: ReactiveVar<string> = makeVar<string>("1900");
export const EndYearVar: ReactiveVar<string> = makeVar<string>("2020");
export const RegionVar: ReactiveVar<string> = makeVar<string>("all regions");
export const SeasonVar: ReactiveVar<string> = makeVar<string>("all seasons");
export const StageVar: ReactiveVar<string> = makeVar<string>("all stages");
export const LevelVar: ReactiveVar<string> = makeVar<string>("Class");

const CriteriaOptionsInitialValue: CriteriaOptions = {
  startYearOptions: [],
  endYearOptions: [],
  regionOptions: [],
  seasonOptions: [
    "all seasons",
    "spring",
    "summer",
    "fall",
    "winter",
    "unspecified",
  ],
  stageOptions: ["all stages", "larva", "pupa", "adult"],
  levelOptions: [
    "Class",
    "Species",
    "Genus",
    "Family",
    "Suborder",
    "Order",
    "Phylum",
    "Kingdom",
  ],
};

export const CriteriaOptionsVar: ReactiveVar<CriteriaOptions> = makeVar<
  CriteriaOptions
>(CriteriaOptionsInitialValue);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        prey: {
          read() {
            return PreyVar();
          },
        },
        predator: {
          read() {
            return PredVar();
          },
        },
        activeItemType: {
          read() {
            return ActiveItemTypeVar();
          },
        },
        activeItem: {
          read() {
            return ActiveItemVar();
          },
        },
        startYear: {
          read() {
            return StartYearVar();
          },
        },
        endYear: {
          read() {
            return EndYearVar();
          },
        },
        region: {
          read() {
            return mapRegion(RegionVar()).value;
          },
        },
        season: {
          read() {
            return mapSeason(SeasonVar()).value;
          },
        },
        stage: {
          read() {
            return mapStage(StageVar()).value;
          },
        },
        level: {
          read() {
            return mapLevel(LevelVar()).value;
          },
        },
      },
    },
  },
});
