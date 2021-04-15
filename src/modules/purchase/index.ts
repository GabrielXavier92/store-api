import { createModule } from 'graphql-modules';

import middlewares from './middlewares';
import * as types from './typedefs/types.graphql';
import resolvers from './resolvers';
import { PurchaseProvider } from './providers';

const PurchaseModule = createModule({
  id: 'PurchaseModule',
  dirname: __dirname,
  middlewares,
  typeDefs: [types],
  resolvers,
  providers: [PurchaseProvider],
});

export default PurchaseModule;
