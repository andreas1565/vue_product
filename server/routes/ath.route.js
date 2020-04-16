const { GetToken, RefreshToken } = require('../controllers/auth.controller');
module.exports = function(app) {
  app.post('/auth/get-token', GetToken);
  app.post('/auth/refresh-token', RefreshToken);
};
