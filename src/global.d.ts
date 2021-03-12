import { Request } from 'express';

export {};

declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      req: Request;
      user?: {
        id?: string;
        name?: string;
      };
    }
  }
}
