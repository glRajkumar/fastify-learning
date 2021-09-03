const bool = { type: 'boolean' }
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

  }
}

const logoutSchema = {
  schema: {
    response: {
      200: str,
    },
  }
}