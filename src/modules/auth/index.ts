import { createModule, gql } from 'graphql-modules';

const AuthModule = createModule({
  id: 'auth',
  dirname: __dirname,
  typeDefs: gql`
    extend type Query {
      me: String
    }
  `,
  resolvers: {
    Query: {
      me(_root: {}, _args: {}) {
        return 'oi';
      },
    },
  },
});

export default AuthModule;
