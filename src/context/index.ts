import { Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { DecodeJWT } from '../modules/auth/utils';

const prisma = new PrismaClient({
  log: ['info', 'warn', 'error'],
  rejectOnNotFound: true,
});

export interface ISession {
  req: Request;
}

async function createContext(session: ISession): Promise<GraphQLModules.GlobalContext> {
  const authToken = session.req.headers.authorization;

  if (authToken) {
    const user = await DecodeJWT(authToken);
    return {
      req: session.req,
      user,
      prisma,
    };
  }

  return {
    req: session.req,
    prisma,
  };
}

export default createContext;
