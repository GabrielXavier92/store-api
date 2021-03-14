import { createApplication } from 'graphql-modules';
import DoctorModule from './doctor';
import AuthModule from './auth';
import SpecialtyModule from './specialty';
import ClinicModule from './clinic';

const application = createApplication({
  modules: [DoctorModule, SpecialtyModule, AuthModule, ClinicModule],
});

export default application;
