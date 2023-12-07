//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");


/** lists all hv spec columns in asc order from joined tables 'high_voltage' and 'transmission_line'.. */
/* 
  'projectId' is pulled from URL as 'request.params.project_id'. 
  'list' selects all the data where the 'project_id' from the data is equal to 'projectId' (from the url) .
*/
function list(projectId) {
  return knex("high_voltage")
    .join(
      "transmission_line",
      "high_voltage.project_id",
      "transmission_line.project_id"
    )
    // .join(
    //   "main_power_transformer",
    //   "high_voltage.project_id",
    //   "main_power_transformer.project_id"
    // )
    // .select("high_voltage.*", "transmission_line.*", "main_power_transformer.*")
    .select("high_voltage.*", "transmission_line.*")
    .where({"high_voltage.project_id": projectId})
    .orderBy("hv_id", "asc");
}

/** reads the data (row) with the given 'hv_id'. */
function read(hv_id) {
  return knex("high_voltage").select("*").where({ hv_id: hv_id }).first();
}

// /** reads the data (row) with the given 'hv_id'. */
// function read(project_id, hv_id) {
//   return knex("high_voltage")
//     .join(
//       "transmission_line",
//       "high_voltage.project_id",
//       "transmission_line.project_id"
//     )
//     .select("*")
//     .where({
//       project_id: project_id,
//       hv_id: hv_id,
//     })
//     .first();
// }

/** creates a new equipment (row) */
function create(hvSpecs) {
  return knex("high_voltage").insert(hvSpecs).returning("*");
}

/** updates equipment with the given reservation_id. */
function update(hv_id, status) {
  return knex("high_voltage")
    .where({ hv_id: hv_id })
    .update({ status: status });
}

module.exports = {
  list,
  read,
  create,
  update,
};
