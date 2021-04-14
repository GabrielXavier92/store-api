import { createApplication } from 'graphql-modules';
import AuthModule from './auth';
import ProductModule from './product';
import StoreModule from './store';
import { AuthProvider } from './auth/providers';

const application = createApplication({
  modules: [AuthModule, ProductModule, StoreModule],
  providers: [AuthProvider],
});

export default application;
