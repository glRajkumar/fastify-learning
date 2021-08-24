// Todos schema
const Todos = {
    type: 'object',
    properties: {
        id: { type: 'string' }, // 'number'
        title: { type: 'string' },
        description: { type: 'string' },
        archived: { type: 'boolean' }
    }
}

const idParam = {
    type: 'object',
    properties: {
        id: { type: 'string' },
    }
}

const getAllTodosOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Todos,
            }
        },
        querystring: {
            start: { type: 'string' },
            end: { type: 'string' }
        }
    }
}

const getTodoOpts = {
    schema: {
        params: idParam,
        response: {
            200: Todos,
            404: {
                type: 'object',
                properties: {
                    msg: { type: 'string' }
                }
            }
        },
    }
}

const addTodoOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['title', 'description'],
            properties: {
                title: { type: 'string' },
                description: { type: 'string' },
            },
        },
        response: {
            201: Todos,
        },
    }
}

const updateTodoOpts = {
    schema: {
        params: idParam,
        body: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                description: { type: 'string' },
            },
        },
        response: {
            201: Todos,
        },
    }
}

const archiveTodoOpts = {
    schema: {
        params: idParam,
        response: {
            201: Todos,
        },
    }
}

const delTodoOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                },
            }
        },
        params: idParam
    }
}

module.exports = {
    getAllTodosOpts,
    getTodoOpts,
    addTodoOpts,
    updateTodoOpts,
    archiveTodoOpts,
    delTodoOpts
}