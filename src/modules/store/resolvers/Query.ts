import { StoreProvider } from '../providers';
import { StoreModule } from '../types';

const QueryResolver: StoreModule.Resolvers = {
  Query: {
    store(_, { storeId }, { injector }: GraphQLModules.Context) {
      return injector.get(StoreProvider).getStore(storeId);
    },
    stores(_, __, { injector }: GraphQLModules.Context) {
      return injector.get(StoreProvider).getStores();
    },
  },
};
export default QueryResolver;
