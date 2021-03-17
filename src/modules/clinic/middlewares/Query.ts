import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedMiddleware } from './utils';

const QueryMiddleware = {
  Query: {
    clinic: [AuthenticatedMiddleware, AuthorizatedMiddleware('ADMIN')],
  },
};

export default QueryMiddleware;
