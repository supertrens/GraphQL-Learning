import express from "express";
import graphqlHTTP from "express-graphql";

import { schema } from "./data/schema";
import { mongoose } from "./data/mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
