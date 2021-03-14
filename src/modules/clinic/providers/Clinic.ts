import { Injectable } from 'graphql-modules';

const ClinicPlan = {
  STARTER: 'STARTER',
};

@Injectable()
export class ClinicProvider {
  clinics = [
    {
      id: 'uuid1',
      owenerId: '',
      name: 'Clinica Odontologica',
      country: 'Brasil',
      state: 'MG',
      address: 'Rua Vasconcelos',
      number: 123,
      complement: 'Apto 301',
      plan: ClinicPlan.STARTER,
    },
  ];

  getClinic(id: string) {
    return this.clinics.find((clinic) => clinic.id === id);
  }
}

export default ClinicProvider;
