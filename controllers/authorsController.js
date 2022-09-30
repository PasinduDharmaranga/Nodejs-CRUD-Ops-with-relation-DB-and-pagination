'use strict';
const models = require("../models")

var controllers = {
   fetchAllAuthors: async function (req, res, next) {
      models.authors.findAll({
         limit: parseInt(req.query.limit),
         offset: parseInt(req.query.offset),
      })
         .then(data => {
            res.status(200).send(data);
         })
         .catch(err => {
            res.status(500).send({
               message:
                  err.message || "Some error occurred while fetching all authors."
            });
         });
   },
   fetchOneAuthor: async function (req, res, next) {
      models.authors.findOne({
         where: { id: req.params.id },
      })
         .then(data => {
            res.status(200).send(data);
         })
         .catch(err => {
            res.status(500).send({
               message:
                  err.message || "Some error occurred while fetching one author."
            });
         });
   },
   createAuthor: async function (req, res, next) {
      const transaction = await models.sequelize.transaction();

      models.authors.create({
         first_name: req.body.firstname,
         last_name: req.body.lastname,
      }, { transaction })
         .then(async data => {
            await transaction.commit();
            res.status(200).send(data);
         })
         .catch(async err => {
            await transaction.rollback();

            res.status(500).send({
               message:
                  err.message || "Some error occurred while creating author."
            });
         });
   },
   updateAuthor: async function (req, res, next) {
      const transaction = await models.sequelize.transaction();
      models.authors.update({
         first_name: req.body.firstname,
         last_name: req.body.lastname,
      }, { where: { id: req.params.id } }, { transaction })
         .then(async data => {
            await transaction.commit();
            res.status(200).send(data);
         })
         .catch(async err => {
            await transaction.rollback();

            res.status(500).send({
               message:
                  err.message || "Some error occurred while updating author."
            });
         });
   }
};



module.exports = controllers;