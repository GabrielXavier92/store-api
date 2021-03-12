import { Injectable } from 'graphql-modules';

const doctors = [
  {
    id: 0,
    name: 'Dr chupisco',
  },
];

@Injectable()
export class Doctor {
  getDoctor(id: number) {
    return doctors.find(({ id }) => id === id);
  }
}

export default Doctor;
