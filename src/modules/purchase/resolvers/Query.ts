import { PurchaseProvider } from '../providers';
import { PurchaseModule } from '../types';

const QueryResolver: PurchaseModule.Resolvers = {
  Query: {
    purchase(_, { purchaseId }, { injector }: GraphQLModules.Context) {
      return injector.get(PurchaseProvider).getPurchase(purchaseId);
    },
    purchases(_, { storeId }, { injector }: GraphQLModules.Context) {
      return injector.get(PurchaseProvider).getPurchases(storeId);
    },
  },
};
export default QueryResolver;
