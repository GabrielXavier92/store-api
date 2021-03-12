const QueryResolver = {
  Query: {
    specialty(_: any, __: any, context: GraphQLModules.Context) {
      return {
        id: context.user?.id,
        name: context.user?.name,
      };
    },
  },
};
export default QueryResolver;
