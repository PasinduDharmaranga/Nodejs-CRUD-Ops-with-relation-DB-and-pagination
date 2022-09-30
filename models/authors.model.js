const Books = require("./books.model");

module.exports = (sequelize, Sequelize) => {
    const Authors = sequelize.define("authors", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
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
        tableName: "authors",
        timestamps: true,
        createdAt: "created",
        updatedAt: "updated",
        deletedAt: "deleted"
    });

return Authors;
};
