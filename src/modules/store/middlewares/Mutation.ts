import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    createStore: [AuthenticatedMiddleware],
    updateStore: [AuthenticatedMiddleware, AuthorizatedMiddleware(['ADMIN'])],
  },
};

export default MutationMiddleware;
