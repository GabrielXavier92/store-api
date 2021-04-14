import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    createStpre: [AuthenticatedMiddleware],
    updateStore: [AuthenticatedMiddleware, AuthorizatedMiddleware('ADMIN')],
  },
};

export default MutationMiddleware;
