import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schema";
import resolvers from "./resolvers";

const app = express();
const root = resolvers;

app.get("/", (req, res) => {
  res.send("GraphQL is amazing");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
    pretty: true
  })
);
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
