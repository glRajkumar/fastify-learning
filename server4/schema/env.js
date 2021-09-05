const envSchema = {
  type: 'object',
  required: ['MONGODB_URL', 'jwtSecretKey'],
  properties: {
    MONGODB_URL: { type: 'string' },
    jwtSecretKey: { type: 'string' }
  },
  additionalProperties: false
}

const envOptions = {
  // confKey: 'config', -> default value
  schema: envSchema,
  dotenv: true,
  // data: process.env -> default value
}

module.exports = envOptions