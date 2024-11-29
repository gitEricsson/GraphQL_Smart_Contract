import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    getCounter: String
    getUsers: [User]
  }

  type Mutation {
    incrementCounter: String
    addUser(name: String!, email: String!): User
  }

  type User {
    id: ID
    name: String
    email: String
  }
`);
