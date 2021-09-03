const fastify = require('fastify')
const envOptions = require('./schema/env')
const connectDb = require('./plugins/connectDb')

const app = fastify()
// { logger: true }

connectDb()

app
  .register(require('fastify-env'), envOptions)
  .register(require('./plugins/auth'))
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