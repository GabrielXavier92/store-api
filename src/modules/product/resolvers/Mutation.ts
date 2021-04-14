import { ProductProvider, CategoryProvider } from '../providers';
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
    createCategory(_, { categoryInput }, { injector }: GraphQLModules.Context) {
      return injector.get(CategoryProvider).createCategory(categoryInput);
    },
    updateCategory(_, { categoryId, categoryInput }, { injector }: GraphQLModules.Context) {
      return injector.get(CategoryProvider).updateCategory(categoryId, categoryInput);
    },
    deleteCategory(_, { categoryId }, { injector }: GraphQLModules.Context) {
      return injector.get(CategoryProvider).deleteCategory(categoryId);
    },
  },
};
export default QueryResolver;
