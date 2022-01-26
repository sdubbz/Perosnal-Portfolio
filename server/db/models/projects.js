const Sequelize = require("sequelize");
const db = require("../index")
const defaultPic = require("../../../default.jpg")


const Project = db.define("project", {
  title:{
    type: Sequelize.STRING,
  },
  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: defaultPic
  }
});

module.exports = Project;
