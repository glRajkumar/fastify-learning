async function getHandler() {
    return { msg: "Hello world" }
}

async function postHandler(req, reply) {
    let { name } = req.body
    return { msg: `Your name is ${name} and your the top coder in the world` }
}

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

const third = [
    {
        method: 'GET',
        url: '/v4',
        schema: getOpts,
        handler: getHandler
    },
    {
        method: 'POST',
        url: '/v4',
        handler: postHandler
    }
]

module.exports = third