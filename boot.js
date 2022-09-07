module.exports = (app) => {
  async function start(port) {
    try {
      await app.db.authenticate();
      await app.db.sync();
      app.listen(port, () => {
        console.log(`NTask API - http://localhost:${app.get('port')}`);
      });
    } catch (err) {
      console.log('Connection error with database');
      console.error(err);
    }
  }

  start(app.get('port'));
};
