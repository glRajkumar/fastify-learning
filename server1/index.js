const fastify = require('fastify')
const third = require('./third')

const app = fastify({ logger: true })

app.get('/v1', async function (req, reply) {
    return { msg: "Hello world" }
})

app.post('/v1', async function (req, reply) {
    let { name } = req.body
    return { msg: `Your name is ${name} and your the top coder in the world` }
})

app.register(require('./first'))
app.register(require('./second'))
third.forEach(route => app.route(route))

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
