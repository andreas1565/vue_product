const Sequelize = require('sequelize');
const { db } = require('../config/database');

const Contact = db.define('contacts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  address: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  phone: {
    allowNull: false,
    type: Sequelize.FLOAT,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  messages: {
    allowNull: false,
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  createdAt: new Date(),
  updatedAt: new Date()
});

module.exports = Contact;
