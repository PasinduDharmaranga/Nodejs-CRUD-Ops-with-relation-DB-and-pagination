'use strict';

const models = require("./index")
module.exports = (sequelize, Sequelize) => {
    const Books = sequelize.define("books", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        isbn: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
        },
        updated: {
            type: Sequelize.DATE,
        },
        deleted: {
            type: Sequelize.DATE,
        }
        
    },
    {
        tableName: "books",
        timestamps: true,
        createdAt: "created",
        updatedAt: "updated",
        deletedAt: "deleted"
    }
    );
    return Books;
};
