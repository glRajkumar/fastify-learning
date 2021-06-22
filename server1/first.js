async function first(fastify, options, done) {
    fastify.get('/v2', async function () {
        return { msg: "Hello world" }
    })

    fastify.post('/v2', async function (req, reply) {
        let { name } = req.body
        return { msg: `Your name is ${name} and your the top coder in the world` }
    })

    done()
}

module.exports = first