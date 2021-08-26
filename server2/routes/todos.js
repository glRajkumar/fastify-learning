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

function todoRoutes(fastify, opts, done) {
  fastify
    .get('/', getAllTodosOpts, getAllTodos)   // Get all todos
    .get('/:id', getTodoOpts, getTodo)        // Get single todos
    .post('/', addTodoOpts, addTodo)          // Add todo
    .put('/:id', updateTodoOpts, updateTodo)  // Update todo
    .put('/archived/:id', archiveTodoOpts, updateTodoArchive)  // Update todo - archive field
    .delete('/:id', delTodoOpts, deleteTodo)  // Delete todo

  done()
}

module.exports = todoRoutes