// Item schema
const Item = {
    type: 'object',
    properties: {
        id: { type: 'string' }, // 'number'
        name: { type: 'string' },
        value: { type: 'number' }
        // if we don't have any field, we will not receive the field in response
    },
}

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            },
            404: {
                type: 'object',
                properties: {
                    msg: { type: 'string' }
                }
            }
        },
    }
}

const getItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    }
}

const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'value'],
            properties: {
                name: { type: 'string' },
                value: { type: 'number' },
            },
        },
        response: {
            201: Item,
        },
    }
}

// if you want, you can use getItemOpts also
const updateItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    }
}

const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                },
            },
        },
    }
}

module.exports = {
    getItemsOpts,
    getItemOpts,
    postItemOpts,
    updateItemOpts,
    deleteItemOpts,
}