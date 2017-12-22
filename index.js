import http from 'http'
import path from 'path'
import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

import models from './models'

const port = process.env.PORT || 4000
const DB = 'mongodb://jarl:jarl@ds157653.mlab.com:57653/codesnip'

mongoose.Promise = global.Promise

const server = http.createServer()
const app = express()

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: { models }
}))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

server.on('request', app)

mongoose.connect(DB, {useMongoClient: true})
.then(
  () => {
    console.log('Conectado a Mongo!!!!')
    server.listen(port, () => {
      console.log(`Servidor en el puerto ${port}`)
    })
  }
)
