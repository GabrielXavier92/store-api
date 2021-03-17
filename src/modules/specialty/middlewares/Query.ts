import { AuthenticatedMiddleware } from '../../auth/utils';

const QueryMiddleware = {
  Query: {
    specialty: [AuthenticatedMiddleware],
  },
};

export default QueryMiddleware;
