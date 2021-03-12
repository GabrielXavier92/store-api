/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace DoctorModule {
  interface DefinedFields {
    Query: 'doctor';
    Doctor: 'id' | 'name';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Doctor = Pick<Types.Doctor, DefinedFields['Doctor']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type DoctorResolvers = Pick<Types.DoctorResolvers, DefinedFields['Doctor'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Doctor?: DoctorResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      doctor?: gm.Middleware[];
    };
    Doctor?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
    };
  };
}