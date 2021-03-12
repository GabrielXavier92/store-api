import { AuthorizatedMiddleware } from '../../auth/utils';

const QueryMiddleware = {
  Query: {
    doctor: [AuthorizatedMiddleware('Minha role')],
  },
};

export default QueryMiddleware;
