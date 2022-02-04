const express = require("express");
const app = express();
const morgan = require ("morgan");
const path = require('path');
const bodyParser = require("body-parser");
const {dbConnection} = require("./db/database");
const port = 8080;


app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', require('./db/api'));

app.get('*', function (req, res){
  res.sendFile(path.join(__dirname, '../public/index.html'))
})






const startServer = async () => {
  await dbConnection.sync();

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

startServer();




