import { StoreProvider } from '../providers';
import { StoreModule } from '../types';

const QueryResolver: StoreModule.Resolvers = {
  Mutation: {
    createStore(_, { storeInput }, { injector }: GraphQLModules.Context) {
      return injector.get(StoreProvider).createStore(storeInput);
    },
    updateStore(_, { id, storeInput }, { injector }: GraphQLModules.Context) {
      return injector.get(StoreProvider).updateStore(id, storeInput);
    },
  },
};
export default QueryResolver;
