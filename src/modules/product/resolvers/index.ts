import QueryResolver from './Query';
import MutationResolver from './Mutation';
import ProductResolver from './Product';

export default {
  ...QueryResolver,
  ...MutationResolver,
  ...ProductResolver,
};
