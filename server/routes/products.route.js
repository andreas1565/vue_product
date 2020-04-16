const {
  GetAllProducts,
  GetAllProductsWithPagination,
  CreateProduct,
  GetOneProduct,
  EditProduct,
  EditProductImage,
  DeleteProdut
} = require('../controllers/products.controller');
const { auth } = require('../middleware/auth');
module.exports = function (app) {
  app.get('/api/v1/products', GetAllProducts);
  app.get('/api/v1/products/Pagination', GetAllProductsWithPagination);
  app.post('/api/v1/products', auth, CreateProduct);

  app.get('/api/v1/products/:id', GetOneProduct);

  app.patch('/api/v1/products/:id', auth, EditProduct);

  app.patch('/api/v1/products/image/:id', auth, EditProductImage);

  app.delete('/api/v1/products/:id', auth, DeleteProdut);
};
