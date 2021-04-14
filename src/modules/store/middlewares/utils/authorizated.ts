import { AuthenticationError } from 'apollo-server-errors';

const AuthorizatedMiddleware = (role: string) => (
  { args, context }: { args: any; context: GraphQLModules.Context },
  next: any,
) => {
  if (!context.user?.stores.length) throw new AuthenticationError('You do not have clinics already');

  const hasArgs = !!args.storeId;

  // check if user have clinic and have the right role
  const isAuthorizated = context.user?.stores.find(
    (store) => store.userId === context.user?.id && (hasArgs ? store.storeId === args.storeId : true) && store.role === role,
  );
  if (!isAuthorizated) throw new AuthenticationError('You do not have permission');

  return next();
};

export default AuthorizatedMiddleware;