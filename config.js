module.exports = {
  db: {
    database: 'ntask',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'ntask.sqlite',
      define: {
        underscore: true,
      },
    },
  },
  jwt: {
    secret: 'aiosjdoiaj###&ẅieiwyskdjg',
    options: { session: false },
  },
};
