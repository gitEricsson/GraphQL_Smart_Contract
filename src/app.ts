import express from 'express';
import cors from 'cors';
import { schema } from './schema/schema';
import { resolvers } from './resolvers/resolvers';
import { createHandler } from 'graphql-http/lib/use/express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

app.use(
  '/graphql',
  createHandler({
    schema,
    rootValue: resolvers,
  })
);

export default app;
