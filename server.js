const express = require("express");
const app = express();
const port = process.env.PORT || 5050;
const cors = require("cors");
const sultanRoutes = require("./routes/routes");
const dotenv = require("dotenv");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const db = require('./config/config')
app.use(cors({ credentials: true, port }));
const dbModel = require('./models/index')
// enviroment
require("dotenv").config();
app.use(express.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  })
);
app.use(cookieParser());
// console.log("from server",model)
// console.log("first", dbModel)
// routes
app.use("/sultan-v1", sultanRoutes);

app.listen(port, async () => {
  console.log(`Server running on port ${port}.`);
});
