import { createModule } from 'graphql-modules';

import middlewares from './middlewares';
import * as types from './typedefs/types.graphql';
import resolvers from './resolvers';
import { DoctorProvider } from './providers';

const DoctorModule = createModule({
  id: 'DoctorModule',
  dirname: __dirname,
  middlewares,
  typeDefs: [types],
  resolvers,
  providers: [DoctorProvider],
});

export default DoctorModule;
