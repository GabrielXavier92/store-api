import { createModule } from 'graphql-modules';

import middlewares from './middlewares';
import * as types from './typedefs/types.graphql';
import resolvers from './resolvers';
import { ProductProvider, CategoryProvider } from './providers';

const ProductModule = createModule({
  id: 'ProductModule',
  dirname: __dirname,
  middlewares,
  typeDefs: [types],
  resolvers,
  providers: [ProductProvider, CategoryProvider],
});

export default ProductModule;
