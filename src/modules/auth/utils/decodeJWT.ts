import * as jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-errors';

import { User } from '../../../global';

const decodeJWT = async (token: string): Promise<User> => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET as string);

    const { id, stores } = decoded as User;
    return {
      id,
      stores,
    };
  } catch (e) {
    throw new AuthenticationError('Invalid Token');
  }
};

export default decodeJWT;
