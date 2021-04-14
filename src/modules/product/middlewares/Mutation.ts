import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedProductMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    createProduct: [AuthenticatedMiddleware, AuthorizatedProductMiddleware(['ADMIN'])],
    updateProduct: [AuthenticatedMiddleware, AuthorizatedProductMiddleware(['ADMIN'])],
    deleteProduct: [AuthenticatedMiddleware, AuthorizatedProductMiddleware(['ADMIN'])],
  },
};

export default MutationMiddleware;
