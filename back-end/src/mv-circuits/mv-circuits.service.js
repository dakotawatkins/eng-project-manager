//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all hv spec columns in asc order. */
function list(mvUniqueId, projectId) {
  return knex("mv_circuits")
    .select("*")
    .where({project_id: projectId})
    .orderBy("mv_unique_id", "asc");
}

/** reads the data (row) with the given 'mv_unique_id'. */
function read(mv_unique_id, project_id) {
  return knex("mv_circuits")
    .select("*")
    .where({ 
      project_id: project_id,
      mv_unique_id: mv_unique_id })
    .first();
}

/** creates a new equipment (row) */
function create(mvCircuits) {
  return knex("mv_circuits").insert(mvCircuits).returning("*");
}

/** updates equipment with the given reservation_id. */
function update(mv_unique_id, status) {
  return knex("mv_circuits")
    .where({ mv_unique_id: mv_unique_id })
    .update({ status: status });
}

module.exports = {
  list,
  read,
  create,
  update,
};
