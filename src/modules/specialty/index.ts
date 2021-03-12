import { createModule } from 'graphql-modules';

import middlewares from './middlewares';
import resolvers from './resolvers';
import * as types from './typedefs/types.graphql';
import { SpecialtyProvider } from './providers';

const SpecialtyModule = createModule({
  id: 'SpecialtyModule',
  dirname: __dirname,
  middlewares,
  typeDefs: [types],
  resolvers,
  providers: [SpecialtyProvider],
});

export default SpecialtyModule;
