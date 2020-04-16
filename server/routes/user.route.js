const { CreateUser } = require('../controllers/user.controller.js');
module.exports = function(app) {
  app.post('/v1/users', CreateUser);
};
