import gql from 'graphql-tag'
import locationTypeDefsCustom from './custom.gql'
import locationTypeDefsQueries from './queries.gql'
import locationTypeDefsMutations from './mutations.gql'

export const typeDefs = gql` 
    ${locationTypeDefsCustom}
    type Query{
        ${locationTypeDefsQueries}
    }
    type Mutation{
        ${locationTypeDefsMutations}
    }
`