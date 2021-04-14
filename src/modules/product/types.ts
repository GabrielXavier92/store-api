/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace ProductModule {
  interface DefinedFields {
    Query: 'product' | 'products';
    Mutation: 'createProduct' | 'updateProduct' | 'deleteProduct';
    Product: 'id' | 'name' | 'description' | 'value' | 'weight';
  };
  
  interface DefinedInputFields {
    ProductInput: 'name' | 'description' | 'value' | 'weight' | 'categoryId' | 'storeId';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Product = Pick<Types.Product, DefinedFields['Product']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type ProductInput = Pick<Types.ProductInput, DefinedInputFields['ProductInput']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type ProductResolvers = Pick<Types.ProductResolvers, DefinedFields['Product'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Product?: ProductResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      product?: gm.Middleware[];
      products?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createProduct?: gm.Middleware[];
      updateProduct?: gm.Middleware[];
      deleteProduct?: gm.Middleware[];
    };
    Product?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
      value?: gm.Middleware[];
      weight?: gm.Middleware[];
    };
  };
}