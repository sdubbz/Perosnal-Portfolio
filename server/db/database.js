const Sequelize = require("sequelize");
const Project = require("./models/projects")



const db = new Sequelize( "postgres://localhost:5432/portfolio");

console.log(db)


// const Project = dbConnection.define("project", {
//   title:{
//     type: Sequelize.STRING,
//   },
//   imageUrl:{
//     type: Sequelize.STRING,

//   }
// });

module.exports = db;
