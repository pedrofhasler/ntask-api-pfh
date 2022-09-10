const express = require('express');
const consign = require('consign');

const PORT = 3000;
const app = express();

app.set('json spaces', 4);

consign({ verbose: false })
  .include('db.js')
  .then('models')
  .then('associations.js')
  .then('auth.js')
  .then('middlewares.js')
  .then('routes')
  .then('boot.js')
  .into(app);

module.exports = app;
