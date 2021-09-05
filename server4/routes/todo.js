const {
  getTodosSchema,
  findTodoByIdSchema,
  createTodoSchema,
  updateTodoSchema,
  idInBodySchema
} = require('../schema/todo')

const {
  getAllTodos,
  findTodoById,
  finishedTodos,
  createTodo,
  updateTodo,
  archiveTodo,
  deleteTodo
} = require('../controllers/todo')

function todoRoutes(fastify, opts, done) {
  fastify.addHook('onRequest', fastify.auth)

  fastify
    .get('/', getTodosSchema, getAllTodos)
    .get('/findbyid/:id', findTodoByIdSchema, findTodoById)
    .get('/finished', getTodosSchema, finishedTodos)
    .post('/', createTodoSchema, createTodo)
    .put('/', updateTodoSchema, updateTodo)
    .put('/archive', idInBodySchema, archiveTodo)
    .delete('/', idInBodySchema, deleteTodo)

  done()
}

module.exports = todoRoutes