module.exports = {
  db: {
    database: 'ntask_test',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'ntask_test.sqlite',
      logging: false,
      define: {
        underscore: true,
      },
    },
  },
  jwt: {
    secret:
      'aiosjdoiaj###&ẅieiwysjaçofybr8vvyy18y81y48y347ǘ0ve7r0w7vy86S7TGF1/863ES5TG7R14F6876H68SEHGNKUkdjg',
    options: { session: false },
  },
};
