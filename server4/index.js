const fastify = require('fastify')
const fp = require('fastify-plugin')

const envOptions = require('./schema/env')
// const connectDb = require('./plugins/connectDb')

const app = fastify()
// { logger: true }

// connectDb()

async function dbConnector(fastify, opts) {
  fastify.register(require('fastify-mongodb'), {
    url: 'mongodb://localhost:27017/test1'
  })
}

async function authenticator(fastify) {
  fastify.register(require('fastify-jwt'), {
    secret: fastify.config.jwtSecretKey
  })
}

app
  .register(require('fastify-env'), envOptions)
  .register(require('fastify-cors'))
  .register(fp(dbConnector))
  .register(fp(authenticator))
  .register(fp(require('./plugins/auth')))
  // apis
  .register(require('./routes/user'), { prefix: '/users' })
  .register(require('./routes/todo'), { prefix: '/todos' })

async function start() {
  try {
    let address = await app.listen(3000)
    app.log.info(`Server is running at ${address}`)

  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()