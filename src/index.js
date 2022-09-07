const express = require('express');
const consign = require('consign');

const PORT = 3000;
const app = express();

app.set('json spaces', 4);

consign()
  .include('src/models')
  .then('src/middlewares.js')
  .then('src/routes')
  .then('src/boot.js')
  .into(app);
