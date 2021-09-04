const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function register(req, res) {
  const { name, email, password } = req.body

  try {
    const userExist = await User.findOne({ email })
    if (userExist) return res.code(400).send({ msg: "Email is already exists" })

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = new User({ email, name, password: hash })
    await user.save()
    return res.send("User Saved successfully")

  } catch (error) {
    return res.code(400).send({ error, msg: "User Creation failed" })
  }
}

async function login(req, res) {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) return res.code(401).send("cannot find user in db")

    const result = await bcrypt.compare(password, user.password)
    if (!result) return res.status(400).send({ msg: "password not matched" })

    const payload = { userId: user._id }
    const newToken = jwt.sign(payload, process.env.jwtSecretKey, { expiresIn: '18h' })
    user.token = user.token.concat(newToken)
    await user.save()

    return res.send({ token: newToken })

  } catch (error) {
    return res.code(400).send({ error, msg: "User LogIn failed" })
  }
}

async function me(req, res) {
  try {
    const { _id, email, name } = req.user

    return res.send({ _id, email, name })

  } catch (error) {
    return res.code(400).send({ error, msg: "Cannot find the user" })
  }
}

async function logout(req, res) {
  const { user, token } = req

  try {
    await User.updateOne({ _id: user._id }, { $pull: { token } })
    return res.send("User Logged Out successfully")

  } catch (error) {
    return res.code(400).send({ error, msg: "User LogOut failed" })
  }
}

module.exports = {
  register,
  login,
  me,
  logout
}