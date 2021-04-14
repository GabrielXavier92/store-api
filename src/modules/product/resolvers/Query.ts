import { ProductProvider } from '../providers';
import { ProductModule } from '../types';

const QueryResolver: ProductModule.Resolvers = {
  Query: {
    product(_, { productId }, { injector }: GraphQLModules.Context) {
      return injector.get(ProductProvider).getProduct(productId);
    },
    products(_, { storeId }, { injector }: GraphQLModules.Context) {
      return injector.get(ProductProvider).getProducts(storeId);
    },
  },
};
export default QueryResolver;
