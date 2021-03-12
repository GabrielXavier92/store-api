import { createModule } from 'graphql-modules';

import { QueryMiddleware } from './middlewares';
import { QueryResolver, DoctorResolver } from './resolvers';
import typeDefs from './typeDefs';

const SpecialtyModule = createModule({
  id: 'SpecialtyModule',
  dirname: __dirname,
  middlewares: {
    ...QueryMiddleware,
  },
  typeDefs,
  resolvers: {
    ...QueryResolver,
    ...DoctorResolver,
  },
});

export default SpecialtyModule;
