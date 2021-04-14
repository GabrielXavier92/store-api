import { ProductProvider, CategoryProvider } from '../providers';
import { ProductModule } from '../types';

const QueryResolver: ProductModule.Resolvers = {
  Query: {
    product(_, { productId }, { injector }: GraphQLModules.Context) {
      return injector.get(ProductProvider).getProduct(productId);
    },
    products(_, { storeId }, { injector }: GraphQLModules.Context) {
      return injector.get(ProductProvider).getProducts(storeId);
    },
    category(_, { categoryId }, { injector }: GraphQLModules.Context) {
      return injector.get(CategoryProvider).getCategory(categoryId);
    },
    categorys(_, { storeId }, { injector }: GraphQLModules.Context) {
      return injector.get(CategoryProvider).getCategorys(storeId);
    },
  },
};
export default QueryResolver;
