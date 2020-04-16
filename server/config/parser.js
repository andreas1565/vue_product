const parser = require('express-formidable');
const { join } = require('path');
module.exports = function(app) {
  app.use(
    parser({
      uploadDir: join(__dirname, '..', 'public'),
      encoding: 'utf-8',
      keepExtensions: true
    })
  );
};
