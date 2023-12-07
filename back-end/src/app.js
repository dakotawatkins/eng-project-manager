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
const equipmentCatalogRouter = require("./equipment/equipment-catalog.router");
const hvEquipmentRouter = require("./hv-equipment/hv-equipment.router");
const modulesEquipmentRouter = require("./modules/modules.router");
const mvCircuitsRouter = require("./mv-circuits/mv-circuits.router");
const siteProjectRouter = require("./site-project/site-project.router");
const transmissionLineRouter = require("./transmission-line/transmission-line.router");
const mainPowerTransformerRouter = require("./main-power-transformer/main-power-transformer.router");

const app = express();

app.use(cors());
// app.options("*", cors());
app.use(express.json());

const router = express.Router();
router.get("/", cors(), (req, res) => {
  res.json({
    message:
      "Welcome! You can access the data using these routes: /projects, /equipment, projects/:project_id, projects/:project_id/hv, projects/:project_id/hv/:hv_id, projects/:project_id/modules, projects/:project_id/modules/:mod_id, projects/:project_id/mv-circuits, projects/:project_id/mv-circuits/:mv_unique_id .",
  });
});


// 'app.use' calls on a url (ex: "/projects"), then the '.router' file to finish the route ('projectsRouter').
app.use("/", router);
app.use("/projects", projectsRouter);
app.use("/equipment", equipmentCatalogRouter);
app.use("/projects", hvEquipmentRouter);
app.use("/projects", modulesEquipmentRouter);
app.use("/projects", mvCircuitsRouter);
app.use("/projects/:project_id/site-project", siteProjectRouter);
app.use("/projects", transmissionLineRouter);
app.use("/projects", mainPowerTransformerRouter);

app.use(notFound);
app.use(errorHandler);

/* ADD PROJECT SPECIFIC INFO HERE
app.use(notFound);
app.use(errorHandler);
*/

module.exports = app;
