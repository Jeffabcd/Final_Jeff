import { gql } from '@apollo/client';
export const  ME = gql`
    query {
        me {
            id
            email
            name
            age
        }
    }`
;