/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createProduct: Product;
  createPurchase: Purchase;
  createStore: CreatedStore;
  deleteCategory?: Maybe<Scalars['Boolean']>;
  deleteProduct?: Maybe<Scalars['Boolean']>;
  signIn?: Maybe<Auth>;
  signUp?: Maybe<Auth>;
  updateCategory: Category;
  updateProduct: Product;
  updateStore: Store;
};


export type MutationCreateCategoryArgs = {
  categoryInput: CategoryInput;
};


export type MutationCreateProductArgs = {
  productInput: ProductInput;
};


export type MutationCreatePurchaseArgs = {
  purchaseInput: PurchaseInput;
};


export type MutationCreateStoreArgs = {
  storeInput: StoreInput;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['ID'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['ID'];
  categoryInput: CategoryInput;
};


export type MutationUpdateProductArgs = {
  productId: Scalars['ID'];
  productInput: ProductInput;
};


export type MutationUpdateStoreArgs = {
  id: Scalars['ID'];
  storeInput: StoreInput;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  category: Category;
  categorys: Array<Category>;
  product: Product;
  products: Array<Product>;
  purchase: Purchase;
  purchases: Array<Purchase>;
  store: Store;
  stores?: Maybe<Array<Maybe<Store>>>;
};


export type QueryCategoryArgs = {
  categoryId: Scalars['ID'];
};


export type QueryCategorysArgs = {
  storeId: Scalars['ID'];
};


export type QueryProductArgs = {
  productId: Scalars['ID'];
};


export type QueryProductsArgs = {
  storeId: Scalars['ID'];
};


export type QueryPurchaseArgs = {
  purchaseId: Scalars['ID'];
};


export type QueryPurchasesArgs = {
  storeId: Scalars['ID'];
};


export type QueryStoreArgs = {
  storeId: Scalars['ID'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  value: Scalars['Float'];
  weight: Scalars['Float'];
  category?: Maybe<Category>;
};

export type ProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  value: Scalars['Float'];
  weight: Scalars['Float'];
  categoryId: Scalars['ID'];
  storeId: Scalars['ID'];
};

export type CategoryInput = {
  storeId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Purchase = {
  __typename?: 'Purchase';
  id: Scalars['ID'];
  total: Scalars['Float'];
  paymentForm: Scalars['String'];
};

export type PurchaseInput = {
  products: Array<PurchaseProductInput>;
  total: Scalars['Float'];
  paymentForm: Scalars['String'];
  store: PurchaseStoreInput;
  buyerData?: Maybe<PurchaseBuyerDataInput>;
};

export type PurchaseProductInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  value: Scalars['Float'];
  quantity: Scalars['Float'];
};

export type PurchaseStoreInput = {
  id: Scalars['ID'];
  storeName: Scalars['String'];
  displayName: Scalars['String'];
  zipCode: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  address: Scalars['String'];
  number: Scalars['Int'];
  complement?: Maybe<Scalars['String']>;
};

export type PurchaseBuyerDataInput = {
  name: Scalars['String'];
  celphone: Scalars['String'];
  zipCode: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  address: Scalars['String'];
  number: Scalars['Int'];
  complement?: Maybe<Scalars['String']>;
};

export type CreatedStore = {
  __typename?: 'CreatedStore';
  store: Store;
  token: Scalars['String'];
};

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  storeName: Scalars['String'];
  displayName: Scalars['String'];
  zipCode: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  address: Scalars['String'];
  number: Scalars['Int'];
  complement?: Maybe<Scalars['String']>;
  plan: Scalars['String'];
};

export type StoreInput = {
  storeName: Scalars['String'];
  displayName: Scalars['String'];
  zipCode: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  address: Scalars['String'];
  number: Scalars['Int'];
  complement?: Maybe<Scalars['String']>;
  plan: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Auth: ResolverTypeWrapper<Auth>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SignInInput: SignInInput;
  SignUpInput: SignUpInput;
  Query: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ProductInput: ProductInput;
  CategoryInput: CategoryInput;
  Category: ResolverTypeWrapper<Category>;
  Purchase: ResolverTypeWrapper<Purchase>;
  PurchaseInput: PurchaseInput;
  PurchaseProductInput: PurchaseProductInput;
  PurchaseStoreInput: PurchaseStoreInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PurchaseBuyerDataInput: PurchaseBuyerDataInput;
  CreatedStore: ResolverTypeWrapper<CreatedStore>;
  Store: ResolverTypeWrapper<Store>;
  StoreInput: StoreInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {};
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Auth: Auth;
  String: Scalars['String'];
  SignInInput: SignInInput;
  SignUpInput: SignUpInput;
  Query: {};
  Product: Product;
  Float: Scalars['Float'];
  ProductInput: ProductInput;
  CategoryInput: CategoryInput;
  Category: Category;
  Purchase: Purchase;
  PurchaseInput: PurchaseInput;
  PurchaseProductInput: PurchaseProductInput;
  PurchaseStoreInput: PurchaseStoreInput;
  Int: Scalars['Int'];
  PurchaseBuyerDataInput: PurchaseBuyerDataInput;
  CreatedStore: CreatedStore;
  Store: Store;
  StoreInput: StoreInput;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'categoryInput'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'productInput'>>;
  createPurchase?: Resolver<ResolversTypes['Purchase'], ParentType, ContextType, RequireFields<MutationCreatePurchaseArgs, 'purchaseInput'>>;
  createStore?: Resolver<ResolversTypes['CreatedStore'], ParentType, ContextType, RequireFields<MutationCreateStoreArgs, 'storeInput'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'categoryId'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'productId'>>;
  signIn?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'signInInput'>>;
  signUp?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationSignUpArgs, 'signUpInput'>>;
  updateCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'categoryId' | 'categoryInput'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'productId' | 'productInput'>>;
  updateStore?: Resolver<ResolversTypes['Store'], ParentType, ContextType, RequireFields<MutationUpdateStoreArgs, 'id' | 'storeInput'>>;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<QueryCategoryArgs, 'categoryId'>>;
  categorys?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategorysArgs, 'storeId'>>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductArgs, 'productId'>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'storeId'>>;
  purchase?: Resolver<ResolversTypes['Purchase'], ParentType, ContextType, RequireFields<QueryPurchaseArgs, 'purchaseId'>>;
  purchases?: Resolver<Array<ResolversTypes['Purchase']>, ParentType, ContextType, RequireFields<QueryPurchasesArgs, 'storeId'>>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType, RequireFields<QueryStoreArgs, 'storeId'>>;
  stores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PurchaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Purchase'] = ResolversParentTypes['Purchase']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  paymentForm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatedStoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatedStore'] = ResolversParentTypes['CreatedStore']> = {
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  storeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  complement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plan?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Purchase?: PurchaseResolvers<ContextType>;
  CreatedStore?: CreatedStoreResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
