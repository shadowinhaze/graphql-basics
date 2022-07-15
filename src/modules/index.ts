import 'reflect-metadata';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { resolvers } from './resolversMap';
import { typeDefs } from './schemasMap';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
