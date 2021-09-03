// const {
//   getAllTodosOpts,
//   getTodoOpts,
//   addTodoOpts,
//   updateTodoOpts,
//   archiveTodoOpts,
//   delTodoOpts
// } = require('../schemas/todos')

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
  fastify.addHook("preHandler", async (req, res) => fastify.auth(req, res))

  fastify
    .get('/', getAllTodos)
    .get('/findbyid/:id', findTodoById)
    .get('/finished', finishedTodos)
    .post('/', createTodo)
    .put('/', updateTodo)
    .put('/archive', archiveTodo)
    .delete('/', deleteTodo)

  done()
}

module.exports = todoRoutes