'use strict';
const models = require("../models")

var controllers = {
    fetchAllBooks: async function (req, res, next) {
        models.books.findAll({
            limit: parseInt(req.query.limit),
            offset: parseInt(req.query.offset),
        })
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving Books."
                });
            });
    },
    fetchOneBook: async function (req, res, next) {
        models.books.findOne({
            where: { id: req.params.id },
            include: ["authors"]
        })
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving Books."
                });
            });
    },
    createBook: async function (req, res, next) {
        const transaction = await models.sequelize.transaction();

        models.books.create({
            name: req.body.name,
            isbn: req.body.isbn,
            author: req.body.author,
            authorId: req.body.authorId,
        }, { transaction })
            .then(async data => {
                await transaction.commit();
                res.status(200).send(data);
            })
            .catch(async err => {
                await transaction.rollback();

                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving Books."
                });
            });
    },
    updateBook: async function (req, res, next) {
        const transaction = await models.sequelize.transaction();
        models.books.update({
            name: req.body.name,
            isbn: req.body.isbn,
            author: req.body.author,
            authorId: req.body.authorId,
        }, { where: { id: req.params.id } }, { transaction })
            .then(async data => {
                await transaction.commit();
                res.status(200).send(data);
            })
            .catch(async err => {
                await transaction.rollback();

                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving Books."
                });
            });
    }
};



module.exports = controllers;