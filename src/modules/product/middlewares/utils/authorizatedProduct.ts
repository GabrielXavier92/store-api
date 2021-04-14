import { AuthenticationError, ForbiddenError } from 'apollo-server-errors';

const AuthorizatedProductMiddleware = (roles: string[]) => async (
  { args, context }: { args: any; context: GraphQLModules.Context },
  next: any,
) => {
  if (!context.user?.stores.length) throw new AuthenticationError('You do not have stores already');

  const checkProduct = (storeId: string): boolean =>
    !!context.user?.stores.find(
      (store) => store.userId === context.user?.id && store.storeId === storeId && roles.find((role) => store.role === role),
    );

  const checkProductOwner = async (): Promise<boolean> => {
    const { productId, productInput, storeId } = args;

    if (productId) {
      const product = await context.prisma.product.findUnique({ where: { id: productId } });

      if (!product) throw new ForbiddenError('Invalid productId');

      return checkProduct(product.storeId);
    }
    return checkProduct(productInput?.storeId || storeId);
  };

  const isAuthorizated = await checkProductOwner();

  if (!isAuthorizated) throw new AuthenticationError('You do not have permission');

  return next();
};

export default AuthorizatedProductMiddleware;
