const {
  getAllTodosOpts,
  getTodoOpts,
  addTodoOpts,
  updateTodoOpts,
  archiveTodoOpts,
  delTodoOpts
} = require('../schemas/todos')

const {
  getAllTodos,
  getTodo,
  addTodo,
  updateTodo,
  updateTodoArchive,
  deleteTodo
} = require('../controllers/todos')

function todoRoutes(fastify, options, done) {
  // Get all todos
  fastify.get('/', getAllTodosOpts, getAllTodos)

  // Get single todos
  fastify.get('/:id', getTodoOpts, getTodo)

  // Add todo
  fastify.post('/', addTodoOpts, addTodo)

  // Update todo
  fastify.put('/:id', updateTodoOpts, updateTodo)

  // Update todo - archive field
  fastify.put('/archived/:id', archiveTodoOpts, updateTodoArchive)

  // Delete todo
  fastify.delete('/:id', delTodoOpts, deleteTodo)

  done()
}

module.exports = todoRoutes
