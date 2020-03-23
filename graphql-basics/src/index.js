const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    test: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
  test: () => {
    return "this is a test";
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

// import { GraphQLServer } from "graphql-yoga";

// // Type definitions (Schema)
// const typeDefs = `
//   type Query {
//     hello: String!
//     name: String!
//     learn: String!
//   }
// `;

// const getUserName = () => "Ernst Pierre";
// const sayHello = () => "Hello GraphQL";
// const anotherTest = () => "This is how u learn";

// // Resolvers
// const resolvers = {
//   Query: {
//     hello: sayHello,
//     name: getUserName,
//     learn: anotherTest
//   }
// };

// const server = new GraphQLServer({ typeDefs, resolvers });
// server.start(() => console.log("Server is running on localhost:4000"));
