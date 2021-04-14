/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace AuthModule {
  interface DefinedFields {
    Mutation: 'signIn' | 'signUp' | 'mongoTeste';
    Auth: 'token';
  };
  
  interface DefinedInputFields {
    SignInInput: 'email' | 'password';
    SignUpInput: 'fullName' | 'email' | 'password';
  };
  
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Auth = Pick<Types.Auth, DefinedFields['Auth']>;
  export type SignInInput = Pick<Types.SignInInput, DefinedInputFields['SignInInput']>;
  export type SignUpInput = Pick<Types.SignUpInput, DefinedInputFields['SignUpInput']>;
  
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type AuthResolvers = Pick<Types.AuthResolvers, DefinedFields['Auth'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Mutation?: MutationResolvers;
    Auth?: AuthResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      signIn?: gm.Middleware[];
      signUp?: gm.Middleware[];
      mongoTeste?: gm.Middleware[];
    };
    Auth?: {
      '*'?: gm.Middleware[];
      token?: gm.Middleware[];
    };
  };
}