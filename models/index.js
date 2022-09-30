'use strict';

const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  logging: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.authors = require("../models/authors.model")(sequelize, Sequelize);
db.books = require("../models/books.model")(sequelize, Sequelize);
db.authors.hasMany(db.books, { as: "books" });
db.books.belongsTo(db.authors, {
  foreignKey: "authorId",
  as: "authors",
});

module.exports = db;