import { createApplication } from 'graphql-modules';
import AuthModule from './auth';
import StoreModule from './store';
import { AuthProvider } from './auth/providers';

const application = createApplication({
  modules: [AuthModule, StoreModule],
  providers: [AuthProvider],
});

export default application;
