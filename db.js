const Sequelize = require('sequelize');
const config = require('./config');

let sequelize = null;
const {
  db: { database, username, password, params },
} = config;

module.exports = () => {
  // Singleton para garantir apenas uma instancia da conexão do sequelize
  if (!sequelize) {
    sequelize = new Sequelize(database, username, password, params);
  }
  return sequelize;
};
