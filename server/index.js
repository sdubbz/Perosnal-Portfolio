const express = require("express");
const app = express();

const port = 8080
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})

app.get("/", (req, res) => {
  res.send("hello")
})
