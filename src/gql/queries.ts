import { gql } from "@apollo/client"

export const GET_PREY_OF = gql`
    query($name:String!) {
            getPreyOf(predatorName: $name) {
                taxon
                wt_or_vol
        }
    }
`
export const GET_PREDATOR_OF = gql`
    query($name:String!) {
            getPredatorOf(preyName: $name) {
               taxon
               wt_or_vol
        }
    }
`