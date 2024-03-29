import { gql } from '@apollo/client';

/* AuthenticationResolver mutations */
const CREATE_USER = gql `
mutation createUser($full_name: String!,
    $username: String!, $email: String!, $password: String!, 
    $admin_password: String!, $is_verified: String!, 
    $is_admin: String!, $security_question: String!) {
        createUser(full_name: $full_name,
            username: $username, email: $email, password: $password, 
            admin_password: $admin_password, is_verified: $is_verified, 
            is_admin: $is_admin, security_question: $security_question)
    }
`;

const RESET_PASSWORD = gql `
mutation resetPassword($email: String!, $password: String!) {
        resetPassword(email: $email, password: $password)
    }
`;

/* PendingPageResolver mutations and queries */

// Using this one for now
const CREATE_PENDING_DIET_SKELETON = gql`
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

// Replace CREATE_PENDING_DIET_SKELETON with this to test full submission form mutation
const CREATE_PENDING_DIET_TOTAL = gql`
mutation CreatePendingDiet(
    $common_name: String!
    $scientific_name: String!
    $subspecies: String
    $family: String
    $taxonomy: String
    $longitude_dd: String
    $latitude_dd: String
    $altitude_min_m: String
    $altitude_max_m: String
    $altitude_mean_m: String
    $location_region: String!
    $location_specific: String
    $habitat_type: String
    $observation_month_begin: Int
    $observation_month_end: Int
    $observation_year_begin: Int
    $observation_year_end: Int
    $observation_season: String
    $analysis_number: String
    $prey_kingdom: String!
    $prey_phylum: String
    $prey_class: String
    $prey_order: String
    $prey_suborder: String
    $prey_family: String
    $prey_genus: String
    $prey_scientific_name: String
    $inclusive_prey_taxon: String
    $prey_name_ITIS_ID: String
    $prey_name_status: String
    $prey_stage: String
    $prey_part: String
    $prey_common_name: String
    $fraction_diet: String
    $diet_type: String!
    $item_sample_size: Int
    $bird_sample_size: Int
    $sites: String
    $study_type: String
    $notes: String
    $entered_by: String
    $source: String!
    $doi: String
    $sex: String
    $age_class: String
    $within_study_data_source: String
    $table_fig_number: String
    $title: String
    $lastname_author: String
    $source_year: Int
    $journal: String
    $total_percent_diet: Float
    $new_species: Boolean!
    ) {
    createPendingDiet(           
        common_name: $common_name
        scientific_name: $scientific_name
        subspecies: $subspecies
        family: $family
        new_species: $new_species
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
        total_percent_diet: $total_percent_diet
        diet_type: $diet_type
        item_sample_size: $item_sample_size
        bird_sample_size: $bird_sample_size
        sites: $sites
        study_type: $study_type
        notes: $notes
        entered_by: $entered_by
        source: $source
        doi: $doi
        sex: $sex
        age_class: $age_class
        within_study_data_source: $within_study_data_source
        table_fig_number: $table_fig_number
        title: $title
        lastname_author: $lastname_author
        source_year: $source_year
        journal: $journal
    )
}
`;

const APPROVE_PENDING_DIET = gql`
mutation ApprovePendingDiet(
    $common_name: String!
    $scientific_name: String!
    $subspecies: String
    $family: String
    $taxonomy: String
    $longitude_dd: String
    $latitude_dd: String
    $altitude_min_m: String
    $altitude_max_m: String
    $altitude_mean_m: String
    $location_region: String!
    $location_specific: String
    $habitat_type: String
    $observation_month_begin: Int
    $observation_month_end: Int
    $observation_year_begin: Int
    $observation_year_end: Int
    $observation_season: String
    $analysis_number: String
    $prey_kingdom: String!
    $prey_phylum: String
    $prey_class: String
    $prey_order: String
    $prey_suborder: String
    $prey_family: String
    $prey_genus: String
    $prey_scientific_name: String
    $inclusive_prey_taxon: String
    $prey_name_ITIS_ID: String
    $prey_name_status: String
    $prey_stage: String
    $prey_part: String
    $prey_common_name: String
    $fraction_diet: String
    $diet_type: String!
    $item_sample_size: Int
    $bird_sample_size: Int
    $sites: String
    $study_type: String
    $notes: String
    $entered_by: String
    $source: String!
    $doi: String
    $sex: String
    $age_class: String
    $within_study_data_source: String
    $table_fig_number: String
    $title: String
    $lastname_author: String
    $source_year: Int
    $journal: String
    $total_percent_diet: Float
    $unique_id: Int!
    ) {
    approvePendingDiet(           
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
        doi: $doi
        sex: $sex
        age_class: $age_class
        within_study_data_source: $within_study_data_source
        table_fig_number: $table_fig_number
        title: $title
        lastname_author: $lastname_author
        source_year: $source_year
        journal: $journal
        total_percent_diet: $total_percent_diet
        unique_id: $unique_id
    )
}
`;

const DENY_PENDING_DIET = gql`
mutation DenyPendingDiet(
    $common_name: String!
    $scientific_name: String!
    $subspecies: String
    $family: String
    $taxonomy: String
    $longitude_dd: String
    $latitude_dd: String
    $altitude_min_m: String
    $altitude_max_m: String
    $altitude_mean_m: String
    $location_region: String!
    $location_specific: String
    $habitat_type: String
    $observation_month_begin: Int
    $observation_month_end: Int
    $observation_year_begin: Int
    $observation_year_end: Int
    $observation_season: String
    $analysis_number: String
    $prey_kingdom: String!
    $prey_phylum: String
    $prey_class: String
    $prey_order: String
    $prey_suborder: String
    $prey_family: String
    $prey_genus: String
    $prey_scientific_name: String
    $inclusive_prey_taxon: String
    $prey_name_ITIS_ID: String
    $prey_name_status: String
    $prey_stage: String
    $prey_part: String
    $prey_common_name: String
    $fraction_diet: String
    $diet_type: String!
    $item_sample_size: Int
    $bird_sample_size: Int
    $sites: String
    $study_type: String
    $notes: String
    $entered_by: String
    $source: String!
    $doi: String
    $sex: String
    $age_class: String
    $within_study_data_source: String
    $table_fig_number: String
    $title: String
    $lastname_author: String
    $source_year: Int
    $journal: String
    $total_percent_diet: Float
    $unique_id: Int!
    ) {
    denyPendingDiet(           
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
        doi: $doi
        sex: $sex
        age_class: $age_class
        within_study_data_source: $within_study_data_source
        table_fig_number: $table_fig_number
        title: $title
        lastname_author: $lastname_author
        source_year: $source_year
        journal: $journal
        total_percent_diet: $total_percent_diet
        unique_id: $unique_id
    )
}
`;

export {
    CREATE_PENDING_DIET_SKELETON,
    CREATE_PENDING_DIET_TOTAL,
    APPROVE_PENDING_DIET,
    DENY_PENDING_DIET,
    CREATE_USER,
    RESET_PASSWORD
}