import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedProductMiddleware, AuthorizatedCategoryMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    createProduct: [AuthenticatedMiddleware, AuthorizatedProductMiddleware(['ADMIN'])],
    updateProduct: [AuthenticatedMiddleware, AuthorizatedProductMiddleware(['ADMIN'])],
    deleteProduct: [AuthenticatedMiddleware, AuthorizatedProductMiddleware(['ADMIN'])],

    createCategory: [AuthenticatedMiddleware, AuthorizatedCategoryMiddleware(['ADMIN'])],
    updateCategory: [AuthenticatedMiddleware, AuthorizatedCategoryMiddleware(['ADMIN'])],
    deleteCategory: [AuthenticatedMiddleware, AuthorizatedCategoryMiddleware(['ADMIN'])],
  },
};

export default MutationMiddleware;
