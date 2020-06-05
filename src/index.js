const { ApolloServer } = require("apollo-server");

const typeDefs = require("./types/Podcast");
const connectDb = require("./config/db");

connectDb();

const createPodcast = require("./resolvers/mutations/createPodcast");

const resolvers = require("./resolvers");

const models = require("./models");

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: {models}
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});