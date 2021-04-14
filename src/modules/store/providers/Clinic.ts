import { Injectable, ExecutionContext, Inject } from 'graphql-modules';
import { AuthenticationError, ApolloError, ForbiddenError } from 'apollo-server-errors';

import { ClinicModule } from '../types';
import { plans } from '../constants';
import { AuthProvider } from '../../auth/providers';
@Injectable()
export class ClinicProvider {
  constructor(@Inject(AuthProvider) private auth: AuthProvider) {}

  @ExecutionContext()
  private context: ExecutionContext;

  async getClinic(id: string): Promise<ClinicModule.Clinic> {
    try {
      const clinic = await this.context.prisma.clinic.findUnique({ where: { id } });
      return clinic!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async getClinics(): Promise<ClinicModule.Clinic[]> {
    try {
      return this.context.prisma.clinic.findMany({
        where: {
          UserOnClinic: {
            some: { userId: this.context.user?.id },
          },
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async createClinic(clinic: ClinicModule.ClinicInput): Promise<ClinicModule.CreatedClinic> {
    /*
    TODO
    LOGICA PARA VERIFICAR QUAL PLANO A CLINIC ESTA BASEADO NOS PAGAMENTOS
    */
    let newClinic;
    if (this.context.user?.id) {
      newClinic = {
        ...clinic,
        ownerId: this.context.user?.id,
        plan: clinic.plan || plans.starter,
      };
      const createdClinic = await this.context.prisma.clinic.create({ data: newClinic });
      await this.createUserOnClinic(createdClinic.ownerId, createdClinic.id, 'ADMIN');

      const token = await this.auth.generateToken(createdClinic.ownerId);

      return {
        clinic: createdClinic,
        token,
      };
    }

    throw new AuthenticationError('Unnable to create Clinic');
  }

  async createUserOnClinic(userId: string, clinicId: string, role: string): Promise<boolean> {
    try {
      await this.context.prisma.userOnClinic.create({
        data: {
          userId,
          clinicId,
          role,
        },
      });
      return true;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async updateClinic(id: string, updatedClinic: ClinicModule.ClinicInput): Promise<ClinicModule.Clinic> {
    try {
      return this.context.prisma.clinic.update({
        where: { id },
        data: updatedClinic,
      });
    } catch (e) {
      throw new ApolloError(e);
    }
  }

  async deleteClinic(id: string): Promise<boolean> {
    try {
      await this.context.prisma.clinic.delete({ where: { id } });
      return true;
    } catch (e) {
      throw new ApolloError(e);
    }
  }
}

export default ClinicProvider;
