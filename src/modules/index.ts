import { createApplication } from 'graphql-modules';
import DoctorModule from './doctor';
import AuthModule from './auth';
import SpecialtyModule from './specialty';
import ClinicModule from './clinic';
import { AuthProvider } from './auth/providers';

const application = createApplication({
  modules: [AuthModule, DoctorModule, SpecialtyModule, ClinicModule],
  providers: [AuthProvider],
});

export default application;
