import { Request } from 'express';

export interface ISession {
  req: Request;
}

export interface Context {
  user?: {
    id: string;
    name: string;
  };
}

async function createContext(_: ISession): Promise<Context> {
  // const authToken = session.req.headers.authorization;
  // Todo
  // Decode token and inject user information in context

  // console.log(authToken);
  const user = {
    id: 'userId',
    name: 'userName',
  };
  return {
    user,
  };
}

export default createContext;
