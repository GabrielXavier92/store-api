import { AuthorizatedMiddleware, AuthenticatedMiddleware } from '../../auth/utils';

const QueryMiddleware = {
  Query: {
    '*': [AuthenticatedMiddleware, AuthorizatedMiddleware('ADMIN')],
  },
};

export default QueryMiddleware;
