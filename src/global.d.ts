import { Request } from 'express';
import { PrismaClient } from '@prisma/client';

export {};

export interface User {
  id: string;
  stores: Store[];
}

export interface Store {
  role: string;
  userId: string;
  storeId: string;
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
