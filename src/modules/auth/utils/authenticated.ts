import { AuthenticationError } from 'apollo-server-errors';

function AuthenticatedMiddleware({ context }: any, next: any) {
  if (!context.user) {
    throw new AuthenticationError('Not Authorized');
  }

  return next();
}

export default AuthenticatedMiddleware;
