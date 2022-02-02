const Sequelize = require("sequelize");

const {dbConnection} = require("./database")




const Projects = dbConnection.define('project', {
  title:{
    type: Sequelize.STRING,
  },
  imageUrl:{
    type: Sequelize.STRING,

  }
});


module.exports = Projects;
