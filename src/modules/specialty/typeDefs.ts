import { gql } from 'graphql-modules';

const typeDefs = gql`
  extend type Query {
    specialty(id: ID!): Specialty
  }

  extend type Doctor {
    specialties: [Specialty]
  }

  type Specialty {
    id: ID!
    name: String!
    code: String
  }
`;
export default typeDefs;
