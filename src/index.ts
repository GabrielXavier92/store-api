import 'reflect-metadata';
import 'graphql-import-node';

import { ApolloServer } from 'apollo-server';

import application from './modules';
import createContext from './context';

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
  schema,
  context: createContext,
});

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
