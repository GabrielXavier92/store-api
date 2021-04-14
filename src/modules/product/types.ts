/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace ProductModule {
  interface DefinedFields {
    Query: 'product' | 'products' | 'category' | 'categorys';
    Mutation: 'createProduct' | 'updateProduct' | 'deleteProduct' | 'createCategory' | 'updateCategory' | 'deleteCategory';
    Product: 'id' | 'name' | 'description' | 'value' | 'weight' | 'category';
    Category: 'id' | 'name' | 'description';
  };
  
  interface DefinedInputFields {
    ProductInput: 'name' | 'description' | 'value' | 'weight' | 'categoryId' | 'storeId';
    CategoryInput: 'storeId' | 'name' | 'description';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Product = Pick<Types.Product, DefinedFields['Product']>;
  export type Category = Pick<Types.Category, DefinedFields['Category']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type ProductInput = Pick<Types.ProductInput, DefinedInputFields['ProductInput']>;
  export type CategoryInput = Pick<Types.CategoryInput, DefinedInputFields['CategoryInput']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type ProductResolvers = Pick<Types.ProductResolvers, DefinedFields['Product'] | '__isTypeOf'>;
  export type CategoryResolvers = Pick<Types.CategoryResolvers, DefinedFields['Category'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Product?: ProductResolvers;
    Category?: CategoryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      product?: gm.Middleware[];
      products?: gm.Middleware[];
      category?: gm.Middleware[];
      categorys?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createProduct?: gm.Middleware[];
      updateProduct?: gm.Middleware[];
      deleteProduct?: gm.Middleware[];
      createCategory?: gm.Middleware[];
      updateCategory?: gm.Middleware[];
      deleteCategory?: gm.Middleware[];
    };
    Product?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
      value?: gm.Middleware[];
      weight?: gm.Middleware[];
      category?: gm.Middleware[];
    };
    Category?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
    };
  };
}