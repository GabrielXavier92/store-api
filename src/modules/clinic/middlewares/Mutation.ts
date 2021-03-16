import { AuthorizatedMiddleware, AuthenticatedMiddleware } from '../../auth/utils';

const MutationMiddleware = {
  Mutation: {
    '*': [AuthenticatedMiddleware, AuthorizatedMiddleware('ADMIN')],
  },
};

export default MutationMiddleware;
