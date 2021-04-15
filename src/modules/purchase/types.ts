/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace PurchaseModule {
  interface DefinedFields {
    Query: 'purchase' | 'purchases';
    Mutation: 'createPurchase';
    Purchase: 'id' | 'total' | 'paymentForm';
  };
  
  interface DefinedInputFields {
    PurchaseInput: 'products' | 'total' | 'paymentForm' | 'store' | 'buyerData';
    PurchaseProductInput: 'id' | 'name' | 'description' | 'value' | 'quantity';
    PurchaseStoreInput: 'id' | 'storeName' | 'displayName' | 'zipCode' | 'country' | 'state' | 'city' | 'address' | 'number' | 'complement';
    PurchaseBuyerDataInput: 'name' | 'celphone' | 'zipCode' | 'country' | 'state' | 'city' | 'address' | 'number' | 'complement';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Purchase = Pick<Types.Purchase, DefinedFields['Purchase']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type PurchaseInput = Pick<Types.PurchaseInput, DefinedInputFields['PurchaseInput']>;
  export type PurchaseProductInput = Pick<Types.PurchaseProductInput, DefinedInputFields['PurchaseProductInput']>;
  export type PurchaseStoreInput = Pick<Types.PurchaseStoreInput, DefinedInputFields['PurchaseStoreInput']>;
  export type PurchaseBuyerDataInput = Pick<Types.PurchaseBuyerDataInput, DefinedInputFields['PurchaseBuyerDataInput']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type PurchaseResolvers = Pick<Types.PurchaseResolvers, DefinedFields['Purchase'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Purchase?: PurchaseResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      purchase?: gm.Middleware[];
      purchases?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createPurchase?: gm.Middleware[];
    };
    Purchase?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      total?: gm.Middleware[];
      paymentForm?: gm.Middleware[];
    };
  };
}