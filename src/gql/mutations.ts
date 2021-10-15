import { gql, useMutation } from '@apollo/client';

// using this one for now
const TESTB = gql`
mutation createAlternativePendingDiet($common_name: String!,
    $source: String!, $subspecies: String!, $taxonomy: String!, 
    $location_region: String!, $location_specific: String!, 
    $prey_kingdom: String!, $diet_type: String!) {
        createAlternativePendingDiet(common_name: $common_name,
        source: $source, subspecies: $subspecies, taxonomy: $taxonomy,
        location_region: $location_region, location_specific: $location_specific, 
        prey_kingdom: $prey_kingdom, diet_type: $diet_type)
}
`;

const TEST = gql`
mutation CreatePendingDiet(
    $common_name: String
    $source: String
    $subspecies: String
    $taxonomy: String
    $location_region: String
    $location_specific: String
    $prey_kingdom: String
    $diet_type: String
    ) {
    createPendingDiet(           
        common_name: $common_name
        source: $source
        subspecies: $subspecies
        taxonomy: $taxonomy
        location_region: $location_region
        location_specific: $location_specific
        prey_kingdom: $prey_kingdom
        diet_type: $diet_type
    )
    {
        id
        common_name
        source
        subspecies
        taxonomy
        location_region
        location_specific
        prey_kingdom
        diet_type
    }
}
`;

const CREATE_PENDING_DIET_FINAL = gql`
mutation CreatePendingDiet(
    $common_name: string
    $Scientific_name: string
    $subspecies: string
    $family: string
    $taxonomy: string
    $longitude_dd: string
    $latitude_dd: string
    $altitude_min_m: string
    $altitude_max_m: string
    $altitude_mean_m: string
    $location_region: string
    $location_specific: string
    $habitat_type: string
    $observation_month_begin: number
    $observation_month_end: number
    $observation_year_begin: number
    $observation_year_end: number
    $observation_season: string
    $analysis_number: string
    $prey_kingdom: string
    $prey_phylum: string
    $prey_class: string
    $prey_order: string
    $prey_suborder: string
    $prey_family: string
    $prey_genus: string
    $prey_scientific_name: string
    $inclusive_prey_taxon: string
    $prey_name_ITIS_ID: string
    $prey_name_status: string
    $rey_stage: string
    $prey_part: string
    $fraction_diet: string
    $item_sample_size: number
    $bird_sample_size: number
    $sites: string
    $study_type: string
    $notes: string
    $entered_by: string
    $source: string
    ) {
    createPendingDiet(           
        common_name: $common_name
        scientific_name: $scientific_name
        subspecies: $subspecies
        family: $family
        taxonomy: $taxonomy
        longitude_dd: $longitude_dd
        latitude_dd: $latitude_dd
        altitude_min_m: $altitude_min_m
        altitude_max_m: $altitude_max_m
        altitude_mean_m: $altitude_mean_m
        location_region: $location_region
        location_specific: $location_specific
        habitat_type: $habitat_type
        observation_month_begin: $observation_month_begin
        observation_month_end: $observation_month_end
        observation_year_begin: $observation_year_begin
        observation_year_end: $observation_year_end
        observation_season: $observation_season
        analysis_number: $analysis_number
        prey_kingdom: $prey_kingdom
        prey_phylum: $prey_phylum
        prey_class: $prey_class
        prey_order: $prey_order
        prey_suborder: $prey_suborder
        prey_family: $prey_family
        prey_genus: $prey_genus
        prey_scientific_name: $prey_scientific_name
        inclusive_prey_taxon: $inclusive_prey_taxon
        prey_name_ITIS_ID: $prey_name_ITIS_ID
        prey_name_status: $prey_name_status
        prey_stage: $prey_stage
        prey_part: $prey_part
        prey_common_name: $prey_common_name
        fraction_diet: $fraction_diet
        diet_type: $diet_type
        item_sample_size: $item_sample_size
        bird_sample_size: $bird_sample_size
        sites: $sites
        study_type: $study_type
        notes: $notes
        entered_by: $entered_by
        source: $source
    )
    {
        id
        common_name
        scientific_name
        subspecies
        family
        taxonomy
        longitude_dd
        latitude_dd
        altitude_min_m
        altitude_max_m
        altitude_mean_m
        location_region
        location_specific
        habitat_type
        observation_month_begin
        observation_month_end
        observation_year_begin
        observation_year_end
        observation_season
        analysis_number
        prey_kingdom
        prey_phylum
        prey_class
        prey_order
        prey_suborder
        prey_family
        prey_genus
        prey_scientific_name
        inclusive_prey_taxon
        prey_name_ITIS_ID
        prey_name_status
        prey_stage
        prey_part
        prey_common_name
        fraction_diet
        diet_type
        item_sample_size
        bird_sample_size
        sites
        study_type
        notes
        entered_by
        source
    }
}
`;

export {
    TEST, TESTB
}