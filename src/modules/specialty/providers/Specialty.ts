import { Injectable } from 'graphql-modules';

@Injectable()
export class SpecialtyProvider {
  specialties = [
    {
      id: 'specialtyId1',
      doctorId: 'uuid1',
      name: 'Raio X',
    },
    {
      id: 'specialtyId2',
      doctorId: 'uuid1',
      name: 'Canal',
    },
    {
      id: 'specialtyId3',
      doctorId: 'uuid2',
      name: 'Protese',
    },
  ];

  getSpecialtyByDoctor = (doctorId: string) => this.specialties.filter((specialty) => specialty.doctorId === doctorId);
}

export default SpecialtyProvider;
