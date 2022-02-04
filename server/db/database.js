const Sequelize = require("sequelize");

const dbConnection = new Sequelize("postgres://localhost:5432/portfolio");





module.exports ={ dbConnection};
