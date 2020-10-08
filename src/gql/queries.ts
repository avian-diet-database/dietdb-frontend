import { gql } from "@apollo/client"

export const GET_PREY_OF = gql`
    query($name:String!) {
            getPreyOf(predatorName: $name) {
                items
                taxon
                wt_or_vol
                occurence
                unspecified
        }
    }
`
export const GET_PREDATOR_OF = gql`
    query($name:String!) {
            getPredatorOf(preyName: $name) {
                items
                taxon
                wt_or_vol
                occurence
                unspecified
        }
    }
`