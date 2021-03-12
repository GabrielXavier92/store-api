import { Injectable } from 'graphql-modules';

@Injectable()
export class DoctorProvider {
  doctors = [
    {
      id: 'uuid1',
      name: 'Dr chupisco',
    },
    {
      id: 'uuid2',
      name: 'Dr Piranha',
    },
  ];

  getDoctor(id: string) {
    return this.doctors.find((doctor) => doctor.id === id);
  }
}

export default DoctorProvider;
