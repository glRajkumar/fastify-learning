const {
  registerSchema,
  loginSchema,
  meSchema,
  logoutSchema
} = require('../schema/user')

const {
  register,
  login,
  me,
  logout
} = require('../controllers/user')

function userRoutes(fastify, opts, done) {
  fastify
    .post('/register', registerSchema, register)
    .post('/login', loginSchema, login)

  fastify.register(async function (fastify, opts, done) {
    fastify.addHook("preHandler", async (req, res) => fastify.auth(req, res))

    fastify.get('/me', meSchema, me)
    fastify.post("/logout", logoutSchema, logout)

    done()
  })

  done()
}

module.exports = userRoutes