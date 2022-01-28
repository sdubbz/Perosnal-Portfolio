const Sequelize = require("sequelize");

const db = require("../database")


console.log(db)
const Project = db.define("project", {
  title:{
    type: Sequelize.STRING,
  },
  imageUrl:{
    type: Sequelize.STRING,

  }
});

module.exports = Project;
