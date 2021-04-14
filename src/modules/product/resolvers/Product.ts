import { CategoryProvider } from '../providers';
import { ProductModule } from '../types';

const ProductResolver: ProductModule.Resolvers = {
  Product: {
    category: (product, _, { injector }: GraphQLModules.Context) =>
      injector.get(CategoryProvider).getCategoryByProduct(product.id),
  },
};
export default ProductResolver;
