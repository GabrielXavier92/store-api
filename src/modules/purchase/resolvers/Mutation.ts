import { PurchaseProvider } from '../providers';
import { PurchaseModule } from '../types';

const QueryResolver: PurchaseModule.Resolvers = {
  Mutation: {
    createPurchase(_, { purchaseInput }, { injector }: GraphQLModules.Context) {
      return injector.get(PurchaseProvider).createPurchase(purchaseInput);
    },
  },
};
export default QueryResolver;
