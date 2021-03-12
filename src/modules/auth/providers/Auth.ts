import { Injectable } from 'graphql-modules';
import { AuthModule } from '../types';

@Injectable()
export class AuthProvider {
  user = [];

  createUser(data: AuthModule.SignUpInput): AuthModule.Auth {
    const { fullName, email, password } = data;
    console.log(fullName, email, password);
    return {
      token: 'asdadasad',
    };
  }

  logIn(data: AuthModule.SignInInput): AuthModule.Auth {
    console.log(data);
    return {
      token: 'asdasdad',
    };
  }
}

export default AuthProvider;
