import { createServer } from 'http';
import 'dotenv/config';

import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import { schema } from './modules';

const port = Number(process.env.PORT);

async function startApolloServer(_port: number): Promise<void> {
  const app = express();
  app.use(cors());

  const httpServer = createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  return new Promise((resolve, reject) => {
    httpServer.listen(_port).once('listening', resolve).once('error', reject);
  });
}

async function main(): Promise<void> {
  try {
    await startApolloServer(port);
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  } catch (err) {
    console.error('💀 Error starting the node server', err);
  }
}

main();
