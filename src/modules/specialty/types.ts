/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace SpecialtyModule {
  interface DefinedFields {
    Query: 'specialty';
    Specialty: 'id' | 'name' | 'code';
    Doctor: 'specialties';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Specialty = Pick<Types.Specialty, DefinedFields['Specialty']>;
  export type Doctor = Types.Doctor;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type SpecialtyResolvers = Pick<Types.SpecialtyResolvers, DefinedFields['Specialty'] | '__isTypeOf'>;
  export type DoctorResolvers = Pick<Types.DoctorResolvers, DefinedFields['Doctor']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Specialty?: SpecialtyResolvers;
    Doctor?: DoctorResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      specialty?: gm.Middleware[];
    };
    Doctor?: {
      '*'?: gm.Middleware[];
      specialties?: gm.Middleware[];
    };
    Specialty?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      code?: gm.Middleware[];
    };
  };
}