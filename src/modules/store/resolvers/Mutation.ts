import { ClinicProvider } from '../providers';
import { ClinicModule } from '../types';

const QueryResolver: ClinicModule.Resolvers = {
  Mutation: {
    createClinic(_, { clinicInput }, { injector }: GraphQLModules.Context) {
      return injector.get(ClinicProvider).createClinic(clinicInput);
    },
    updateClinic(_, { id, clinicInput }, { injector }: GraphQLModules.Context) {
      return injector.get(ClinicProvider).updateClinic(id, clinicInput);
    },
    deleteClinic(_, { id }, { injector }: GraphQLModules.Context) {
      return injector.get(ClinicProvider).deleteClinic(id);
    },
  },
};
export default QueryResolver;
