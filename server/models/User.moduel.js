const Sequelize = require('sequelize');
const { db } = require('../config/database');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true, // don't allow empty strings
      isEmail: true // checks for email format (foo@bar.com)
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  createdAt: new Date(),
  updatedAt: new Date()
});
module.exports = User;
