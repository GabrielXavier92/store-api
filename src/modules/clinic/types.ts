/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace ClinicModule {
  interface DefinedFields {
    Query: 'clinic' | 'clinics';
    Mutation: 'createClinic' | 'updateClinic' | 'deleteClinic';
    CreatedClinic: 'clinic' | 'token';
    Clinic: 'id' | 'name' | 'country' | 'state' | 'city' | 'address' | 'number' | 'complement' | 'plan';
  };
  
  interface DefinedInputFields {
    ClinicInput: 'name' | 'country' | 'state' | 'city' | 'address' | 'number' | 'complement' | 'plan';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Clinic = Pick<Types.Clinic, DefinedFields['Clinic']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type CreatedClinic = Pick<Types.CreatedClinic, DefinedFields['CreatedClinic']>;
  export type ClinicInput = Pick<Types.ClinicInput, DefinedInputFields['ClinicInput']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type CreatedClinicResolvers = Pick<Types.CreatedClinicResolvers, DefinedFields['CreatedClinic'] | '__isTypeOf'>;
  export type ClinicResolvers = Pick<Types.ClinicResolvers, DefinedFields['Clinic'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    CreatedClinic?: CreatedClinicResolvers;
    Clinic?: ClinicResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      clinic?: gm.Middleware[];
      clinics?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createClinic?: gm.Middleware[];
      updateClinic?: gm.Middleware[];
      deleteClinic?: gm.Middleware[];
    };
    CreatedClinic?: {
      '*'?: gm.Middleware[];
      clinic?: gm.Middleware[];
      token?: gm.Middleware[];
    };
    Clinic?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      country?: gm.Middleware[];
      state?: gm.Middleware[];
      city?: gm.Middleware[];
      address?: gm.Middleware[];
      number?: gm.Middleware[];
      complement?: gm.Middleware[];
      plan?: gm.Middleware[];
    };
  };
}