//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all hv spec columns in asc order. */
/* 
  'projectId' is pulled from URL as 'request.params.project_id'. 
  'list' selects all the data where the 'project_id' from the data is equal to 'projectId' (from the url) .
*/
function list(projectId) {
  return knex("modules")
    .select("*")
    .where({project_id: projectId})
    .orderBy("mod_id", "asc");
}

/** reads the data (row) with the given 'mod_id'. */
function read(mod_id) {
  return knex("modules")
    .select("*")
    .where({ mod_id: mod_id })
    .first();
}

/** creates a new equipment (row) */
function create(modSpecs) {
  return knex("modules").insert(modSpecs).returning("*");
}

/** updates equipment with the given reservation_id. */
function update(mod_id, status) {
  return knex("modules").where({ mod_id: mod_id }).update({ status: status });
}

module.exports = {
  list,
  read,
  create,
  update,
};
