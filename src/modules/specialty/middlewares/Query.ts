import { AuthorizatedMiddleware } from '../../auth/utils';

const QueryMiddleware = {
  Query: {
    specialty: [AuthorizatedMiddleware('Minha role')],
  },
};

export default QueryMiddleware;
