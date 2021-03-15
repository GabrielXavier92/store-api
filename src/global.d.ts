import { Request } from 'express';
import { PrismaClient } from '@prisma/client';

export {};

export interface User {
  id: string;
  clinics: Clinics[];
}

export interface Clinics {
  id: string;
  ownerId: string;
  role: string;
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
