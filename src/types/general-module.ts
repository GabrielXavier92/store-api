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
  createClinic: CreatedClinic;
  deleteClinic?: Maybe<Scalars['Boolean']>;
  mongoTeste?: Maybe<Scalars['Boolean']>;
  signIn?: Maybe<Auth>;
  signUp?: Maybe<Auth>;
  updateClinic: Clinic;
};


export type MutationCreateClinicArgs = {
  clinicInput: ClinicInput;
};


export type MutationDeleteClinicArgs = {
  id: Scalars['ID'];
};


export type MutationMongoTesteArgs = {
  signUpInput: SignUpInput;
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateClinicArgs = {
  id: Scalars['ID'];
  clinicInput: ClinicInput;
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
  fullName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  clinic: Clinic;
  clinics?: Maybe<Array<Maybe<Clinic>>>;
  doctor?: Maybe<Doctor>;
  specialty?: Maybe<Specialty>;
};


export type QueryClinicArgs = {
  id: Scalars['ID'];
};


export type QueryDoctorArgs = {
  id: Scalars['ID'];
};


export type QuerySpecialtyArgs = {
  id: Scalars['ID'];
};

export type CreatedClinic = {
  __typename?: 'CreatedClinic';
  clinic: Clinic;
  token: Scalars['String'];
};

export type Clinic = {
  __typename?: 'Clinic';
  id: Scalars['ID'];
  name: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  complement?: Maybe<Scalars['String']>;
  plan: Scalars['String'];
};

export type ClinicInput = {
  name: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  complement?: Maybe<Scalars['String']>;
  plan: Scalars['String'];
};

export type Doctor = {
  __typename?: 'Doctor';
  id: Scalars['ID'];
  name: Scalars['String'];
  specialties?: Maybe<Array<Maybe<Specialty>>>;
};

export type Specialty = {
  __typename?: 'Specialty';
  id: Scalars['ID'];
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
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
  CreatedClinic: ResolverTypeWrapper<CreatedClinic>;
  Clinic: ResolverTypeWrapper<Clinic>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ClinicInput: ClinicInput;
  Doctor: ResolverTypeWrapper<Doctor>;
  Specialty: ResolverTypeWrapper<Specialty>;
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
  CreatedClinic: CreatedClinic;
  Clinic: Clinic;
  Int: Scalars['Int'];
  ClinicInput: ClinicInput;
  Doctor: Doctor;
  Specialty: Specialty;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createClinic?: Resolver<ResolversTypes['CreatedClinic'], ParentType, ContextType, RequireFields<MutationCreateClinicArgs, 'clinicInput'>>;
  deleteClinic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteClinicArgs, 'id'>>;
  mongoTeste?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationMongoTesteArgs, 'signUpInput'>>;
  signIn?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'signInInput'>>;
  signUp?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationSignUpArgs, 'signUpInput'>>;
  updateClinic?: Resolver<ResolversTypes['Clinic'], ParentType, ContextType, RequireFields<MutationUpdateClinicArgs, 'id' | 'clinicInput'>>;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  clinic?: Resolver<ResolversTypes['Clinic'], ParentType, ContextType, RequireFields<QueryClinicArgs, 'id'>>;
  clinics?: Resolver<Maybe<Array<Maybe<ResolversTypes['Clinic']>>>, ParentType, ContextType>;
  doctor?: Resolver<Maybe<ResolversTypes['Doctor']>, ParentType, ContextType, RequireFields<QueryDoctorArgs, 'id'>>;
  specialty?: Resolver<Maybe<ResolversTypes['Specialty']>, ParentType, ContextType, RequireFields<QuerySpecialtyArgs, 'id'>>;
};

export type CreatedClinicResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatedClinic'] = ResolversParentTypes['CreatedClinic']> = {
  clinic?: Resolver<ResolversTypes['Clinic'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClinicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clinic'] = ResolversParentTypes['Clinic']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  complement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plan?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DoctorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Doctor'] = ResolversParentTypes['Doctor']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specialties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Specialty']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecialtyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Specialty'] = ResolversParentTypes['Specialty']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  CreatedClinic?: CreatedClinicResolvers<ContextType>;
  Clinic?: ClinicResolvers<ContextType>;
  Doctor?: DoctorResolvers<ContextType>;
  Specialty?: SpecialtyResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
