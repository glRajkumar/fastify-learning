const msgType = {
    type: 'object',
    properties: {
        msg: { type: 'string' }
    }
}

const getOpts = {
    schema: {
        response: {
            200: msgType,
        },
    }
}

const postOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' },
            },
        },
        response: {
            200: msgType,
        },
    }
}

const postOpts2 = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' },
            },
        },
        response: {
            200: msgType,
        },
    },
    handler: async function (req, reply) {
        let { name } = req.body
        return { msg: `Your name is ${name} and your the top coder in the world` }
    },
}


async function second(fastify, options, done) {
    fastify.get('/v3', getOpts, async function () {
        return { msg: "Hello world" }
    })

    fastify.post('/v3', postOpts, async function (req, reply) {
        let { name } = req.body
        return { msg: `Your name is ${name} and your the top coder in the world` }
    })

    fastify.post('/v3/post2', postOpts2)

    done()
}

module.exports = second