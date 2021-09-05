const jwt = require('jsonwebtoken')
const User = require('../models/User')

async function auth(fastify) {
  fastify.decorate('auth', async function (req, res) {
    try {
      // let payload = await req.jwtVerify()

      const token = req.headers.authorization.replace('Bearer ', '')
      const payload = jwt.verify(token, fastify.config.jwtSecretKey)
      const userId = payload.userId

      const user = await User.findById(userId)
      const tokenIndex = user.token.indexOf(token)
      if (!user) return res.code(400).send("User was not found")

      if (tokenIndex > -1) {
        req.user = user
        req.token = token

      } else {
        return res.code(401).send("Issue with token")
      }

    } catch (error) {
      return res.code(400).send("Auth token invalid")
    }
  })
}

module.exports = auth