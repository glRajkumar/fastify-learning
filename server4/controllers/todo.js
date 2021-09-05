const ToDo = require('../models/ToDo')

async function getAllTodos(req, res) {
    const userId = req.user._id

    try {
        const todos = await ToDo.find({ "creator": userId, done: false })
        return res.send(todos)

    } catch (error) {
        return res.code(400).send(error)
    }
}

async function findTodoById(req, res) {
    const userId = req.user._id
    const id = req.params.id

    try {
        const todo = await ToDo.find({ "creator": userId, "_id": id })
        return res.send(todo)

    } catch (error) {
        return res.code(400).send(error)
    }
}

async function finishedTodos(req, res) {
    const userId = req.user._id

    try {
        const todos = await ToDo.find({ "creator": userId, done: true })
        return res.send(todos)

    } catch (error) {
        return res.code(400).send(error)
    }
}

async function createTodo(req, res) {
    const { title, description } = req.body
    const creator = req.user._id
    const done = false

    try {
        const todo = new ToDo({ title, description, creator, done })
        await todo.save()
        return res.send("ToDo is added Successfully")

    } catch (error) {
        return res.code(400).send(error)
    }
}

async function updateTodo(req, res) {
    const { id, title, description } = req.body

    try {
        await ToDo.findOneAndUpdate({ "_id": id }, { title, description })
        return res.send("ToDo is Updated")

    } catch (error) {
        return res.code(400).send(error)
    }
}

async function archiveTodo(req, res) {
    const { id } = req.body

    try {
        await ToDo.findOneAndUpdate({ "_id": id }, { done: true })
        return res.send("ToDo is Archived")

    } catch (error) {
        return res.code(400).send(error)
    }
}

async function deleteTodo(req, res) {
    const { id } = req.body

    try {
        await ToDo.findByIdAndDelete({ "_id": id })
        return res.send("ToDo is deleted")

    } catch (error) {
        return res.code(400).send(error)
    }
}

module.exports = {
    getAllTodos,
    findTodoById,
    finishedTodos,
    createTodo,
    updateTodo,
    archiveTodo,
    deleteTodo
}