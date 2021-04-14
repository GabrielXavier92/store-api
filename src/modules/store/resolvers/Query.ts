import { ClinicProvider } from '../providers';
import { ClinicModule } from '../types';

const QueryResolver: ClinicModule.Resolvers = {
  Query: {
    clinic(_, { id }, { injector }: GraphQLModules.Context) {
      return injector.get(ClinicProvider).getClinic(id);
    },
    clinics(_, __, { injector }: GraphQLModules.Context) {
      return injector.get(ClinicProvider).getClinics();
    },
  },
};
export default QueryResolver;
