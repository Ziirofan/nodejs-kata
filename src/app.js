import express from 'express'
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { resolvers } from './resolver.js';

export const app = async () => {
  mongoose.connect(process.env.MONGOURI);
  mongoose.connection.once('open', () => {
      console.log('Connected to databases');
  });

  const root = { status: () => 'Online' };

  const app = express();
  app.use(express.json())

  const schema = makeExecutableSchema({
      typeDefs: loadSchemaSync('./**/*.graphql', {
        loaders: [new GraphQLFileLoader()],
      }),
      resolvers: resolvers,
    });


  app.use((error, req, res, next) => {
    const errM = {
      status: error.status,
      message: error.message,
      stack: error.stack
    }
    console.error(errM)
    res.status(error.status || 500)
    res.json(errM)
  })

  app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    }));
    app.listen(process.env.PORT, () => console.log(`Now browse to localhost:${process.env.PORT}/graphql`));
}
