import { createModule } from 'graphql-modules';

import middlewares from './middlewares';
import * as types from './typedefs/types.graphql';
import resolvers from './resolvers';
import { StoreProvider } from './providers';

const StoreModule = createModule({
  id: 'StoreModule',
  dirname: __dirname,
  middlewares,
  typeDefs: [types],
  resolvers,
  providers: [StoreProvider],
});

export default StoreModule;
