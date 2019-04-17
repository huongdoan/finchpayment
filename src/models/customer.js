'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

let Customer = db.define('customer', {
  customer_id: Sequelize.INTEGER,
  first_name: Sequelize.TEXT,
  last_name: Sequelize.TEXT,
  phone: Sequelize.TEXT,
  email: Sequelize.TEXT,
  date_of_birth:Sequelize.DATE,
  created_on: Sequelize.DATE,

},{
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,

  // don't delete database entries but set the newly added attribute deletedAt
  // to the current date (when deletion was done). paranoid will only work if
  // timestamps are enabled
  paranoid: true,

  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  //underscored: true,

  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,

});

module.exports = Customer;
