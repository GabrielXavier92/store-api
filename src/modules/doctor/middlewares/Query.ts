import { AuthenticatedMiddleware } from '../../auth/utils';

const QueryMiddleware = {
  Query: {
    doctor: [AuthenticatedMiddleware],
  },
};

export default QueryMiddleware;
