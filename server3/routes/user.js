const {
  register,
  login,
  me,
  logout
} = require('../controllers/user')

function userRoutes(fastify, opts, done) {
  fastify
    .post('/register', register)
    .post('/login', login)

  fastify.register(async function (fastify, opts, done) {
    fastify.addHook("preHandler", async (req, res) => fastify.auth(req, res))

    fastify.get('/me', me)
    fastify.post("/logout", logout)

    done()
  })

  done()
}

module.exports = userRoutes