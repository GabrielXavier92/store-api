import { UserInputError } from 'apollo-server-errors';
import { Injectable } from 'graphql-modules';
import { AuthModule } from '../types';

@Injectable()
export class AuthProvider {
  user: [AuthModule.SignUpInput] = [{ email: 'a', password: 'b' }];

  createUser(data: AuthModule.SignUpInput): AuthModule.Auth {
    const { email } = data;

    const user = this.user.find((user) => user.email === email);
    if (user) throw new UserInputError('Failed to create account');

    this.user.push(data);

    return {
      token: 'createUserToken',
    };
  }

  logIn(data: AuthModule.SignInInput): AuthModule.Auth {
    const { email, password } = data;
    const user = this.user.find((user) => user.email === email);

    if (!user || user.password !== password) throw new UserInputError('Failed to login');
    /* TODO
      injetar provider CLINIC e inserir as clinics/roles que o User pertence
      colocar isso no token e retornar para o usuario 
    */

    return {
      token: 'logInToken',
    };
  }
}

export default AuthProvider;
