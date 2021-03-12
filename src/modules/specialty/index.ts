import { createModule } from 'graphql-modules';

import middlewares from './middlewares';
import resolvers from './resolvers';
import * as types from './typedefs/types.graphql';

const SpecialtyModule = createModule({
  id: 'SpecialtyModule',
  dirname: __dirname,
  middlewares,
  typeDefs: [types],
  resolvers,
});

export default SpecialtyModule;
