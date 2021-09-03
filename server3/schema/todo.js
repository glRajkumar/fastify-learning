const str = { type: 'string' }
const bool = { type: 'boolean' }

const todo = {
  type: 'object',
  properties: {
    id: str,
    title: str,
    description: str,
    creator: str,
    done: bool
  }
}

const arrOfTodos = {
  type: 'array',
  items: todo
}

const getAllTodosSchema = {
  schema: {
    response: {
      200: arrOfTodos
    }
  }
}

const findTodoByIdSchema = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      }
    },
    response: {
      200: todo
    }
  }
}

const finishedTodosSchema = {
  schema: {
    response: {
      200: arrOfTodos
    }
  }
}

const createTodoSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'description'],
      properties: {
        title: str,
        description: str,
      },
    },
    response: {
      200: str,
    },
  }
}

const updateTodoSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['id', 'title', 'description'],
      properties: {
        id: str,
        title: str,
        description: str,
      },
    },
    response: {
      200: str,
    },
  }
}

const archiveTodoSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['id'],
      properties: {
        id: str
      },
    },
    response: {
      200: str,
    },
  }
}

const deleteTodoSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['id'],
      properties: {
        id: str
      },
    },
    response: {
      200: str,
    },
  }
}
