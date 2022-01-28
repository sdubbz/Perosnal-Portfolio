const express = require("express");
const app = express();

const port = 8080;

const dbConnection = require("./db/database");


const startServer = async () => {
  await dbConnection.sync();

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

startServer();



app.get("/", (req, res) => {
  res.send("hello")
})
