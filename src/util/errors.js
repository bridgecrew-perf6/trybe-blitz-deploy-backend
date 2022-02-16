const errors = {
  invalidEntries: {
    error: {
      status: 400,
      message: 'Invalid entries. Try again.',
    },
  },
  taskNotFound: {
    error: {
      status: 404,
      message: 'Task not found.',
    },
  },
};

module.exports = errors;
