import { DoctorProvider } from '../providers';
import { DoctorModule } from '../types';

const QueryResolver: DoctorModule.Resolvers = {
  Query: {
    doctor(_, { id }, { injector }: GraphQLModules.Context) {
      return injector.get(DoctorProvider).getDoctor(id)!;
    },
  },
};
export default QueryResolver;
