const Sequelize = require("sequelize");

const {dbConnection} = require("./database")


console.log(dbConnection.define)

const Projects = dbConnection.define('project', {
  title:{
    type: Sequelize.STRING,
  },
  imageUrl:{
    type: Sequelize.STRING,

  }
});

console.log(Projects)
module.exports = Projects;
