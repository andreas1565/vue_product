const {
  GetAllCategories,
  GetOneCategorie,
  CreateCategories,
  EditCategorie,
  DeleteCategorie
} = require('../controllers/categories.controller');
const { auth } = require('../middleware/auth');
module.exports = function (app) {
  app.get('/api/v1/categories', GetAllCategories);

  app.post('/api/v1/categories', auth, CreateCategories);

  app.get('/api/v1/categories/:id', GetOneCategorie);

  app.patch('/api/v1/categories/:id', auth, EditCategorie);

  app.delete('/api/v1/categories/:id', auth, DeleteCategorie);
};
