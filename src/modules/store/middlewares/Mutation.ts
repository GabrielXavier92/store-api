import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    updateStore: [AuthenticatedMiddleware, AuthorizatedMiddleware('ADMIN')],
  },
};

export default MutationMiddleware;
