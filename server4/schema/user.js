const str = { type: 'string' }

const registerSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'email', 'password'],
      properties: {
        name: str,
        email: str,
        password: str
      },
    },
    response: {
      200: str,
    },
  }
}

const loginSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        email: str,
        password: str
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          token: str
        }
      },
    },
  }
}

const meSchema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          _id: str,
          name: str,
          email: str
        }
      },
    }
  }
}

const logoutSchema = {
  schema: {
    response: {
      200: str,
    },
  }
}

module.exports = {
  registerSchema,
  loginSchema,
  meSchema,
  logoutSchema
}