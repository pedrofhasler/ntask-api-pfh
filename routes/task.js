module.exports = (app) => {
  const Tasks = app.models.tasks;

  app
    .route('/tasks')
    .get(async (req, res) => {
      try {
        const result = await Tasks.findAll();
        res.json(result);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    })
    .post(async (req, res) => {
      try {
        const result = await Tasks.create(req.body);
        res.json(result);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    });

  app
    .route('/task/:id')
    .get(async (req, res) => {
      try {
        const { id } = req.params;
        const where = { id };
        const result = await Tasks.findOne({ where });
        if (result) {
          res.json(result);
        } else {
          res.sendStatus(404);
        }
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    })
    .put(async (req, res) => {
      try {
        const { id } = req.params;
        const where = { id };
        await Tasks.update({ where });
        res.sendStatus(204);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    })
    .delete(async (req, res) => {
      try {
        const { id } = req.params;
        const where = { id };
        await Tasks.destroy({ where });
        res.sendStatus(204);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    });
};
