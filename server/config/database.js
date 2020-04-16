const Sequelize = require('sequelize');

db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  port: process.env.DB_PORT
});

function dbCheck() {
  db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));
}

module.exports = {
  db,
  dbCheck
};
