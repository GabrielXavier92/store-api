import { AuthenticationError, ForbiddenError } from 'apollo-server-errors';

const AuthorizatedCategoryMiddleware = (roles: string[]) => async (
  { args, context }: { args: any; context: GraphQLModules.Context },
  next: any,
) => {
  if (!context.user?.stores.length) throw new AuthenticationError('You do not have stores already');

  const checkCategory = (storeId: string): boolean =>
    !!context.user?.stores.find(
      (store) => store.userId === context.user?.id && store.storeId === storeId && roles.find((role) => store.role === role),
    );

  const checkCategoryOwner = async (): Promise<boolean> => {
    const { categoryId, categoryInput, storeId } = args;

    if (categoryId) {
      const category = await context.prisma.category.findUnique({ where: { id: categoryId } });

      if (!category) throw new ForbiddenError('Invalid categoryId');

      return checkCategory(category.storeId);
    }
    return checkCategory(categoryInput?.storeId || storeId);
  };

  const isAuthorizated = await checkCategoryOwner();

  if (!isAuthorizated) throw new AuthenticationError('You do not have permission');

  return next();
};

export default AuthorizatedCategoryMiddleware;
