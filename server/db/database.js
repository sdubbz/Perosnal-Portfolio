const Sequelize = require("sequelize");

const dbConnection = new Sequelize("postgres://localhost:5432/portfolio");


// const Projects = dbConnection.define('project', {
//   title:{
//     type: Sequelize.STRING,
//   },
//   imageUrl:{
//     type: Sequelize.STRING,

//   }
// });

console.log(dbConnection)
module.exports ={ dbConnection};
