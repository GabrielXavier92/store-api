import { AuthenticationError } from 'apollo-server-errors';

const AuthorizatedMiddleware = (role: string) => (
  { args, context }: { args: any; context: GraphQLModules.Context },
  next: any,
) => {
  if (!context.user?.clinics.length) throw new AuthenticationError('You do not have clinics already');

  // check if user have clinic and have the right role
  const isAuthorizated = context.user?.clinics.find(
    (clinic) => clinic.userId === context.user?.id && clinic.clinicId === args.id && clinic.role === role,
  );
  if (!isAuthorizated) throw new AuthenticationError('You do not have permission');

  return next();
};

export default AuthorizatedMiddleware;
