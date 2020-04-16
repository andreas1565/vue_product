const Sequelize = require('sequelize');
const { db } = require('../config/database');

const Categories = db.define('categories', {
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
  createdAt: new Date(),
  updatedAt: new Date()
});

module.exports = Categories;
