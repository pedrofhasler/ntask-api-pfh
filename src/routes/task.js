module.exports = (app) => {
  const Tasks = app.models.tasks;

  app.get('/task', (req, res) => {
    Tasks.findAll({}, (tasks) => {
      res.json({
        tasks,
      });
    });
  });
};
