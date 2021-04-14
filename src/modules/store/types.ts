/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace StoreModule {
  interface DefinedFields {
    Query: 'store' | 'stores';
    Mutation: 'createStore' | 'updateStore';
    CreatedStore: 'store' | 'token';
    Store: 'id' | 'storeName' | 'zipCode' | 'country' | 'state' | 'city' | 'address' | 'number' | 'complement' | 'plan';
  };
  
  interface DefinedInputFields {
    StoreInput: 'storeName' | 'zipCode' | 'country' | 'state' | 'city' | 'address' | 'number' | 'complement' | 'plan';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Store = Pick<Types.Store, DefinedFields['Store']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type CreatedStore = Pick<Types.CreatedStore, DefinedFields['CreatedStore']>;
  export type StoreInput = Pick<Types.StoreInput, DefinedInputFields['StoreInput']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type CreatedStoreResolvers = Pick<Types.CreatedStoreResolvers, DefinedFields['CreatedStore'] | '__isTypeOf'>;
  export type StoreResolvers = Pick<Types.StoreResolvers, DefinedFields['Store'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    CreatedStore?: CreatedStoreResolvers;
    Store?: StoreResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      store?: gm.Middleware[];
      stores?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createStore?: gm.Middleware[];
      updateStore?: gm.Middleware[];
    };
    CreatedStore?: {
      '*'?: gm.Middleware[];
      store?: gm.Middleware[];
      token?: gm.Middleware[];
    };
    Store?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      storeName?: gm.Middleware[];
      zipCode?: gm.Middleware[];
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