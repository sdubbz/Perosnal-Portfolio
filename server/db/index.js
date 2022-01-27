const Sequelize = require("sequelize");



const dbConnection = new Sequelize( "postgres://localhost:5432/portfolio");

module.exports = dbConnection;


const Project = dbConnection.define("project", {
  title:{
    type: Sequelize.STRING,
  },
  imageUrl:{
    type: Sequelize.STRING,

  }
});
