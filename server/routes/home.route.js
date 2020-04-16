const { Home } = require('../controllers/home.controller');
module.exports = function(app) {
  app.get('/', Home);
};
