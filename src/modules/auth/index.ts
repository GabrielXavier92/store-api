import { createModule } from 'graphql-modules';

import * as types from './typedefs/types.graphql';
import resolvers from './resolvers';
import { AuthProvider } from './providers';

const AuthModule = createModule({
  id: 'auth',
  dirname: __dirname,
  typeDefs: [types],
  resolvers,
  providers: [AuthProvider],
});

export default AuthModule;
