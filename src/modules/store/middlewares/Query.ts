import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedMiddleware } from './utils';

const QueryMiddleware = {
  Query: {
    store: [AuthenticatedMiddleware, AuthorizatedMiddleware('ADMIN')],
  },
};

export default QueryMiddleware;
