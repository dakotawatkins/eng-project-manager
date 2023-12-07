//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all hv spec columns in asc order. */
/* 
  'projectId' is pulled from URL as 'request.params.project_id'. 
  'list' selects all the data where the 'project_id' from the data is equal to 'projectId' (from the url) .
*/
function list(transmissionLineUniqueId, projectId) {
  return knex("transmission_line")
    .select("*")
    .where({project_id: projectId})
    .orderBy("transmission_line_unique_id", "asc");
}

/** reads the data (row) with the given 'transmission_line_unique_id'. */
function read(transmission_line_unique_id, project_id) {
  return knex("transmission_line")
    .select("*")
    .where({ 
      project_id: project_id,
      transmission_line_unique_id: transmission_line_unique_id })
    .first();
}

/** creates a new equipment (row) */
function create(transmissionLine) {
  return knex("transmission_line").insert(transmissionLine).returning("*");
}

/** updates equipment with the given reservation_id. */
function update(transmission_line_unique_id, status) {
  return knex("transmission_line")
    .where({ transmission_line_unique_id: transmission_line_unique_id })
    .update({ status: status });
}

module.exports = {
  list,
  read,
  create,
  update,
};
