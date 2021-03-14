/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace ClinicModule {
  interface DefinedFields {
    Query: 'clinic' | 'clinics';
    Mutation: 'createClinic' | 'updateClinic' | 'deleteClinic';
    Clinic: 'id' | 'ownerId' | 'name' | 'country' | 'state' | 'address' | 'number' | 'complement' | 'plan';
  };
  
  interface DefinedEnumValues {
    ClinicPlan: 'STARTER';
  };
  
  interface DefinedInputFields {
    ClinicInput: 'ownerId' | 'name' | 'country' | 'state' | 'address' | 'number' | 'complement' | 'plan';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Clinic = Pick<Types.Clinic, DefinedFields['Clinic']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type ClinicInput = Pick<Types.ClinicInput, DefinedInputFields['ClinicInput']>;
  export type ClinicPlan = DefinedEnumValues['ClinicPlan'];
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type ClinicResolvers = Pick<Types.ClinicResolvers, DefinedFields['Clinic'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
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
    Clinic?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      ownerId?: gm.Middleware[];
      name?: gm.Middleware[];
      country?: gm.Middleware[];
      state?: gm.Middleware[];
      address?: gm.Middleware[];
      number?: gm.Middleware[];
      complement?: gm.Middleware[];
      plan?: gm.Middleware[];
    };
  };
}