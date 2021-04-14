import { ProductProvider } from '../providers';
import { ProductModule } from '../types';

const QueryResolver: ProductModule.Resolvers = {
  Mutation: {
    createProduct(_, { productInput }, { injector }: GraphQLModules.Context) {
      return injector.get(ProductProvider).createProduct(productInput);
    },
    updateProduct(_, { productId, productInput }, { injector }: GraphQLModules.Context) {
      return injector.get(ProductProvider).updateProduct(productId, productInput);
    },
    deleteProduct(_, { productId }, { injector }: GraphQLModules.Context) {
      return injector.get(ProductProvider).deleteProduct(productId);
    },
  },
};
export default QueryResolver;
