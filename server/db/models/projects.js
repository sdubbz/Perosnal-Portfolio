const Sequelize = require("sequelize");
const db = require("../index")


const Project = db.define("project", {
  title:{
    type: Sequelize.STRING,
  }
});

module.exports = Project;
