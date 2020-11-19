import { gql } from "@apollo/client";

const GET_PREY_OF = gql`
  query GetPreyOf(
    $name: String!
    $level: String
    $startYear: String
    $endYear: String
    $season: String
    $region: String
  ) {
    activeItem @client @export(as: "name")
    level @client @export(as: "level")
    startYear @client @export(as: "startYear")
    endYear @client @export(as: "endYear")
    season @client @export(as: "season")
    region @client @export(as: "region")

    getPreyOf(
      predatorName: $name
      preyLevel: $level
      startYear: $startYear
      endYear: $endYear
      season: $season
      region: $region
    ) {
      items
      taxon
      wt_or_vol
      occurrence
      unspecified
    }
  }
`;
const GET_PREDATOR_OF = gql`
  query GetPredOf(
    $name: String!
    $level: String
    $startYear: String
    $endYear: String
    $season: String
    $region: String
  ) {
    activeItem @client @export(as: "name")
    level @client @export(as: "level")
    startYear @client @export(as: "startYear")
    endYear @client @export(as: "endYear")
    season @client @export(as: "season")
    region @client @export(as: "region")

    getPredatorOf(
      preyName: $name
      preyStage: $level
      startYear: $startYear
      endYear: $endYear
      season: $season
      region: $region
    ) {
      common_name
      family
      diet_type
      fraction_diet
      number_of_studies
    }
  }
`;

const GET_AUTOCOMPLETE_PREY = gql`
  query($input: String!) {
    getAutocompletePrey(input: $input)
  }
`;
const GET_AUTOCOMPLETE_PRED = gql`
  query($input: String!) {
    getAutocompletePred(input: $input)
  }
`;
const RECORDS_PER_SEASON = gql`
  query(
    $name: String!
    $level: String
    $startYear: String
    $endYear: String
    $region: String
  ) {
    activeItem @client @export(as: "name")
    level @client @export(as: "level")
    startYear @client @export(as: "startYear")
    endYear @client @export(as: "endYear")
    region @client @export(as: "region")

    getRecordsPerSeason(
      predatorName: $name
      preyLevel: $level
      startYear: $startYear
      endYear: $endYear
      region: $region
    ) {
      x
      y
    }
  }
`;
const RECORDS_PER_DIET_TYPE = gql`
  query(
    $name: String!
    $level: String
    $startYear: String
    $endYear: String
    $season: String
    $region: String
  ) {
    activeItem @client @export(as: "name")
    level @client @export(as: "level")
    startYear @client @export(as: "startYear")
    endYear @client @export(as: "endYear")
    season @client @export(as: "season")
    region @client @export(as: "region")

    getRecordsPerDietType(
      predatorName: $name
      preyLevel: $level
      startYear: $startYear
      endYear: $endYear
      season: $season
      region: $region
    ) {
      x
      y
    }
  }
`;
const RECORDS_PER_DECADE = gql`
  query($name: String!, $level: String, $season: String, $region: String) {
    activeItem @client @export(as: "name")
    level @client @export(as: "level")
    season @client @export(as: "season")
    region @client @export(as: "region")

    getRecordsPerDecade(
      predatorName: $name
      preyLevel: $level
      season: $season
      region: $region
    ) {
      x
      y
    }
  }
`;
const GET_REGIONS_PRED = gql`
  query($name: String!) {
    activeItem @client @export(as: "name")
    getRegionsPred(name: $name)
  }
`;
const GET_REGIONS_PREY = gql`
  query($name: String!) {
    activeItem @client @export(as: "name")
    getRegionsPrey(name: $name)
  }
`;
const GET_PREY_OF_SOURCES = gql`
  query(
    $name: String!
    $startYear: String
    $endYear: String
    $seasons: String
    $region: String
  ) {
    activeItem @client @export(as: "name")
    startYear @client @export(as: "startYear")
    endYear @client @export(as: "endYear")
    season @client @export(as: "season")
    region @client @export(as: "region")

    getPreyOfSources(
      predatorName: $name
      startYear: $startYear
      endYear: $endYear
      season: $seasons
      region: $region
    )
  }
`;
const GET_NUM_RECORDS_AND_STUDIES_PRED = gql`
  query($name: String!) {
    activeItem @client @export(as: "name")
    getNumRecordsAndStudiesPred(name: $name) {
      studies
      records
    }
  }
`;
const GET_NUM_RECORDS_AND_STUDIES_PREY = gql`
  query($name: String!) {
    activeItem @client @export(as: "name")
    getNumRecordsAndStudiesPrey(name: $name) {
      studies
      records
    }
  }
`;
const ITEM_PAGE_PRED = gql`
  query ItemPagePred($name: String!) {
    activeItem @client @export(as: "name")
    getNumRecordsAndStudiesPred(name: $name) {
      studies
      records
    }
    getFilterValuesPred(name: $name) {
      startYears
      endYears
      regions
    }
  }
`;
const ITEM_PAGE_PREY = gql`
  query ItemPagePrey($name: String!) {
    activeItem @client @export(as: "name")
    getNumRecordsAndStudiesPrey(name: $name) {
      studies
      records
    }
    getFilterValuesPrey(name: $name) {
      startYears
      endYears
      regions
    }
  }
`;
const GET_MAP_DATA = gql`
  query(
    $name: String!
    $startYear: String
    $endYear: String
    $seasons: String
    $region: String
  ) {
    activeItem @client @export(as: "name")
    level @client @export(as: "level")
    startYear @client @export(as: "startYear")
    endYear @client @export(as: "endYear")
    season @client @export(as: "season")
    region @client @export(as: "region")

    getMapData(
      predatorName: $name
      startYear: $startYear
      endYear: $endYear
      season: $seasons
      region: $region
    ) {
      region
      count
    }
  }
`;

const GET_DATABASE_STATS = gql`
  query {
    getAvianTableStats {
      numSpecies
      numStudies
      numRecords
      lastUpdated
    }
  }
`;

const GET_FILTERS_PRED = gql`
  query(
    $name: String!
    $startYear: String
    $endYear: String
    $seasons: String
    $region: String
  ) {
    activeItem @client @export(as: "name")
    level @client @export(as: "level")
    startYear @client @export(as: "startYear")
    endYear @client @export(as: "endYear")
    season @client @export(as: "season")
    region @client @export(as: "region")

    getFiltersPred(
      predatorName: $name
      startYear: $startYear
      endYear: $endYear
      season: $seasons
      region: $region
    ) {
      startYears
      endYears
      regions
      dietTypes
      seasons
    }
  }
`;

export {
  GET_AUTOCOMPLETE_PRED,
  GET_AUTOCOMPLETE_PREY,
  GET_DATABASE_STATS,
  GET_MAP_DATA,
  GET_PREDATOR_OF,
  GET_PREY_OF,
  GET_PREY_OF_SOURCES,
  ITEM_PAGE_PRED,
  ITEM_PAGE_PREY,
  RECORDS_PER_DECADE,
  RECORDS_PER_SEASON,
  RECORDS_PER_DIET_TYPE,
};
