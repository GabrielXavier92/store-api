import { createApplication } from 'graphql-modules';
import AuthModule from './auth';
import ProductModule from './product';
import StoreModule from './store';
import PurchaseModule from './purchase';

import { AuthProvider } from './auth/providers';

const application = createApplication({
  modules: [AuthModule, ProductModule, StoreModule, PurchaseModule],
  providers: [AuthProvider],
});

export default application;
