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
      preyStage: $level
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
  query(
    $name: String!
    $level: String
    $metrics: String
    $startYear: String
    $endYear: String
    $region: String
  ) {
    getRecordsPerSeason(
      predatorName: $name
      preyLevel: $level
      dietType: $metrics
      startYear: $startYear
      endYear: $endYear
      region: $region
    ) {
      x
      y
    }
  }
`;
export const RECORDS_PER_DIET_TYPE = gql`
  query(
    $name: String!
    $level: String
    $startYear: String
    $endYear: String
    $season: String
    $region: String
  ) {
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
export const RECORDS_PER_DECADE = gql`
  query(
    $name: String!
    $level: String
    $metrics: String
    $season: String
    $region: String
  ) {
    getRecordsPerDecade(
      predatorName: $name
      preyLevel: $level
      dietType: $metrics
      season: $season
      region: $region
    ) {
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
  query(
    $name: String!
    $metrics: String
    $startYear: String
    $endYear: String
    $seasons: String
    $region: String
  ) {
    getPreyOfSources(
      predatorName: $name
      dietType: $metrics
      startYear: $startYear
      endYear: $endYear
      season: $seasons
      region: $region
    )
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
    getMapData(
      predatorName: $name
      dietType: $metrics
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

export const GET_DATABASE_STATS = gql`
query {
  getAvianTableStats {
	numSpecies
	numStudies
	numRecords
	lastUpdated
  }
}`;


export const GET_FILTERS_PRED = gql`
  query(
    $name: String!
    $metrics: String
    $startYear: String
    $endYear: String
    $seasons: String
    $region: String
  ) {
    getFiltersPred(
      predatorName: $name
      dietType: $metrics
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
