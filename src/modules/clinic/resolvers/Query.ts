// import { DoctorProvider } from '../providers';
import { ClinicModule } from '../types';

const QueryResolver: ClinicModule.Resolvers = {
  Query: {
    clinic() {},
    clinics() {},
  },
};
export default QueryResolver;
