const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

/* ADD PROJECT SPECIFIC INFO HERE
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
*/
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const projectsRouter = require("./projects/projects.router");

const app = express();

app.use(cors());
// app.options("*", cors());
app.use(express.json());

app.use("/projects", projectsRouter);

app.use(notFound);
app.use(errorHandler);

/* ADD PROJECT SPECIFIC INFO HERE
app.use(notFound);
app.use(errorHandler);
*/

module.exports = app;
