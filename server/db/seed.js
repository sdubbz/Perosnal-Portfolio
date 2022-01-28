const {dbConnection} = require("./database");
const Projects = require("./projects")


console.log(dbConnection)
const runSeed = async () => {


  await dbConnection.sync({force : true});
  console.log('Seed is complete!');
  process.kill(0)

};

runSeed();
