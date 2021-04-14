import { AuthModule } from '../types';
import { AuthProvider } from '../providers';

import UserSchema from '../schemas/user';

const MutationResolver: AuthModule.Resolvers = {
  Mutation: {
    signIn(_, { signInInput }, { injector }: GraphQLModules.Context) {
      return injector.get(AuthProvider).logIn(signInInput);
    },
    signUp(_, { signUpInput }, { injector }: GraphQLModules.Context) {
      return injector.get(AuthProvider).createUser(signUpInput);
    },
    async mongoTeste(_, { signUpInput }) {
      const { password, email, fullName } = signUpInput;
      const user = await UserSchema.create({ password, email, fullName });
      return !!user;
    },
  },
};

export default MutationResolver;
