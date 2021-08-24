let todos = require('../helpers/todos')

async function getAllTodos(req, reply) {
    const { start = "0", end = `${todos.length}` } = req.query
    return todos.filter((t, i) => i >= start && i <= end)
}

async function getTodo(req, reply) {
    const { id } = req.params
    const todo = todos.find((todo) => todo.id === id)

    if (todo) return reply.code(200).send(todo)
    return reply.code(404).send({ msg: "No todo found" })
}

const addTodo = async (req, reply) => {
    const { title, description } = req.body

    const item = {
        id: Date.now(),
        title,
        description
    }

    todos = [...todos, item]
    return reply.code(201).send(item)
}

const updateTodo = async (req, reply) => {
    const { id } = req.params

    todos = todos.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                ...req.body
            }
        }
        return item
    })

    item = todos.find((item) => item.id === id)
    return reply.send(item)
}

const updateTodoArchive = async (req, reply) => {
    const { id } = req.params

    todos = todos.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                archived: !item.archived
            }
        }
        return item
    })
    item = todos.find((item) => item.id === id)

    return reply.send(item)
}

const deleteTodo = async (req, reply) => {
    const { id } = req.params
    todos = todos.filter((item) => item.id !== id)
    return reply.send({ message: `Todo - ${id} has been removed` })
}

module.exports = {
    getAllTodos,
    getTodo,
    addTodo,
    updateTodo,
    updateTodoArchive,
    deleteTodo
}