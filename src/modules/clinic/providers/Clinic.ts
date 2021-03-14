import { Injectable } from 'graphql-modules';
import { UserInputError } from 'apollo-server-errors';

import { ClinicModule } from '../types';

@Injectable()
export class ClinicProvider {
  clinics: ClinicModule.Clinic[] = [
    {
      id: 'uuid1',
      ownerId: 'ownerId',
      name: 'Clinica Odontologica',
      country: 'Brasil',
      state: 'MG',
      address: 'Rua Vasconcelos',
      number: 123,
      complement: 'Apto 301',
      plan: 'STARTER',
    },
  ];

  getClinic(id: string): ClinicModule.Clinic {
    const findClinic = this.clinics.find((clinic) => clinic.id === id);
    if (!findClinic) throw new UserInputError('Unnable to find clinic');
    return findClinic;
  }

  getClinics(): ClinicModule.Clinic[] {
    return this.clinics;
  }

  createClinic(clinic: ClinicModule.ClinicInput): ClinicModule.Clinic {
    const newClinic = {
      ...clinic,
      id: `uuid${this.clinics.length + 1}`,
    };
    this.clinics.push(newClinic);

    return newClinic;
  }

  updateClinic(id: string, updatedClinic: ClinicModule.ClinicInput): ClinicModule.Clinic {
    const clinicIndex = this.clinics.findIndex((clinic) => clinic.id === id)!;
    if (!clinicIndex) throw new UserInputError('Unnable to find clinic');
    this.clinics[clinicIndex] = {
      id,
      ...updatedClinic,
    };
    return this.clinics[clinicIndex];
  }

  deleteClinic(id: string): boolean {
    const clinicIndex = this.clinics.findIndex((clinic) => clinic.id === id)!;
    if (!clinicIndex) throw new UserInputError('Unnable to delete clinic');
    this.clinics = this.clinics.filter((clinic) => clinic.id !== id);
    return true;
  }
}

export default ClinicProvider;
