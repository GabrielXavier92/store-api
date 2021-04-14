import { Request } from 'express';
import { PrismaClient } from '@prisma/client';

export {};

export interface User {
  id: string;
}

export interface Clinics {
  role: string;
  userId: string;
  clinicId: string;
  createdAt: string;
  updatedAt: string;
}
declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      req: Request;
      prisma: PrismaClient;
      user?: User;
    }
  }
}
