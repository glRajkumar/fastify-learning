const {
    getItemsOpts,
    getItemOpts,
    postItemOpts,
    updateItemOpts,
    deleteItemOpts,
} = require('../schemas/items')
const {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
} = require('../controllers/items')

function itemRoutes(fastify, options, done) {
    // Get all items
    fastify.get('/', getItemsOpts, getItems)

    // Get single items
    fastify.get('/:id', getItemOpts, getItem)

    // Add item
    fastify.post('/', postItemOpts, addItem)

    // Update item
    fastify.put('/:id', updateItemOpts, updateItem)

    // Delete item
    fastify.delete('/:id', deleteItemOpts, deleteItem)

    done()
}

module.exports = itemRoutes
