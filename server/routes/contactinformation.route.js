const {
  GetAllContactInformation,
  GetOneContactInformation,
  EditContactIformation
} = require('../controllers/contactinformation.controller');
const { auth } = require('../middleware/auth');
module.exports = function (app) {
  app.get('/api/v1/contactinformation/', GetAllContactInformation);

  app.get('/api/v1/contactinformation/:id', GetOneContactInformation);

  app.patch('/api/v1/contactinformation/:id', auth, EditContactIformation);
};
