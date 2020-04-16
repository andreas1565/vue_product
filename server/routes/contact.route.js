const {
  GetAllContact,
  CreateContact,
  DeleteContact
} = require('../controllers/contact.controller');
const { auth } = require('../middleware/auth');
module.exports = function (app) {
  app.get('/api/v1/contact/', GetAllContact);

  app.post('/api/v1/contact/', CreateContact);

  app.delete('/api/v1/contact/:id', auth, DeleteContact);
};
