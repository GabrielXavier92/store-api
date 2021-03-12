import 'reflect-metadata';

import { createApplication } from 'graphql-modules';
import { ApolloServer } from 'apollo-server';

import DoctorModule from './modules/doctor';
import AuthModule from './modules/auth';
import Specialty from './modules/specialty';

import createContext from './context';

const application = createApplication({
  modules: [DoctorModule, Specialty, AuthModule],
});

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
  schema,
  context: createContext,
});

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
