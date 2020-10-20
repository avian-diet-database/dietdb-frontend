import { gql } from "@apollo/client";

export const GET_PREY_OF = gql`
  query(
    $name: String!
    $level: String
    $metrics: String
    $startYear: String
    $endYear: String
    $season: String
    $region: String
  ) {
    getPreyOf(
      predatorName: $name
      preyLevel: $level
      dietType: $metrics
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
export const GET_PREDATOR_OF = gql`
  query(
    $name: String!
    $level: String
    $metrics: String
    $startYear: String
    $endYear: String
    $season: String
    $region: String
  ) {
    getPredatorOf(
      preyName: $name
      preyLevel: $level
      dietType: $metrics
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

export const GET_AUTOCOMPLETE_PREY = gql`
  query($input: String!) {
    getAutocompletePrey(input: $input)
  }
`;
export const GET_AUTOCOMPLETE_PRED = gql`
  query($input: String!) {
    getAutocompletePred(input: $input)
  }
`;
export const RECORDS_PER_SEASON = gql`
  query($name: String!) {
    getRecordsPerSeason(name: $name) {
      x
      y
    }
  }
`;
export const RECORDS_PER_DIET_TYPE = gql`
  query($name: String!) {
    getRecordsPerDietType(name: $name) {
      x
      y
    }
  }
`;
export const RECORDS_PER_DECADE = gql`
  query($name: String!) {
    getRecordsPerDecade(name: $name) {
      x
      y
    }
  }
`;
export const GET_REGIONS_PRED = gql`
  query($name: String!) {
    getRegionsPred(name: $name)
  }
`;
export const GET_PREY_OF_SOURCES = gql`
  query($name: String!) {
    getPreyOfSources(predatorName: $name)
  }
`;
export const GET_NUM_RECORDS_AND_STUDIES = gql`
  query($name: String!) {
    getNumRecordsAndStudies(name: $name) {
      studies
      records
    }
  }
`;
export const GET_MAP_DATA = gql`
  query(
    $name: String!
    $metrics: String
    $startYear: String
    $endYear: String
    $seasons: String
    $region: String
  ) {
    getMapData(predatorName: $name, dietType: $metrics, startYear: $startYear, endYear: $endYear, season: $seasons, region: $region) {
	    region
	    count
    }
  }
`;
