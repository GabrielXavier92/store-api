import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedMiddleware } from './utils';

const QueryMiddleware = {
  Query: {
    stores: [AuthenticatedMiddleware, AuthorizatedMiddleware(['ADMIN'])],
  },
};

export default QueryMiddleware;
