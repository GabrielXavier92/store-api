import { Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { User } from 'global';

const prisma = new PrismaClient({
  log: ['info', 'warn', 'error'],
});

export interface ISession {
  req: Request;
}

async function createContext(session: ISession): Promise<GraphQLModules.GlobalContext> {
  // const authToken = session.req.headers.authorization;
  // console.log(authToken);
  /*
  TODO
  Usar o decode do authToken para extrair as informacoes do usuario.
  */
  const user: User = {
    id: '12dasdasda',
    clinics: [{ id: '12312qsd', ownerId: '12dasdasda', role: 'ADMIN' }],
  };

  return {
    req: session.req,
    user,
    prisma,
  };
}

export default createContext;
