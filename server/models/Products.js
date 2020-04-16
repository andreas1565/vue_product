const Sequelize = require('sequelize');
const { db } = require('../config/database');
const Categories = require('./Categories');

const Products = db.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  categoryId: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  imageurl: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  createdAt: new Date(),
  updatedAt: new Date()
});
Products.belongsTo(Categories);
module.exports = Products;
