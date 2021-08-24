let items = require('../helpers/items')

const getItems = (req, reply) => {
    reply.send(items)
}

const getItem = (req, reply) => {
    const { id } = req.params
    const item = items.find((item) => item.id === id)

    if (item) return reply.code(200).send(item)
    return reply.code(404).send({ msg: "No item found" })
}

const addItem = (req, reply) => {
    const { name, value } = req.body
    const item = {
        id: Date.now(),
        name,
        value
    }

    items = [...items, item]
    reply.code(201).send(item)
}

const updateItem = (req, reply) => {
    const { id } = req.params
    // const { name, value } = req.body

    items = items.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                ...req.body
            }
        }
        return item
    })
    item = items.find((item) => item.id === id)

    reply.send(item)
}

const deleteItem = (req, reply) => {
    const { id } = req.params
    items = items.filter((item) => item.id !== id)
    reply.send({ message: `Item ${id} has been removed` })
}

module.exports = {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
}
