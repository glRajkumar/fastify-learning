const fastify = require('fastify')

const app = fastify({ logger: true })

app.register(require('./routes/items'), { prefix: '/items' })
app.register(require('./routes/todos'), { prefix: '/todos' })

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
