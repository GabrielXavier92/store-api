import { AuthModule } from '../types';
import { AuthProvider } from '../providers';

const MutationResolver: AuthModule.Resolvers = {
  Mutation: {
    signIn(_, { signInInput }, { injector }: GraphQLModules.Context) {
      return injector.get(AuthProvider).logIn(signInInput);
    },
    signUp(_, { signUpInput }, { injector }: GraphQLModules.Context) {
      return injector.get(AuthProvider).createUser(signUpInput);
    },
  },
};

export default MutationResolver;
