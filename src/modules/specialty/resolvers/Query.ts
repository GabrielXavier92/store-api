import { SpecialtyModule } from '../types';

const QueryResolver: SpecialtyModule.Resolvers = {
  Query: {
    specialty(_, { id }, context: GraphQLModules.Context) {
      console.log(context.moduleId);
      return {
        id,
        name: 'specialty',
      };
    },
  },
};
export default QueryResolver;
