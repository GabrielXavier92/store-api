import { createModule } from 'graphql-modules';

import { QueryMiddleware } from './middlewares';
import { QueryResolver } from './resolvers';
import typeDefs from './typeDefs';

const DoctorModule = createModule({
  id: 'DoctorModule',
  dirname: __dirname,
  middlewares: {
    ...QueryMiddleware,
  },
  typeDefs,
  resolvers: {
    ...QueryResolver,
  },
});

export default DoctorModule;
