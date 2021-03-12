import { gql } from 'graphql-modules';

const typeDefs = gql`
  type Query {
    doctor(id: ID!): Doctor
  }

  type Doctor {
    id: ID!
    name: String!
  }
`;
export default typeDefs;
