const Sequelize = require('sequelize');
const { db } = require('../config/database');

const Contactinformation = db.define('contactinformation', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  phone: {
    type: Sequelize.FLOAT,
    allowNull: true,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  fax: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true // don't allow empty strings
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true, // don't allow empty strings
      isEmail: true
    }
  },
  createdAt: new Date(),
  updatedAt: new Date()
});

module.exports = Contactinformation;
