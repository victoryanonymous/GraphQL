const express = require("express");
const resolver = require("./resolvers");
const schema = require("./schemas");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.get("/", (req, res) => {
  res.send("Running with graphql");
});

// const root = {lco: ()=> console.log('Learning')}
const root = resolver;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log(`running on 8080`);
});
