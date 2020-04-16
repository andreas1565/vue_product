const Sequelize = require('sequelize');

db = new Sequelize('vueproduct', 'root', 'root', {
  dialect: 'mysql',
  port: 8889
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
